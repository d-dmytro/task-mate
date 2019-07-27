import React from 'react';
import initApollo, { MyApolloClientCache } from './init-apollo';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';
import OriginalApp, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { ApolloClient } from 'apollo-boost';

interface ApolloInitialProps {
  apolloState: MyApolloClientCache;
}

interface ApolloProps extends ApolloInitialProps {}

export default (App: typeof OriginalApp) => {
  return class Apollo extends React.Component<ApolloProps & AppProps> {
    static displayName = 'withApollo(App)';
    private apolloClient: ApolloClient<MyApolloClientCache>;

    static async getInitialProps(
      ctx: AppContext
    ): Promise<ApolloInitialProps & AppInitialProps> {
      const { Component, router } = ctx;

      let appProps: AppInitialProps = { pageProps: {} };
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();

      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props: ApolloProps & AppProps) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};

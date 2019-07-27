import React from 'react';
import { NextPage } from 'next';
import { TasksComponent, TaskStatus } from '../generated/graphql';
import { Layout } from '../components/Layout';
import { TaskList } from '../components/TaskList';

interface InitialProps {
  greeting: string;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  return (
    <Layout>
      <TasksComponent variables={{ status: TaskStatus.Active }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading.</p>;
          } else if (error) {
            return <p>An error occurred.</p>;
          }

          const tasks = data && data.tasks ? data.tasks : [];

          return <TaskList tasks={tasks} />;
        }}
      </TasksComponent>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => ({
  greeting: 'Hello World!'
});

export default IndexPage;

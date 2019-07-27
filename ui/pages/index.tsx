import React from 'react';
import { NextPage } from 'next';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

interface InitialProps {
  greeting: string;
}

interface Props extends InitialProps {}

const tasksQuery = gql`
  query Tasks($status: TaskStatus) {
    tasks(status: $status) {
      id
      title
      status
    }
  }
`;

interface TasksQuery {
  tasks: {
    id: number;
    title: string;
    status: string;
  }[];
}

interface TasksQueryVariables {
  status: string;
}

const IndexPage: NextPage<Props, InitialProps> = props => {
  return (
    <Query<TasksQuery, TasksQueryVariables>
      query={tasksQuery}
      variables={{ status: 'active' }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading.</p>;
        } else if (error) {
          return <p>An error occurred.</p>;
        }

        const tasks = data && data.tasks ? data.tasks : [];

        return (
          <ul>
            {tasks.map(task => {
              return <li key={task.id}>{task.title}</li>;
            })}
          </ul>
        );
      }}
    </Query>
  );
};

IndexPage.getInitialProps = async () => ({
  greeting: 'Hello World!'
});

export default IndexPage;

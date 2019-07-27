import React from 'react';
import { NextPage } from 'next';
import { TasksComponent, TaskStatus } from '../generated/graphql';
import { Layout } from '../components/Layout';

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

          return (
            <ul>
              {tasks.map(task => {
                return <li key={task.id}>{task.title}</li>;
              })}
            </ul>
          );
        }}
      </TasksComponent>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => ({
  greeting: 'Hello World!'
});

export default IndexPage;

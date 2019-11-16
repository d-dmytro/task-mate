import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import {
  TaskComponent,
  useTaskQuery,
  useTaskLazyQuery
} from '../generated/graphql';
import UpdateTaskForm from '../components/UpdateTaskForm';

interface InitialProps {
  id: number;
}

interface AllProps extends InitialProps {}

const UpdatePage: NextPage<AllProps, InitialProps> = ({ id }) => {
  const [getTask, { loading, error, data }] = useTaskLazyQuery({
    variables: { id }
  });
  useEffect(() => {
    if (id) {
      getTask();
    }
  }, []);
  const task = data && data.task ? data.task : null;
  return (
    <Layout>
      {id ? (
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurrred.</p>
        ) : task ? (
          <UpdateTaskForm
            initialInput={{
              id: task.id,
              title: task.title
            }}
          />
        ) : (
          <p>Could not find the task.</p>
        )
      ) : (
        <p>Invalid id.</p>
      )}
    </Layout>
  );
};

UpdatePage.getInitialProps = async ctx => {
  return {
    id: typeof ctx.query.id === 'string' ? Number(ctx.query.id) : NaN
  };
};

export default UpdatePage;

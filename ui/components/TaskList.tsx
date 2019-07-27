import React from 'react';
import {
  Task,
  withDeleteTask,
  DeleteTaskMutationFn,
  TasksQuery,
  TasksQueryVariables,
  TasksDocument,
  TaskStatus
} from '../generated/graphql';
import Link from 'next/link';
import { isApolloError } from 'apollo-boost';

interface MutationProps {
  deleteTask?: DeleteTaskMutationFn;
}

interface ExposedProps {
  tasks: Task[];
}

type AllProps = MutationProps & ExposedProps;

const TaskList: React.FunctionComponent<AllProps> = ({ tasks, deleteTask }) => {
  const deleteTaskById = async (id: number) => {
    if (deleteTask) {
      try {
        await deleteTask({
          variables: { id },
          update: (cache, result) => {
            if (result.data && result.data.deleteTask) {
              const tasksCache = cache.readQuery<
                TasksQuery,
                TasksQueryVariables
              >({
                query: TasksDocument,
                variables: { status: TaskStatus.Active }
              });
              if (tasksCache) {
                cache.writeQuery<TasksQuery, TasksQueryVariables>({
                  query: TasksDocument,
                  variables: { status: TaskStatus.Active },
                  data: {
                    tasks: tasksCache.tasks.filter(task => task.id !== id)
                  }
                });
              }
            }
          }
        });
      } catch (e) {
        if (isApolloError(e) && e.networkError) {
          alert('A network error occurred.');
        } else {
          alert('An error occurred. Please try again.');
        }
      }
    }
  };
  return (
    <ul>
      {tasks.map(task => {
        return (
          <li key={task.id}>
            <div className="title">
              <Link href={{ pathname: '/update', query: { id: task.id } }}>
                <a>{task.title}</a>
              </Link>
            </div>
            <button
              onClick={() => deleteTaskById(task.id)}
              className="deleteButton"
            >
              &times;
            </button>
          </li>
        );
      })}
      <style jsx>{`
        ul {
          list-style: none;
          margin: 0 0 30px;
          padding: 0;
        }
        li {
          align-items: center;
          border: 1px solid #dde5ff;
          display: flex;
          padding: 14px;
        }
        li + li {
          margin-top: -1px;
        }
        li:nth-child(odd) {
          background: #fcfdff;
        }
        .title {
          margin: 0 20px;
        }
        .title a {
          color: #5d647b;
          display: block;
        }
        .title a:hover {
          color: #7694f5;
        }
        .deleteButton {
          background: #dde5ff;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          color: #7694f5;
          flex-shrink: 0;
          font-size: 12px;
          font-weight: bold;
          height: 20px;
          line-height: 18px;
          margin: 0 0 0 auto;
          outline: 0;
          padding: 0;
          text-align: center;
          width: 20px;
        }
        .deleteButton:hover {
          background: #7694f5;
          color: white;
        }
      `}</style>
    </ul>
  );
};

export default withDeleteTask<ExposedProps, MutationProps>({
  props: ({ mutate }) => ({ deleteTask: mutate })
})(TaskList);

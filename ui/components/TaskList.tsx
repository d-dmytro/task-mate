import React from 'react';
import {
  Task,
  TasksQuery,
  TasksQueryVariables,
  TasksDocument,
  TaskStatus,
  useDeleteTaskMutation,
  useChangeStatusMutation
} from '../generated/graphql';
import Link from 'next/link';
import { isApolloError } from 'apollo-boost';
import { ITaskFilter } from './TaskFilter';

interface Props {
  tasks: Task[];
  filter: ITaskFilter;
}

const TaskList: React.FunctionComponent<Props> = ({ tasks, filter }) => {
  const [deleteTask] = useDeleteTaskMutation();
  const [changeStatus] = useChangeStatusMutation();
  const deleteTaskById = async (id: number) => {
    try {
      await deleteTask({
        variables: { id },
        update: (cache, result) => {
          if (result.data && result.data.deleteTask) {
            const tasksCache = cache.readQuery<TasksQuery, TasksQueryVariables>(
              {
                query: TasksDocument,
                variables: filter
              }
            );
            if (tasksCache) {
              cache.writeQuery<TasksQuery, TasksQueryVariables>({
                query: TasksDocument,
                variables: filter,
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
  };
  const changeTaskStatusById = async (id: number, status: TaskStatus) => {
    await changeStatus({
      variables: { id, status },
      update: (cache, result) => {
        if (filter.status && result.data && result.data.changeStatus) {
          const tasksCache = cache.readQuery<TasksQuery, TasksQueryVariables>({
            query: TasksDocument,
            variables: filter
          });
          if (tasksCache) {
            cache.writeQuery<TasksQuery, TasksQueryVariables>({
              query: TasksDocument,
              variables: filter,
              data: {
                tasks: tasksCache.tasks.filter(
                  task => task.status === filter.status
                )
              }
            });
          }
        }
      }
    });
  };
  return (
    <ul>
      {tasks.map(task => {
        return (
          <li key={task.id}>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={task.status === TaskStatus.Completed}
                onChange={e => {
                  const newStatus = e.target.checked
                    ? TaskStatus.Completed
                    : TaskStatus.Active;
                  changeTaskStatusById(task.id, newStatus);
                }}
              />
              <span />
            </label>
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
        .checkbox {
          cursor: pointer;
        }
        .checkbox input {
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          position: absolute;
        }
        .checkbox span {
          align-items: center;
          border: 2px solid #7694f5;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          height: 30px;
          width: 30px;
        }
        .checkbox span:before {
          border: solid #7694f5;
          border-width: 0 3px 3px 0;
          content: '';
          display: block;
          height: 12px;
          opacity: 0;
          transform: rotate(45deg);
          width: 7px;
        }
        .checkbox input:checked + span:before {
          opacity: 1;
        }
        .checkbox span:hover {
          box-shadow: inset 0 0 0 2px #dde5ff;
        }
      `}</style>
    </ul>
  );
};

export default TaskList;

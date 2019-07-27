import React from 'react';
import { Task } from '../generated/graphql';
import Link from 'next/link';

interface Props {
  tasks: Task[];
}

export const TaskList: React.FunctionComponent<Props> = ({ tasks }) => {
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
      `}</style>
    </ul>
  );
};

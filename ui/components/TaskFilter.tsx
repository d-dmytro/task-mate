import React from 'react';
import Link from 'next/link';
import { TaskStatus } from '../generated/graphql';

export interface ITaskFilter {
  status?: TaskStatus;
}

interface Props {
  filter: ITaskFilter;
}

const TaskFilter: React.FunctionComponent<Props> = ({ filter }) => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a className={!filter.status ? 'active' : undefined}>All</a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/', query: { status: TaskStatus.Active } }}>
          <a
            className={
              filter.status === TaskStatus.Active ? 'active' : undefined
            }
          >
            Active
          </a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/', query: { status: TaskStatus.Completed } }}>
          <a
            className={
              filter.status === TaskStatus.Completed ? 'active' : undefined
            }
          >
            Completed
          </a>
        </Link>
      </li>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          margin: 0 0 30px;
          padding: 0;
        }
        li {
          margin: 0 10px;
        }
        li a {
          color: #5d647b;
        }
        li a:hover {
          color: #7694f5;
        }
        .active {
          border-bottom: 2px solid #7694f5;
        }
      `}</style>
    </ul>
  );
};

export default TaskFilter;

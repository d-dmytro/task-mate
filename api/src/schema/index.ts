import { gql } from 'apollo-server-express';
import { TaskStatus } from '../entities/task';

export default gql`
  enum TaskStatus {
    ${Object.keys(TaskStatus).join('\n')}
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
  }

  input CreateTaskInput {
    title: String!
  }

  input UpdateTaskInput {
    id: Int!
    title: String
    status: TaskStatus
  }

  type Query {
    hello: String
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    changeStatus(id: Int!, status: TaskStatus!): Task
    deleteTask(id: Int!): Task
  }
`;

export interface CreateTaskInput {
  title: string;
}

export interface UpdateTaskInput {
  id: number;
  title: string;
  status: TaskStatus;
}

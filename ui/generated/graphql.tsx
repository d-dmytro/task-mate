import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type CreateTaskInput = {
  title: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTask?: Maybe<Task>;
  updateTask?: Maybe<Task>;
  changeStatus?: Maybe<Task>;
  deleteTask?: Maybe<Task>;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

export type MutationChangeStatusArgs = {
  id: Scalars["Int"];
  status: TaskStatus;
};

export type MutationDeleteTaskArgs = {
  id: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  hello?: Maybe<Scalars["String"]>;
  tasks: Array<Task>;
  task?: Maybe<Task>;
};

export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>;
};

export type QueryTaskArgs = {
  id: Scalars["Int"];
};

export type Task = {
  __typename?: "Task";
  id: Scalars["Int"];
  title: Scalars["String"];
  status: TaskStatus;
};

export enum TaskStatus {
  Active = "active",
  Completed = "completed"
}

export type UpdateTaskInput = {
  id: Scalars["Int"];
  title?: Maybe<Scalars["String"]>;
  status?: Maybe<TaskStatus>;
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput;
};

export type CreateTaskMutation = { __typename?: "Mutation" } & {
  createTask: Maybe<
    { __typename?: "Task" } & Pick<Task, "id" | "title" | "status">
  >;
};

export type TasksQueryVariables = {
  status?: Maybe<TaskStatus>;
};

export type TasksQuery = { __typename?: "Query" } & {
  tasks: Array<{ __typename?: "Task" } & Pick<Task, "id" | "title" | "status">>;
};

export const CreateTaskDocument = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      status
    }
  }
`;
export type CreateTaskMutationFn = ReactApollo.MutationFn<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export type CreateTaskComponentProps = Omit<
  ReactApollo.MutationProps<CreateTaskMutation, CreateTaskMutationVariables>,
  "mutation"
>;

export const CreateTaskComponent = (props: CreateTaskComponentProps) => (
  <ReactApollo.Mutation<CreateTaskMutation, CreateTaskMutationVariables>
    mutation={CreateTaskDocument}
    {...props}
  />
);

export type CreateTaskProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateTaskMutation, CreateTaskMutationVariables>
> &
  TChildProps;
export function withCreateTask<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreateTaskMutation,
    CreateTaskMutationVariables,
    CreateTaskProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreateTaskMutation,
    CreateTaskMutationVariables,
    CreateTaskProps<TChildProps>
  >(CreateTaskDocument, {
    alias: "withCreateTask",
    ...operationOptions
  });
}
export const TasksDocument = gql`
  query Tasks($status: TaskStatus) {
    tasks(status: $status) {
      id
      title
      status
    }
  }
`;
export type TasksComponentProps = Omit<
  ReactApollo.QueryProps<TasksQuery, TasksQueryVariables>,
  "query"
>;

export const TasksComponent = (props: TasksComponentProps) => (
  <ReactApollo.Query<TasksQuery, TasksQueryVariables>
    query={TasksDocument}
    {...props}
  />
);

export type TasksProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<TasksQuery, TasksQueryVariables>
> &
  TChildProps;
export function withTasks<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    TasksQuery,
    TasksQueryVariables,
    TasksProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    TasksQuery,
    TasksQueryVariables,
    TasksProps<TChildProps>
  >(TasksDocument, {
    alias: "withTasks",
    ...operationOptions
  });
}

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

export type ChangeStatusMutationVariables = {
  id: Scalars["Int"];
  status: TaskStatus;
};

export type ChangeStatusMutation = { __typename?: "Mutation" } & {
  changeStatus: Maybe<
    { __typename?: "Task" } & Pick<Task, "id" | "title" | "status">
  >;
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput;
};

export type CreateTaskMutation = { __typename?: "Mutation" } & {
  createTask: Maybe<
    { __typename?: "Task" } & Pick<Task, "id" | "title" | "status">
  >;
};

export type DeleteTaskMutationVariables = {
  id: Scalars["Int"];
};

export type DeleteTaskMutation = { __typename?: "Mutation" } & {
  deleteTask: Maybe<
    { __typename?: "Task" } & Pick<Task, "id" | "title" | "status">
  >;
};

export type TaskQueryVariables = {
  id: Scalars["Int"];
};

export type TaskQuery = { __typename?: "Query" } & {
  task: Maybe<{ __typename?: "Task" } & Pick<Task, "id" | "title" | "status">>;
};

export type TasksQueryVariables = {
  status?: Maybe<TaskStatus>;
};

export type TasksQuery = { __typename?: "Query" } & {
  tasks: Array<{ __typename?: "Task" } & Pick<Task, "id" | "title" | "status">>;
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput;
};

export type UpdateTaskMutation = { __typename?: "Mutation" } & {
  updateTask: Maybe<
    { __typename?: "Task" } & Pick<Task, "id" | "title" | "status">
  >;
};

export const ChangeStatusDocument = gql`
  mutation ChangeStatus($id: Int!, $status: TaskStatus!) {
    changeStatus(id: $id, status: $status) {
      id
      title
      status
    }
  }
`;
export type ChangeStatusMutationFn = ReactApollo.MutationFn<
  ChangeStatusMutation,
  ChangeStatusMutationVariables
>;
export type ChangeStatusComponentProps = Omit<
  ReactApollo.MutationProps<
    ChangeStatusMutation,
    ChangeStatusMutationVariables
  >,
  "mutation"
>;

export const ChangeStatusComponent = (props: ChangeStatusComponentProps) => (
  <ReactApollo.Mutation<ChangeStatusMutation, ChangeStatusMutationVariables>
    mutation={ChangeStatusDocument}
    {...props}
  />
);

export type ChangeStatusProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ChangeStatusMutation, ChangeStatusMutationVariables>
> &
  TChildProps;
export function withChangeStatus<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ChangeStatusMutation,
    ChangeStatusMutationVariables,
    ChangeStatusProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    ChangeStatusMutation,
    ChangeStatusMutationVariables,
    ChangeStatusProps<TChildProps>
  >(ChangeStatusDocument, {
    alias: "withChangeStatus",
    ...operationOptions
  });
}
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
export const DeleteTaskDocument = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id) {
      id
      title
      status
    }
  }
`;
export type DeleteTaskMutationFn = ReactApollo.MutationFn<
  DeleteTaskMutation,
  DeleteTaskMutationVariables
>;
export type DeleteTaskComponentProps = Omit<
  ReactApollo.MutationProps<DeleteTaskMutation, DeleteTaskMutationVariables>,
  "mutation"
>;

export const DeleteTaskComponent = (props: DeleteTaskComponentProps) => (
  <ReactApollo.Mutation<DeleteTaskMutation, DeleteTaskMutationVariables>
    mutation={DeleteTaskDocument}
    {...props}
  />
);

export type DeleteTaskProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<DeleteTaskMutation, DeleteTaskMutationVariables>
> &
  TChildProps;
export function withDeleteTask<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    DeleteTaskMutation,
    DeleteTaskMutationVariables,
    DeleteTaskProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    DeleteTaskMutation,
    DeleteTaskMutationVariables,
    DeleteTaskProps<TChildProps>
  >(DeleteTaskDocument, {
    alias: "withDeleteTask",
    ...operationOptions
  });
}
export const TaskDocument = gql`
  query Task($id: Int!) {
    task(id: $id) {
      id
      title
      status
    }
  }
`;
export type TaskComponentProps = Omit<
  ReactApollo.QueryProps<TaskQuery, TaskQueryVariables>,
  "query"
> &
  ({ variables: TaskQueryVariables; skip?: false } | { skip: true });

export const TaskComponent = (props: TaskComponentProps) => (
  <ReactApollo.Query<TaskQuery, TaskQueryVariables>
    query={TaskDocument}
    {...props}
  />
);

export type TaskProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<TaskQuery, TaskQueryVariables>
> &
  TChildProps;
export function withTask<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    TaskQuery,
    TaskQueryVariables,
    TaskProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    TaskQuery,
    TaskQueryVariables,
    TaskProps<TChildProps>
  >(TaskDocument, {
    alias: "withTask",
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
export const UpdateTaskDocument = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      id
      title
      status
    }
  }
`;
export type UpdateTaskMutationFn = ReactApollo.MutationFn<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export type UpdateTaskComponentProps = Omit<
  ReactApollo.MutationProps<UpdateTaskMutation, UpdateTaskMutationVariables>,
  "mutation"
>;

export const UpdateTaskComponent = (props: UpdateTaskComponentProps) => (
  <ReactApollo.Mutation<UpdateTaskMutation, UpdateTaskMutationVariables>
    mutation={UpdateTaskDocument}
    {...props}
  />
);

export type UpdateTaskProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UpdateTaskMutation, UpdateTaskMutationVariables>
> &
  TChildProps;
export function withUpdateTask<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdateTaskMutation,
    UpdateTaskMutationVariables,
    UpdateTaskProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdateTaskMutation,
    UpdateTaskMutationVariables,
    UpdateTaskProps<TChildProps>
  >(UpdateTaskDocument, {
    alias: "withUpdateTask",
    ...operationOptions
  });
}

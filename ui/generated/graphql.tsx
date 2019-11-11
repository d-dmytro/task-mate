import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateTaskInput = {
  title: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createTask?: Maybe<Task>,
  updateTask?: Maybe<Task>,
  changeStatus?: Maybe<Task>,
  deleteTask?: Maybe<Task>,
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput
};


export type MutationChangeStatusArgs = {
  id: Scalars['Int'],
  status: TaskStatus
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int']
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  task?: Maybe<Task>,
};


export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>
};


export type QueryTaskArgs = {
  id: Scalars['Int']
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['Int'],
  title: Scalars['String'],
  status: TaskStatus,
};

export enum TaskStatus {
  Active = 'active',
  Completed = 'completed'
}

export type UpdateTaskInput = {
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>,
  status?: Maybe<TaskStatus>,
};


export type ChangeStatusMutationVariables = {
  id: Scalars['Int'],
  status: TaskStatus
};


export type ChangeStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeStatus: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type CreateTaskMutationVariables = {
  input: CreateTaskInput
};


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type DeleteTaskMutationVariables = {
  id: Scalars['Int']
};


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type TaskQueryVariables = {
  id: Scalars['Int']
};


export type TaskQuery = (
  { __typename?: 'Query' }
  & { task: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type TasksQueryVariables = {
  status?: Maybe<TaskStatus>
};


export type TasksQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput
};


export type UpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);


export const ChangeStatusDocument = gql`
    mutation ChangeStatus($id: Int!, $status: TaskStatus!) {
  changeStatus(id: $id, status: $status) {
    id
    title
    status
  }
}
    `;
export type ChangeStatusMutationFn = ApolloReactCommon.MutationFunction<ChangeStatusMutation, ChangeStatusMutationVariables>;
export type ChangeStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangeStatusMutation, ChangeStatusMutationVariables>, 'mutation'>;

    export const ChangeStatusComponent = (props: ChangeStatusComponentProps) => (
      <ApolloReactComponents.Mutation<ChangeStatusMutation, ChangeStatusMutationVariables> mutation={ChangeStatusDocument} {...props} />
    );
    
export type ChangeStatusProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ChangeStatusMutation, ChangeStatusMutationVariables> & TChildProps;
export function withChangeStatus<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChangeStatusMutation,
  ChangeStatusMutationVariables,
  ChangeStatusProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ChangeStatusMutation, ChangeStatusMutationVariables, ChangeStatusProps<TChildProps>>(ChangeStatusDocument, {
      alias: 'changeStatus',
      ...operationOptions
    });
};

/**
 * __useChangeStatusMutation__
 *
 * To run a mutation, you first call `useChangeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeStatusMutation, { data, loading, error }] = useChangeStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useChangeStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeStatusMutation, ChangeStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeStatusMutation, ChangeStatusMutationVariables>(ChangeStatusDocument, baseOptions);
      }
export type ChangeStatusMutationHookResult = ReturnType<typeof useChangeStatusMutation>;
export type ChangeStatusMutationResult = ApolloReactCommon.MutationResult<ChangeStatusMutation>;
export type ChangeStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeStatusMutation, ChangeStatusMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    status
  }
}
    `;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;
export type CreateTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTaskMutation, CreateTaskMutationVariables>, 'mutation'>;

    export const CreateTaskComponent = (props: CreateTaskComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTaskMutation, CreateTaskMutationVariables> mutation={CreateTaskDocument} {...props} />
    );
    
export type CreateTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateTaskMutation, CreateTaskMutationVariables> & TChildProps;
export function withCreateTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  CreateTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTaskMutation, CreateTaskMutationVariables, CreateTaskProps<TChildProps>>(CreateTaskDocument, {
      alias: 'createTask',
      ...operationOptions
    });
};

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, baseOptions);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: Int!) {
  deleteTask(id: $id) {
    id
    title
    status
  }
}
    `;
export type DeleteTaskMutationFn = ApolloReactCommon.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;
export type DeleteTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTaskMutation, DeleteTaskMutationVariables>, 'mutation'>;

    export const DeleteTaskComponent = (props: DeleteTaskComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTaskMutation, DeleteTaskMutationVariables> mutation={DeleteTaskDocument} {...props} />
    );
    
export type DeleteTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteTaskMutation, DeleteTaskMutationVariables> & TChildProps;
export function withDeleteTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  DeleteTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTaskMutation, DeleteTaskMutationVariables, DeleteTaskProps<TChildProps>>(DeleteTaskDocument, {
      alias: 'deleteTask',
      ...operationOptions
    });
};

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, baseOptions);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = ApolloReactCommon.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const TaskDocument = gql`
    query Task($id: Int!) {
  task(id: $id) {
    id
    title
    status
  }
}
    `;
export type TaskComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TaskQuery, TaskQueryVariables>, 'query'> & ({ variables: TaskQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TaskComponent = (props: TaskComponentProps) => (
      <ApolloReactComponents.Query<TaskQuery, TaskQueryVariables> query={TaskDocument} {...props} />
    );
    
export type TaskProps<TChildProps = {}> = ApolloReactHoc.DataProps<TaskQuery, TaskQueryVariables> & TChildProps;
export function withTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TaskQuery,
  TaskQueryVariables,
  TaskProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TaskQuery, TaskQueryVariables, TaskProps<TChildProps>>(TaskDocument, {
      alias: 'task',
      ...operationOptions
    });
};

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        return ApolloReactHooks.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
      }
export function useTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = ApolloReactCommon.QueryResult<TaskQuery, TaskQueryVariables>;
export const TasksDocument = gql`
    query Tasks($status: TaskStatus) {
  tasks(status: $status) {
    id
    title
    status
  }
}
    `;
export type TasksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TasksQuery, TasksQueryVariables>, 'query'>;

    export const TasksComponent = (props: TasksComponentProps) => (
      <ApolloReactComponents.Query<TasksQuery, TasksQueryVariables> query={TasksDocument} {...props} />
    );
    
export type TasksProps<TChildProps = {}> = ApolloReactHoc.DataProps<TasksQuery, TasksQueryVariables> & TChildProps;
export function withTasks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TasksQuery,
  TasksQueryVariables,
  TasksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TasksQuery, TasksQueryVariables, TasksProps<TChildProps>>(TasksDocument, {
      alias: 'tasks',
      ...operationOptions
    });
};

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        return ApolloReactHooks.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions);
      }
export function useTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = ApolloReactCommon.QueryResult<TasksQuery, TasksQueryVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    title
    status
  }
}
    `;
export type UpdateTaskMutationFn = ApolloReactCommon.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;
export type UpdateTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTaskMutation, UpdateTaskMutationVariables>, 'mutation'>;

    export const UpdateTaskComponent = (props: UpdateTaskComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTaskMutation, UpdateTaskMutationVariables> mutation={UpdateTaskDocument} {...props} />
    );
    
export type UpdateTaskProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateTaskMutation, UpdateTaskMutationVariables> & TChildProps;
export function withUpdateTask<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  UpdateTaskProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateTaskMutation, UpdateTaskMutationVariables, UpdateTaskProps<TChildProps>>(UpdateTaskDocument, {
      alias: 'updateTask',
      ...operationOptions
    });
};

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, baseOptions);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = ApolloReactCommon.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
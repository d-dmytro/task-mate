import hello from './queries/hello';
import createTask from './mutations/create-task';
import updateTask from './mutations/update-task';
import changeStatus from './mutations/change-status';
import deleteTask from './mutations/delete-task';
import tasks from './queries/tasks';
import task from './queries/task';

export default {
  Query: {
    hello,
    tasks,
    task
  },
  Mutation: {
    createTask,
    updateTask,
    changeStatus,
    deleteTask
  }
};

import { getRepository } from 'typeorm';
import { Task, TaskStatus } from '../../entities/task';
import { CreateTaskInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: CreateTaskInput }
): Promise<Task> => {
  if (!input.title) {
    throw new UserInputError('title_empty', { errorKey: 'title' });
  }
  const task = new Task();
  task.title = input.title;
  task.status = TaskStatus.active;
  const taskRepo = getRepository(Task);
  await taskRepo.save(task);
  return task;
};

import { getRepository } from 'typeorm';
import { Task } from '../../entities/task';
import { UpdateTaskInput } from '../../schema';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { input }: { input: UpdateTaskInput }
): Promise<Task> => {
  if (!input.title) {
    throw new UserInputError('title_empty', { errorKey: 'title' });
  }

  const taskRepo = getRepository(Task);
  const task = await taskRepo.findOne({ where: { id: input.id } });

  if (!task) {
    throw new UserInputError('task_not_found', { errorKey: 'general' });
  }

  task.title = input.title;

  if (input.status) {
    task.status = input.status;
  }

  await taskRepo.save(task);

  return task;
};

import { getRepository } from 'typeorm';
import { Task } from '../../entities/task';
import { UserInputError } from 'apollo-server-core';

export default async (_root: any, { id }: { id: number }) => {
  const taskRepo = getRepository(Task);
  const task = await taskRepo.findOne({ id });

  if (!task) {
    throw new UserInputError('task_not_found', { errorKey: 'general' });
  }

  await taskRepo.delete(id);

  return task;
};

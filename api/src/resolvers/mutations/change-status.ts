import { TaskStatus, Task } from '../../entities/task';
import { getRepository } from 'typeorm';
import { UserInputError } from 'apollo-server-core';

export default async (
  _root: any,
  { id, status }: { id: number; status: TaskStatus }
) => {
  const taskRepo = getRepository(Task);
  const task = await taskRepo.findOne({ where: { id } });

  if (!task) {
    throw new UserInputError('task_not_found', { errorKey: 'general' });
  }

  task.status = status;

  return taskRepo.save(task);
};

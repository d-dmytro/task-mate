import { getRepository } from 'typeorm';
import { Task } from '../../entities/task';

export default async (_root: any, { id }: { id: number }) => {
  const taskRepo = getRepository(Task);
  const task = await taskRepo.findOne({ where: { id } });
  return task;
};

import { getRepository, FindConditions } from 'typeorm';
import { Task, TaskStatus } from '../../entities/task';

export default (_root: any, { status }: { status: TaskStatus }) => {
  const taskRepo = getRepository(Task);
  const where: FindConditions<Task> = {};

  if (status) {
    where.status = status;
  }

  const tasks = taskRepo.find({ where });
  return tasks;
};

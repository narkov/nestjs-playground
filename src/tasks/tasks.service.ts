import { Injectable } from '@nestjs/common';
//import * as uuid from 'uuidv4';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: '123', // uuid(),
      title,
      description,
      status: 'OPEN' // TaskStatus.OPEN,      
    }

    this.tasks.push(task);
    return task;

  }

}

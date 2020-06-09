import { Injectable } from '@nestjs/common';
// import * as uuid from 'uuidv4';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search} = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(task => 
	task.title.includes(search) ||
	task.description.includes(search) 
      );
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find(task => task.id === id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  deleteTaskById(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter(task => task.id !== found.id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: '123', // uuid(),
      title,
      description,
      status: TaskStatus.OPEN,      
    }

    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: string): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

}

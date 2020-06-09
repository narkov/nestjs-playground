import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { ParseIntPipe } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilter(filterDto);
  //   } else
  //     return this.tasksService.getAllTasks();
  // }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Delete('/:id')
  //  deleteTaskById(@Param('id') id: string) {
  //    this.tasksService.deleteTaskById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
               
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string, 
  //   @Body('status') status: string
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

}

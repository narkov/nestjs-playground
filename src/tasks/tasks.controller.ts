import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';
import { TaskRepository } from './task.repository';
import { ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto, @GetUser() user: User): Promise<Task[]> {
      return this.tasksService.getTasks(filterDto, user);
  }

  @Get('/:id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number, 
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.getTaskById(id, user);
  }

  @Delete('/:id')
   deleteTaskById(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<void> {
     return this.tasksService.deleteTaskById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDto, user);
  }
               
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: number, 
    @Body('status') status: TaskStatus,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status, user);
  }

}

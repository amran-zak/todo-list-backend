// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body('name') name: string): Task {
    return this.tasksService.createTask(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('completed') completed: boolean): Task {
    return this.tasksService.updateTask(id, completed);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}

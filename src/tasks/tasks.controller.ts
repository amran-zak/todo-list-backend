// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async findPaginated(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ tasks: Task[], total: number }> {
    return this.tasksService.findPaginated(page, limit);
  }

  @Post()
  async create(@Body('title') title: string): Promise<Task> {
    return this.tasksService.createTask(title);
  }

  @Patch(':taskId')
  async updateStatus(
    @Param('taskId') taskId: string,
    @Body('status') status: 'todo' | 'inProgress' | 'done',
  ): Promise<Task> {
    console.log("ici le controller", taskId, status)
    return this.tasksService.updateTaskStatus(taskId, status);
  }

  @Delete(':taskId')
  async deleteTask(@Param('taskId') taskId: string): Promise<void> {
    await this.tasksService.deleteTask(taskId);
  }
}

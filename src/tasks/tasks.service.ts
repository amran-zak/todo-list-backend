// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  createTask(name: string): Task {
    const newTask: Task = { id: uuidv4(), name, completed: false };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, completed: boolean): Task {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.completed = completed;
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

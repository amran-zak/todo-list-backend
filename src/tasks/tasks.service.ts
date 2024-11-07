// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async createTask(title: string): Promise<Task> {
    const newTask = new this.taskModel({ title, status: 'todo' });
    return newTask.save();
  }

  async updateTaskStatus(taskId: string, status: 'todo' | 'inProgress' | 'done'): Promise<Task> {
    console.log('taskId', taskId, status)
    return this.taskModel.findOneAndUpdate({ _id: taskId }, { status }, { new: true }).exec();
  }

  async deleteTask(taskId: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(taskId).exec();
  }
}

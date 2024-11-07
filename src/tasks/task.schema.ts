// src/tasks/schemas/task.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, enum: ['todo', 'inProgress', 'done'], default: 'todo' })
    status: 'todo' | 'inProgress' | 'done';
}

export const TaskSchema = SchemaFactory.createForClass(Task);

import mongoose from 'mongoose'

// Task Schema and model
const taskSchema = new mongoose.Schema({
  id: Number,
  description: String,
  dateCreated: Date,
  clientId: Number,
  status: Boolean
});

export const Task = mongoose.model('Task', taskSchema, 'tasks');

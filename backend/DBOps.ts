import mongoose from 'mongoose'
import { Client } from './models/Client'
import { Task } from './models/Task'

export async function connectDB() {
  try {
    console.log('about to connect URI is', process.env.MONGODB_URI)
    mongoose.connect(process.env.MONGODB_URI)
  } catch (err) {
    console.error('Error in connectDB', err)
  } 
}

export async function fetchTasks() {
  try {
    await connectDB()

    const tasks = await Task.find({})
    return tasks
  } catch (err) {
    console.error('Error in fetchTasks DBOp', err)
    throw err
  }
}

export async function fetchClients() {
  try {
    await connectDB()

    const clients = await Client.find({}, 'name')
    return clients
  } catch (err) {
    console.error('Error in fetchClients DBOp', err)
    throw err // Stop exec flow
  }
}
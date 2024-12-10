import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  _id: Number, 
  description: String, 
  dateCreated: Date, 
  client_id: Number, 
  status: Boolean
})

const TaskModel = mongoose.model('Task', TaskSchema, 'tasks')

const ClientSchema = new mongoose.Schema({
  _id: Number, 
  name: String, 
  profession: String, 
  phone: Number,
  email: String
})

const ClientModel = mongoose.model('Client', ClientSchema,'clients')

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

    const tasks = await TaskModel.find({})
    return tasks
  } catch (err) {
    console.error('Error in fetchTasks DBOp', err)
    throw err
  }
}

export async function fetchClients() {
  try {
    await connectDB()

    console.log('about to fetch clients')
    const clients = await ClientModel.find({})
    return clients
  } catch (err) {
    console.error('Error in fetchClients DBOp', err)
    throw err // Stop exec flow
  }
}
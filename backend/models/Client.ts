 import mongoose from 'mongoose'

 // client Schema and model
 const clientSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  profession: String,
  phone: Number,
  email: String
});

export const Client = mongoose.model('Client', clientSchema, 'clients');
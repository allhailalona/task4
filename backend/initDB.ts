import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { Client } from './models/Client'
import { Task } from './models/Task'

dotenv.config()

// Add authentication options
console.log('about to connect uri is', process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI); 

// Tasks data
const tasks = [
 {id: 1, description: "Teach penguins to code JavaScript", dateCreated: new Date(), clientId: 101, status: false},
 {id: 2, description: "Debug unicorn's rainbow generator", dateCreated: new Date(), clientId: 102, status: true},
 {id: 3, description: "Optimize dragon's fire-breathing algorithm", dateCreated: new Date(), clientId: 103, status: false},
 {id: 4, description: "Refactor mermaid's singing API", dateCreated: new Date(), clientId: 104, status: true},
 {id: 5, description: "Fix zombie's brain sorting function", dateCreated: new Date(), clientId: 105, status: false},
 {id: 6, description: "Update wizard's spell compiler", dateCreated: new Date(), clientId: 106, status: true},
 {id: 7, description: "Test ninja's invisibility module", dateCreated: new Date(), clientId: 107, status: false},
 {id: 8, description: "Deploy alien's translation service", dateCreated: new Date(), clientId: 108, status: true},
 {id: 9, description: "Migrate vampire's blood type database", dateCreated: new Date(), clientId: 109, status: false},
 {id: 10, description: "Scale up yeti's snowflake microservice", dateCreated: new Date(), clientId: 110, status: true}
];

// Clients data
const clients = [
  {_id: 101, name: "Dracula von Byte", profession: "Blood Type Analyst", phone: 5551234567, email: "fang.master@nightcode.com"},
  {_id: 102, name: "Rainbow Sparklecloud", profession: "Unicorn UI Designer", phone: 5552345678, email: "sparkles@magictech.com"},
  {_id: 103, name: "Inferno Scale", profession: "Heat Management Engineer", phone: 5553456789, email: "hotcode@dragondev.com"},
  {_id: 104, name: "Marina Echo", profession: "Underwater Sound Architect", phone: 5554567890, email: "singing@deepsea.dev"},
  {_id: 105, name: "Zom B. Walker", profession: "Neural Network Specialist", phone: 5555678901, email: "brains@undeadtech.com"},
  {_id: 106, name: "Merlin Debugger", profession: "Legacy Code Wizard", phone: 5556789012, email: "spells@wizardware.com"},
  {_id: 107, name: "Shadow Exception", profession: "Stealth Code Ninja", phone: 5557890123, email: "hidden@ninjacorp.com"},
  {_id: 108, name: "Zorg Overflow", profession: "Intergalactic Developer", phone: 5558901234, email: "alien@spacecode.com"},
  {_id: 109, name: "Count Query", profession: "Database Vampire", phone: 5559012345, email: "nosql@vampiredb.com"},
  {_id: 110, name: "Frost Callback", profession: "Cloud Computing Yeti", phone: 5550123456, email: "snow@yetidev.com"}
];

// Insert data
Task.insertMany(tasks)
 .then(() => console.log('Tasks inserted'))
 .catch(err => console.error(err));

// Insert client data
Client.insertMany(clients)
  .then(() => console.log('Clients inserted'))
  .catch(err => console.error(err));
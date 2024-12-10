import mongoose from 'mongoose'

// Task Schema
const taskSchema = new mongoose.Schema({
 id: Number,
 description: String,
 dateCreated: Date,
 clientId: Number,
 status: Boolean
});

// Create model with collection name
const Task = mongoose.model('Task', taskSchema, 'tasks');

// Add authentication options
mongoose.connect(process.env.MONGODB_URI); 

// Fun sample data
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

// Insert data
Task.insertMany(tasks)
 .then(() => console.log('Tasks inserted'))
 .catch(err => console.error(err));
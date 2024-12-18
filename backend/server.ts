import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fetchTasks, fetchClients } from './DBOps'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/fetch-tasks', async (req: Request, res: Response) => {
  try {
    const tasks = await fetchTasks()

    res.status(200).json(tasks)
  } catch (err) {
    console.error('Error in fetch-tasks app.get', err)
    res.status(err.status || 500).json({error: err.message || 'Unknown Internal Error'})
  }
})

app.get('/fetch-clients', async (req: Request, res: Response) => {
  try {
    const clients = await fetchClients()
    
    res.status(200).json(clients)
  } catch (err) {
    console.error('err in fetch-clients express', err)
    res.status(err.status || 500).json(err.message || 'Unknown Internal Error')
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

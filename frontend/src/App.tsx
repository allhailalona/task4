import { Routes, Route } from 'react-router-dom';
import TasksTable from './comps/TasksTable'
import AddTaskForm from './comps/AddTaskForm'
import Navbar from './comps/Navbar'

export default function App() {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <TasksTable />
          </>
        }/>
        <Route path='/add-task' element={<AddTaskForm />} />
      </Routes>
    </div>
  )
}
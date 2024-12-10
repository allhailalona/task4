import { Routes, Route } from 'react-router-dom';
import TasksTable from './comps/TasksTable'
import Navbar from './comps/Navbar'

export default function App() {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<TasksTable />}/>
      </Routes>
    </div>
  )
}
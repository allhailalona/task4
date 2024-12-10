import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className='w-full h-[10%] p-2 flex flex-row items-center'>
      <Button onClick={() => {navigate('/add-task')}}>Add Task</Button>
    </nav>
  )
}
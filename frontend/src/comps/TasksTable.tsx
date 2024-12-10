import { Table } from 'antd';
import { useEffect, useState } from 'react';

export default function TasksTable() {
  const [tasks, setTasks] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Description', 
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      // Format date for display
      render: (date) => new Date(date).toLocaleDateString()
    },
    {
      title: 'Client ID',
      dataIndex: 'clientId',
      key: 'clientId'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      // Convert boolean to readable text
      render: (status) => status ? 'Complete' : 'Pending'
    }
  ];

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await fetch('http://localhost:3000/fetch-tasks');
        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }
        const data = await res.json();
        setTasks(data); // Update state with fetched data
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    }

    fetchTasks();
  }, []);

  return (
    <Table 
      columns={columns}
      dataSource={tasks}
      pagination={{ pageSize: 8 }}
      className='w-full h-[90%]'
      // Add unique key for each row
      rowKey="id"
    />
  );
}
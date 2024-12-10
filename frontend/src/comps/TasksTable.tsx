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
     key: 'dateCreated'
   },
   {
     title: 'Client ID',
     dataIndex: 'clientId',
     key: 'clientId'
   },
   {
     title: 'Status',
     dataIndex: 'status',
     key: 'status'
   }
 ];

 useEffect(() => {
  async function helperFunc() {
    const res = await fetch()
  }

   fetchTasks();
 }, []);

 return (
   <Table 
     columns={columns}
     dataSource={tasks}
     pagination={{ pageSize: 5 }}
     className='w-full h=[90%]'
   />
 );
};

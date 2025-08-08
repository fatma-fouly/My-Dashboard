import React from 'react'
import Sidebar from './Sidebar';

export default function Dashboard() {
const user = localStorage.getItem('username');
  return (
    <div>
      <Sidebar />
      <h1 className='w-3/4'>Welcome {user} to Dashboard</h1>
    </div>
  )
}

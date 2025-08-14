import React from 'react'
import Sidebar from './Sidebar';
import UsersTable from '../UsersTable/UsersTable';

export default function Dashboard() {
const user = localStorage.getItem('username');
  return (
    <div>
      <Sidebar  />
     <div className="md:w-3/4 w-full p-4 md:ml-[25%]"> 
       <h2 className= "text-black font-semibold text-2xl ml-3 my-4">
        Welcome {user} to Dashboard
      </h2>
      <UsersTable    />
   
    </div>
    </div>
  )
}

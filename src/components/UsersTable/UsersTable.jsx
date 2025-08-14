import React, { useEffect , useState } from 'react'
import Cards from '../cards/Cards'
import { Link } from 'react-router-dom';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useGetUsers } from '../customHooks/useGetUsers';

export default function UsersTable() {


const users =useGetUsers();

  return (
    <div  className='mx-3'>
     <Cards usersNum = {users.length} />
    <div className='border-b border-gray-200  rounded-lg shadow-sm'>
       <table className='ml-3 mt-6 w-full '>
      <thead className='bg-gray-100'>
        <tr>    
          <th className='thStyle'>Name</th>
          <th className='thStyle'>Email</th>
          <th className='thStyle'>status</th>
          <th className='thStyle'>edit</th>
          <th className='thStyle'>delete</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user) => (
        <tr key={user.id} className='text-left'> 
        <td>
          <Link to={`/profile/${user.id}`} className='px-6 py-4 flex items-center text-gray-700s'>
          <img className='w-10 h-10 rounded-full' src={user.image} alt={user.username}  />
          <p className='text-sm font-medium ml-3'>{user.firstName} {user.lastName}</p>
          </Link>
        </td>
        <td className='text-sm px-4 py-2 text-gray-700'>{user.email}</td>
        <td className={`${user.age >40 ? "text-red-600" : "text-green-600"} text-sm font-bold`}>
          {user.age >40 ? "inActive" : "Active"}
        </td>
        <td className='text-center rounded-md'>
          <PencilSquareIcon className='w-6 h-6 rounded-md ml-5  text-green-600 '/>
        </td>
        <td className='text-center rounded-md'>
          < TrashIcon className='w-6 h-6 rounded-md ml-5  text-red-600 '/>
        </td>

        </tr>  ))} 
         </tbody>
     </table>
    </div>
    </div>
  )
}

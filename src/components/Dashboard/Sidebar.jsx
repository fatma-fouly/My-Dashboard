import React, { useState } from 'react';
import  { MagnifyingGlassIcon, EnvelopeIcon , HomeIcon ,DocumentIcon , DocumentTextIcon, Bars3Icon}  from '@heroicons/react/24/outline';


export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
   <>
   <button className='fixed top-2 left-4 z-50 p-2 bg-indigo-500 text-white
    rounded-md shadow-md hover:bg-indigo-700 focus:outline-none md:hidden'
    onClick={() => setShowSidebar(!showSidebar)}>
    {showSidebar ? ("X") : ( <Bars3Icon className="h-6 w-6 text-white" />)}
   </button>

     <div className={`fixed top-0 left-0  h-full w-full md:w-1/4 p-4 bg-indigo-600 text-white ease-in-out duration-300
      ${showSidebar ? "translate-x-0" : "md:translate-x-0 -translate-x-full"}`}>
      <h1 className="text-2xl text-white font-bold p-4 mt-6">Admin Dashboard</h1>
      <ul>
        <li>
          <div className="relative">
              <button className="absolute inset-y-0 left-0 flex items-center pl-2"> 
                <MagnifyingGlassIcon className="h-5 w-5  text-gray-400" />
                </button>        
              <input className='w-full pl-8 p-1 rounded shadow' type="text" placeholder=' Search...'/>

          </div>
        </li>
        <li className="listBar">
          <a >
          <HomeIcon className="sidebar-icons" /> Home
          </a>
        </li>
         <li className="listBar">
          <a >
          <DocumentIcon className="sidebar-icons" /> Blogs
          </a>
        </li>
         <li className="listBar">
          <a >
          <DocumentTextIcon className="sidebar-icons" /> Reports
          </a>
        </li>
         <li className="listBar">
          <a >
          <EnvelopeIcon className="sidebar-icons" /> Inbox
          </a>
        </li> 
      </ul>
    </div>
   </>
  )
}

import
 { ArrowPathRoundedSquareIcon,
     PencilIcon,
     UserGroupIcon } from '@heroicons/react/24/outline'


export default function Cards( { usersNum }) {
  return (
    <div   className='grid gap-4 lg:grid-cols-3'>
         <div className='ml-2 flex bg-white shadow-lg rounded-md p-2' >
        <div className='bg-indigo-500 rounded p-2 m-2'>
         <UserGroupIcon className='text-white h-6 w-6 ' />
        </div>

        <div className = 'mx-3'>
        <h4 className='font-semibold text-gray-700'>{usersNum}</h4>
        <p className='text-gray-500'>Users</p>
        </div>
      </div>
      <div className='ml-2 flex bg-white shadow-lg rounded-md p-2' >
        <div className='bg-indigo-500 rounded p-2 m-2'>
         <PencilIcon className='text-white h-6 w-6 ' />
        </div>

        <div className = 'mx-3'>
        <h4 className='font-semibold text-gray-700'>50</h4>
        <p className='text-gray-500'>Blogs</p>
        </div>
      </div>
      <div className='ml-2 flex bg-white shadow-lg rounded-md p-2' >
        <div className='bg-indigo-500 rounded p-2 m-2'>
         <ArrowPathRoundedSquareIcon className='text-white h-6 w-6 ' />
        </div>

        <div className = 'mx-3'>
        <h4 className='font-semibold text-gray-700'>1000</h4>
        <p className='text-gray-500'>Transactions</p>
        </div>
      </div>
    </div>
  )
}

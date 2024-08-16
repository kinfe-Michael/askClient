import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminIndex() {
  return (
    <div className='w-full flex' >
    <NavLink  to='/admin/add-questions' className='w-full p-2 m-2 border border-gray-200 rounded-md'>
      <p className='font-semibold'>Add Questions</p>
    </NavLink>
    </div>
   
  )
}

export default AdminIndex
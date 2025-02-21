import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'

const Homepage = () => {
  return (
    <div className='w-screen custom-height bg-indigo-600 flex '>
        {/* sidebar */}
        <div className='w-[70px] shrink-0 bg-indigo-600 '>
            <Sidebar/>
        </div>

        {/* main outelt */}
        <div className='w-full flex-1 relative '>
            <Outlet/>
        </div>
    
    </div>
  )
}

export default Homepage
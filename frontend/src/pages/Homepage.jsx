import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'

const Homepage = () => {
  return (
    <div className='w-screen custom-height bg-gray-500 flex '>
        {/* sidebar */}
        <div className='w-[70px] shrink-0 bg-amber-300 '>
            <Sidebar/>
        </div>

        {/* main outelt */}
        <div className='w-full flex-1 bg-pink-300'>
            <Outlet/>
        </div>
    
    </div>
  )
}

export default Homepage
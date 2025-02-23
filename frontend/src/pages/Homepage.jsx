import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'

const Homepage = () => {
  return (
    <div className='w-screen custom-height relative flex  '>
        {/* sidebar */}
        <div className='md:w-[70px] md:relative absolute bottom-0 w-full z-40 md:dark:border-white md:border-r-[1px] md:border-black shrink-0'>
            <Sidebar/>
        </div>
       

        {/* main outelt */}
        <div className='w-full  flex-1 relative '>
            <Outlet/>
        </div>
    
    </div>
  )
}

export default Homepage
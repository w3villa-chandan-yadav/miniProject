import React from 'react';
import { SiFireship } from "react-icons/si";
import { BsChatLeftHeartFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdExplore } from "react-icons/md";
import { HiHome } from "react-icons/hi";







const Sidebar = () => {
  return (
    <div className='w-[90%] h-full flex flex-nowrap relative group mx-auto '>
        <div className='w-full flex flex-col items-center h-full bg-gray-300 '>
        <Link
        to="/"
        className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <HiHome className='text-3xl mx-auto'/>
            </Link>

            <Link className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <SiFireship className='text-3xl mx-auto'/>
            </Link>
            <Link   
              to="/liked"
                className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <BsChatLeftHeartFill className='text-3xl mx-auto'/>
            </Link>
            <Link
            to="/watchLater"
            className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <MdWatchLater className='text-3xl mx-auto'/>
            </Link>
            <Link to={"/latest/trending"} className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <MdExplore  className='text-3xl mx-auto'/>
            </Link>
            

        </div>

        <div className='absolute hidden z-10 group-hover:flex  transition-all duration-700 w-auto  px-[12px] left-[100%] h-full  flex-col items-cente bg-gradient-to-r from-black via-black/60 to-black/15 '>
        <Link
        to="/"
        className='px-[3px] py-[13px]  text-white poppins font-semibold border-b-[1px] border-gray-200 w-full '>
                Home
            </Link>
          
            <Link  className='px-[3px] py-[13px]  text-white poppins font-semibold border-b-[1px] border-gray-200 w-full '>
                Trending
            </Link>
            <Link 
            to="/liked"
            className='px-[3px] py-[13px]  text-white poppins font-semibold border-b-[1px] border-gray-200 w-full '>
                Favourite
            </Link>
            <Link 
            to="/watchLater"
            className='px-[3px] py-[13px] text-nowrap text-white poppins font-semibold border-b-[1px] border-gray-200 w-full '>
               Watch Later
            </Link>
            <Link to="/latest/trending" 
            className='px-[3px] py-[13px]  text-white poppins font-semibold border-b-[1px] border-gray-200 w-full '>
              Gallery
            </Link>
        </div>


    </div>
  )
}

export default Sidebar
import React from 'react';
import { SiFireship } from "react-icons/si";
import { BsChatLeftHeartFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { FcGallery } from "react-icons/fc";





const Sidebar = () => {
  return (
    <div className='w-[90%] h-full flex flex-nowrap relative group mx-auto '>
        <div className='w-full flex flex-col items-center h-full bg-gray-300 '>
            <div className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <SiFireship className='text-3xl mx-auto'/>
            </div>
            <div className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <BsChatLeftHeartFill className='text-3xl mx-auto'/>
            </div>
            <div className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <MdWatchLater className='text-3xl mx-auto'/>
            </div>
            <div className='px-[3px] py-[10px]   border-b-[1px] border-gray-400 w-full '>
                <FcGallery  className='text-3xl mx-auto'/>
            </div>
            

        </div>

        <div className='absolute hidden z-10 group-hover:fle  transition-all duration-700 w-auto  px-[12px] left-[100%] h-full  flex-col items-cente bg-transparent '>
            <div className='px-[3px] py-[13px]   border-b-[1px] border-gray-400 w-full '>
                Trending
            </div>
            <div className='px-[3px] py-[13px]   border-b-[1px] border-gray-400 w-full '>
                Favouret
            </div>
            <div className='px-[3px] py-[13px]   border-b-[1px] border-gray-400 w-full text-nowrap '>
               Watch Later
            </div>
            <div className='px-[3px] py-[13px]   border-b-[1px] border-gray-400 w-full '>
              Gallery
            </div>
        </div>


    </div>
  )
}

export default Sidebar
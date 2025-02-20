import React from 'react'
import logoImage from "../assets/icegif-747.gif"
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div className='w-screen h-[60px] max-w-[1500px] bg-red-400 mx-auto py-1'>
        <div className='w-[98%] px-2 bg-gray-300 mx-auto h-full flex justify-between items-center'>
            <div className='h-full  bg-green-300 flex items-center gap-2'>
                <img src={logoImage} className='w-full h-full'/>
            </div>
            <div>
                <div 
                className=' w-full h-full gap-2  py-1 px-1  rounded-2xl shadow-2xl flex items-center justify-between'
                >   
                  {/* <div className='border-[1px] border-gray-500 rounded-xl'>
                    <select className='px-2 py-2 outline-none'>
                        <option >popular</option>
                        <option>unpopular</option>
                        <option>popular</option>

                    </select>
                  </div> */}
                    <input 
                    placeholder='search...'
                    className='outline-none'
                    />
                    <FaSearch className='text-gray-500'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
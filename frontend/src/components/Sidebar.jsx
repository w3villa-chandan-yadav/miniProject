import React from 'react';
import { SiFireship } from "react-icons/si";
import { BsChatLeftHeartFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { MdExplore } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { IoLogOutSharp } from "react-icons/io5";
import { toast } from 'react-toastify';








const Sidebar = () => {
    const navigate = useNavigate()

    const {user} = useSelector((state)=>state.user)

    const handleLogout =()=>{
        toast.success("Logout")
        localStorage.clear();
        window.location.reload()
        
    }


  return (
    <div className='md:w-[90%] w-full h-full flex flex-nowrap relative md:bg-transparent bg-white group mx-auto '>
        <div className='w-full flex md:flex-col items-center h-full  rounded-md '>
        <Link
        to="/"
        className='px-[3px] py-[10px]   md:border-b-[1px] border-gray-600 w-full '>
                <HiHome className='md:text-2xl text-xl md:dark:text-white text-gray-700    mx-auto'/>
            </Link>

            <Link className='px-[3px] py-[10px]   md:border-b-[1px] border-gray-600 w-full '>
                <SiFireship className='md:text-2xl text-xl md:dark:text-white text-gray-700  mx-auto'/>
            </Link>

           {user && <Link   
              to="/liked"
                className='px-[3px] py-[10px]   md:border-b-[1px] border-gray-600 w-full '>
                <BsChatLeftHeartFill className='md:text-2xl text-xl md:dark:text-white text-gray-700   mx-auto'/>
            </Link>}

           {user && <Link
            to="/watchLater"
            className='px-[3px] py-[10px]   md:border-b-[1px] border-gray-600 w-full '>
                <MdWatchLater className='md:text-2xl text-xl md:dark:text-white text-gray-700  mx-auto'/>
            </Link>}
            <Link to={"/latest/trending"} className='px-[3px] py-[10px]   md:border-b-[1px] border-gray-600 w-full '>
                <MdExplore  className='md:text-2xl text-xl md:dark:text-white text-gray-700   mx-auto'/>
            </Link>
            {
              user &&  <button 
              onClick={handleLogout}
              className='px-[3px] py-[10px]   md:border-b-[1px] border-gray-600 w-full '>
                <IoLogOutSharp  className='md:text-2xl text-xl md:dark:text-white text-gray-700   mx-auto'/>
            </button>

            }
            

        </div>

        <div className='absolute hidden z-10 group-hover:flex  transition-all duration-700 w-auto  px-[12px] left-[100%] h-full  flex-col items-cente bg-gradient-to-r from-black via-black/60 to-black/15 '>
        <Link
        to="/"
        className='px-[3px] py-[10px]  text-white poppins font-semibold border-b-[1px] border-gray-600 w-full '>
                Home
            </Link>
          
            <Link  className='px-[3px] py-[10px]  text-white poppins font-semibold border-b-[1px] border-gray-600 w-full '>
                Trending
            </Link>
           {user && <Link 
            to="/liked"
            className='px-[3px] py-[10px]  text-white poppins font-semibold border-b-[1px] border-gray-600 w-full '>
                Favourite
            </Link>}
           {user && <Link 
            to="/watchLater"
            className='px-[3px] py-[10px] text-nowrap text-white poppins font-semibold border-b-[1px] border-gray-200 w-full '>
               Watch Later
            </Link>  }
            <Link to="/latest/trending" 
            className='px-[3px] py-[10px]  text-white poppins font-semibold border-b-[1px] border-gray-600 w-full '>
              Gallery
            </Link>
            {
              user &&  <button 
              onClick={handleLogout}
              className='px-[3px] py-[10px] text-left text-white poppins font-semibold border-b-[1px] border-gray-600 w-full '>
                LogOut
            </button>

            }
        </div>


    </div>
  )
}

export default Sidebar
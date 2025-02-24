import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addFavourt,addWachLater } from '../redux/slices/moviesSlice';
import { toast } from 'react-toastify';

export const SingleCard = ({ele}) => {
    const {watchLater ,favourt}  = useSelector((state)=>state.movie)
    const {user} = useSelector((state)=>state.user)

        const dispatch = useDispatch()
        const handleWatchLater =(e,movi)=>{
            e.preventDefault();
            e.stopPropagation();
            if(!user){
                toast.error("Please Login");
                return
            }
            dispatch(addWachLater(movi))
        }

        const handleAddfavourt =(e,movi)=>{
            // console.log("handle add favourt")
            e.preventDefault()
                e.stopPropagation()
                if(!user){
                    toast.error("Please Login");
                    return
                }
                dispatch(addFavourt(movi))
        }
        // console.log(ele)
  return (
    <Link 
    to={ele.media_type === "tv" ? `/details/tv/${ele.id}` :`/details/movie/${ele.id}`}
    className='lg:w-[210px] md:w-[180px]  w-[170px] relative shrink-0 lg:h-[370px] md:h-[300px]  h-[290px] group rounded-md overflow-hidden dark:bg-[rgba(255,255,255,0.8)] bg-[rgba(0,0,0,0.5)] dark:text-black text-white backdrop-blur-[2px]'>
        <FaPlay className='absolute top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2 text-3xl text-white hidden group-hover:block cursor-pointer '/>
        <FaHeart 
        onClick={(e)=>handleAddfavourt(e,ele)}
        className={`absolute top-[10px] right-[10px] z-20 text-2xl ${favourt.some((content)=> content.id === ele.id) ? "text-red-500" :"text-white" }  cursor-pointer `}/>
    <img className='w-full lg:h-[310px] md:h-[250px] h-[235px] group-hover:scale-95 transition-all duration-200 ' loading='lazy'  src={`https://image.tmdb.org/t/p/w185/${ele?.poster_path}`}/>
        <div className='flex justify-between items-center mx-2'>

   

          { ele.media_type != "tv" ?
        <h4 className='poppins font-bold ml-1 text-sm'>{ele?.original_title?.length < 13 ?  ele?.name ?? ele?.original_title : `${ ele?.name?.substr(0,12) ?? ele?.original_title?.substr(0,13)}...`}</h4> :
        <h4 className='poppins font-bold ml-1 text-sm'>{ele?.original_name?.length < 13 ?   ele?.original_name : `${ele?.original_name?.substr(0,13)}...`}</h4>
}
            <div 
            onClick={(e)=>handleWatchLater(e,ele)}
            className='cursor-pointer'>
                  {
                     watchLater.some((content)=>content.id === ele.id) ?   <FaBookmark/> : <FaRegBookmark/>
                  } 
            </div>
        </div>
        <div className='mx-3 mt-2 poppins  flex justify-between font-semibold text-xs '>
           <span> Rating <span>{ele?.vote_average}</span></span>
           <span>{ele.media_type !="tv" ? ele?.release_date : ele?.first_air_date}</span>
        </div>  
    </Link>
  )
}

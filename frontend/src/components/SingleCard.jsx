import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addFavourt,addWachLater } from '../redux/slices/moviesSlice';
import { toast } from 'react-toastify';
import { auth } from './firebase';
import Hooks from '../customHook/Hooks';
import { useTranslation } from 'react-i18next';

export const SingleCard = ({ele}) => {
    const {t} = useTranslation()

    const {addFavaroutFirebase,testFirestoreConnection,addWatchLaterFirebase} = Hooks()

    const {watchLater ,favourt}  = useSelector((state)=>state.movie)
    const {user} = useSelector((state)=>state.user)

        const dispatch = useDispatch()
        const handleWatchLater =(e,movi)=>{
            console.log(user)
            e.preventDefault();
            e.stopPropagation();
            if(!user){
                toast.error("Please Login");
                return
            }
            dispatch(addWachLater(movi))
            addWatchLaterFirebase({
                id:movi.id,
                uuid:user.uid,
                original_title:movi.original_title ?? "random",
                poster_path:movi.poster_path,
                release_date:movi.release_date ?? "34",
                first_air_date:movi.first_air_date ?? "32",
                title:movi.title ?? "something",
                vote_average:movi.vote_average,
                media_type:movi?.media_type ?? "movie",
                original_name:movi?.original_name ?? "random"
            },user.uid)
            toast.success("Done")
        }

        

        const handleAddfavourt =(e,movi)=>{
       
            e.preventDefault()
                e.stopPropagation()
                testFirestoreConnection()
                if(!user){
                    toast.error("Please Login");
                    return
                }
                addFavaroutFirebase({
                    id:movi.id,
                    uuid:user.uid,
                    original_title:movi.original_title ?? "random",
                    poster_path:movi.poster_path,
                    release_date:movi.release_date ?? "34",
                    first_air_date:movi.first_air_date ?? "32",
                    title:movi.title ?? "something",
                    vote_average:movi.vote_average,
                    media_type:movi?.media_type ?? "movie",
                    original_name:movi?.original_name ?? "random"
                },user.uid)
                console.log(movi)
                
                
          

                dispatch(addFavourt({
                    id:movi.id,
                    original_title:movi.original_title,
                    poster_path:movi.poster_path,
                    release_date:movi.release_date,
                    title:movi.title,
                    vote_average:movi.vote_average,
                    media_type:movi?.media_type ?? "movie",
                    original_name:movi?.original_name 
                }))
                
                toast.success("Done")
        }
        // dark:bg-[rgba(255,255,255,0.8)] bg-[rgba(0,0,0,0.5)]
  return (
    <Link 
    to={ele?.first_air_date ? `/details/tv/${ele.id}` :`/details/movie/${ele.id}`}
    className='lg:w-[200px]  md:w-[190px]  w-[150px] relative shrink-0 shadow-md dark:shadow-sm dark:shadow-white shadow-black lg:h-[340px] md:h-[300px]  h-[240px] group rounded-md  dark:text-black text-white '>
        <FaPlay className='absolute top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2 text-3xl text-white hidden group-hover:block cursor-pointer '/>
        <div className='absolute bottom-[15%] flex justify-center items-center -right-6 z-20 h-[30px] w-[30px] rounded-full bg-yellow-600 -translate-x-1/2 -translate-y-1/2  text-white text-[11px] font-bold poppins '>
        <p>{ele?.vote_average.toFixed(1)}</p>
        </div>
       
        <FaHeart 
        onClick={(e)=>handleAddfavourt(e,ele)}
        className={`absolute top-[10px] right-[10px] z-20 text-2xl ${favourt.some((content)=> content.id === ele.id) ? "text-red-500" :"text-white" }  cursor-pointer `}/>
    <img className='w-full lg:h-[285px] md:h-[250px] rounded-md h-[185px] group-hover:scale-95 transition-all duration-200 ' loading='lazy'  src={`https://image.tmdb.org/t/p/w185/${ele?.poster_path}`}/>
        <div className='flex justify-between items-center truncate mx-2'>

   

        

          { ele.first_air_date ? 
        <h4 className='poppins dark:text-white text-black font-bold ml-1 md:text-sm text-[13px]'>{ele?.original_name?.length < 13 ?  ele?.name ?? ele?.original_name : `${ele?.name?.substr(0,13) ?? ele?.original_name?.substr(0,13)}...`}</h4>:
        <h4 className='poppins dark:text-white text-black font-bold ml-1 md:text-sm text-[13px]'>{ele?.title?.length < 13 ?  ele?.name ?? ele?.title : `${ ele?.title?.substr(0,12) ?? ele?.title?.substr(0,13)}...`}</h4> 
}
            <div 
            onClick={(e)=>handleWatchLater(e,ele)}
            className='cursor-pointer dark:text-white text-black'>
                  {
                     watchLater.some((content)=>content.id === ele.id) ?   <FaBookmark/> : <FaRegBookmark/>
                  } 
            </div>
        </div>
        <div className='mx-3 mt-2 poppins   flex justify-between items-center  gap-1font-semibold md:text-xs md:text-[10px] text-[9px] '>
           {/* <span className='text-nowrap '> {t("Rating")} <span>{ele?.vote_average}</span></span> */}
           <span className='md:text-[11px] dark:text-white text-black text-[10px] font-bold text-nowrap'>{ele.media_type !="tv" ? ele?.release_date : ele?.first_air_date}</span>
        </div>  
    </Link> 
  )
}

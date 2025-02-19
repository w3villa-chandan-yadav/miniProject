import React, { lazy } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";





const LatestRelease = ({movies,title}) => {
    console.log(movies)
  
  return (
    <section className='w-[93vw] bg-[url("https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5q")] bg-cover bg-center bg-fixed  overflow-hidden h-full mx-auto py-5'>
        <h3 className='ml-1 poppins font-semibold text-xl  py-3'>{title}</h3>
        <div className='w-full flex gap-4 flex-nowrap overflow-x-auto continaer'>

{
    movies.slice(10,20).map((ele,ind)=>{
        return(

            <div key={ind} className='w-[210px]  relative shrink-0 h-[370px] group rounded-md overflow-hidden bg-[rgba(255,255,255,0.4)] backdrop-blur-[2px]'>
                <FaPlay className='absolute top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2 text-3xl text-white hidden group-hover:block cursor-pointer '/>
                <FaHeart  className={`absolute top-[10px] right-[10px] z-20 text-2xl ${true ? "text-red-500" :"text-white" }  cursor-pointer `}/>
            <img className='w-full h-[320px] group-hover:scale-95 transition-all duration-200 ' loading={lazy} src={`https://image.tmdb.org/t/p/original/${ele?.poster_path}`}/>
                <div className='flex justify-between items-center mx-2'>
                  { ele.media_type != "tv" ?
                <h4 className='poppins font-bold ml-1 text-sm'>{ele?.original_title?.length < 20 ? ele?.original_title : `${ele?.original_title?.substr(0,19)}...`}</h4> :
                <h4 className='poppins font-bold ml-1 text-sm'>{ele?.original_name?.length < 13 ? ele?.original_name : `${ele?.original_name?.substr(0,12)}...`}</h4>
}
                    <div className='cursor-pointer'>
                          {
                             false ?   <FaBookmark/> : <FaRegBookmark/>

                          } 
                    </div>
                </div>
                <div className='mx-3 mt-2 poppins  flex justify-between font-semibold text-xs '>
                   <span> Rating <span>{ele?.vote_average}</span></span>
                   <span>{ele.media_type !="tv" ? ele?.release_date : ele?.first_air_date}</span>
                </div>  
            </div>
        )
    })
}
        </div>

    </section>
  )
}

export default LatestRelease
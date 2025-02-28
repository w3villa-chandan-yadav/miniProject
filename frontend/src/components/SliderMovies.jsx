import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { FaPlay } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";



import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Autoplay} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SliderMovies = ({movies}) => {

   

  return (
        <div className='lg:h-full md:h-[500px] h-[300px]  max-h-[1200px] w-full absolute inset-0  '>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={true}
        loop={true}
        
      className="mySwiper w-full h-full ">

        {
              movies.slice(0,7).map((ele,idx)=>{
                return <SwiperSlide key={idx}>
                    <Slide movie={ele}/>
                </SwiperSlide>
            })
        }
        
       
      </Swiper>
           
        </div>
  )
}

export default SliderMovies





const Slide =({movie})=>{
  const {t} = useTranslation()
  const navigate = useNavigate()


  const handleNavigate=()=>{
    console.log("navigatiion in swiper")
    navigate(movie.media_type === "tv" ? `/details/tv/${movie.id}` :`/details/movie/${movie.id}`)
  }


    return(
        <div className='w-full lg:h-full md:pr-[10%]  pr-[20px] flex justify-end md:items-center items-end md:h-[500px] h-[300px] max-h-[1200px] relative'>
          <div className="w-full h-full hidden md:block bg-gradient-to-l from-black via-5%  via-black to-transparent  absolute inset-0 z-[2]" />
          <div className="w-full h-full  md:hidden bg-gradient-to-l from-black via-5%  via-black/60 to-transparent  absolute inset-0 z-[2]" />

          
            <img className='absolute inset-0' loading='lazy' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}/>
            <div className=' px-4 md:py-7 py-3 flex  justify-center md:gap-5 gap-2 flex-col z-[4]  md:w-[490px] w-[230px] h-auto  '>
                <h2 className='text-right anton md:text-3xl text-base md:ml-2 font-semibold md:font-bold text-white '>{movie.title}</h2>
            <div className='flex items-center justify-end gap-4'>
                  <button className='md:px-3 px-2 text-white cursor-pointer  font-bold rounded-2xl md:py-2 py-1 bg-violet-950 poppins md:text-[12px] text-[9px]'>
                       Advanture
                  </button>
                  <button className='md:px-3 px-2 text-white cursor-pointer  font-bold rounded-2xl md:py-2 py-1 bg-violet-950 poppins md:text-[12px] text-[9px]'>
                       FANTASY
                  </button>
                  <button className='md:px-3 px-2 text-white cursor-pointer  font-bold rounded-2xl md:py-2 py-1 bg-violet-950 poppins md:text-[12px] text-[9px]'>
                       ACTION
                  </button>
                </div>
                <p className='text-right poppins md:text-sm font-semibold md:text-[13px]  text-[9px]  text-white '>
                        {movie.overview}
                </p>
                <div className='text-white flex justify-end items-center gap-2 font-extrabold '>
                   <FaRegHeart className='font-extrabold text-green-500 md:text-2xl text-lg'/> <div>
                   <p > {movie?.vote_average.toFixed(1)*10 +"%"}</p>
                    <p className='md:text-[10px] text-[7px]'>Liked this</p>
                    </div>
                </div>
                
                <div>
                {/* <h3 className='poppins text-left md:text-sm text-[9px] text-white '>Rating :<span className='md:text-xs  text-[9px]'> {movie?.vote_average.toFixed(1)+"+"}</span></h3> */}
                </div>
                <div className='w-full flex justify-end gap-4 h-auto'>
                    <button 
                    onClick={(e)=>handleNavigate(e)}
                    className='bg-gray-600  cursor-pointer text-nowrap md:px-3 md:py-2 rounded-2xl flex items-center gap-2 md:text-sm px-2 py-2 text-[8px] font-semibold text-white  poppins'>
                        {
                          t("WatchNow")
                        }
                        <FaPlay className='md:text-xl'/>
                    </button>
                    <button 
                    onClick={(e)=>handleNavigate(e)}
                    className='bg-white text-nowrap md:px-3 md:py-2 rounded-2xl flex items-center gap-2 md:text-sm px-2 py-2 text-[8px] font-semibold text-black  poppins'>
                        {
                          t("Download")
                        }
                        <IoMdDownload className='md:text-xl'/>
                    </button>

                    
                </div>

            </div>
            
        </div>
    )
}

// https://image.tmdb.org/t/p/original/${images[indexx]?.poster_path}

// "image.tmdb.org/t/p/original/nrlfJoxP1EkBVE9pU62L287Jl4D.jpg"
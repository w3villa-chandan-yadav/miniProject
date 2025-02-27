import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';

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
        <div className='w-full lg:h-full  md:h-[500px] h-[300px] max-h-[1200px] relative'>
          {/* <div className='w-full h-full bg-radial-[at_50%_55%] from-transparent  via-black/30 to-black/60 to-30%" inset-0 z-[2] absolute'/> */}
          <div className='w-full h-full dark:bg-linear-[25deg,black_5%,black_25%,transparent_50%,transparent]  bg-linear-[25deg,white_5%,white_25%,transparent_50%,transparent] absolute inset-0 z-[2]' />


          
            <img className='absolute inset-0' loading='lazy' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}/>
            <div className='bg-[rgba(0,0,0,0.4)] px-4 md:py-7 py-3 backdrop-blur-[2px] z-[4]  md:w-[490px] w-[230px] h-auto absolute bottom-[9%] left-[3%] rounded-2xl'>
                <h2 className='text-left poppins md:text-3xl text-base md:ml-2 font-semibold md:font-bold text-white '>{movie.title}</h2>
                <p className='text-left poppins md:text-sm text-[10px] md:mt-4 mt-2 mb-1 text-white '>
                        {movie.overview}
                </p>
                <div>
                <h3 className='poppins text-left md:text-sm text-[9px] text-white mb-2'>Rating :<span className='md:text-xs  text-[9px]'> {movie?.vote_average.toFixed(1)+"+"}</span></h3>
                </div>
                <div className='w-full flex justify-start gap-4 h-auto'>
                    <button 
                    onClick={(e)=>handleNavigate(e)}
                    className='bg-white md:px-3 md:py-3 rounded-sm md:text-sm px-2 py-2 text-[11px] font-semibold text-black  poppins'>
                        {
                          t("WatchNow")
                        }
                    </button>

                    
                </div>

            </div>
            
        </div>
    )
}

// https://image.tmdb.org/t/p/original/${images[indexx]?.poster_path}

// "image.tmdb.org/t/p/original/nrlfJoxP1EkBVE9pU62L287Jl4D.jpg"
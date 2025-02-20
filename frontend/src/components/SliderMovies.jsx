import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Autoplay} from 'swiper/modules';

const SliderMovies = ({movies}) => {

   

  return (
        <div className='h-full w-full absolute inset-0 p-3 '>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={true}
        loop={true}
        
      className="mySwiper w-full h-full rounded-xl">

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
    console.log(movie)

    return(
        <div className='w-full h-full relative'>
            <img className='absolute inset-0' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}/>
            <div className='bg-[rgba(0,0,0,0.4)] px-4 py-7 backdrop-blur-[2px] w-[490px] h-auto absolute bottom-[9%] left-[3%] rounded-2xl'>
                <h2 className='text-left poppins text-3xl ml-2 font-bold text-white '>{movie.title}</h2>
                <p className='text-left poppins text-xs mt-4 mb-1 text-white '>
                        {movie.overview}
                </p>
                <div>
                <h3 className='poppins text-left text-sm text-white mb-2'>Rating :<span className='text-xs'> {movie?.vote_average.toFixed(1)+"+"}</span></h3>
                </div>
                <div className='w-full flex justify-start gap-4 h-auto'>
                    <button className='bg-white px-3 py-3 rounded-sm text-sm font-semibold text-black  poppins'>
                        Watch Now
                    </button>

                    
                </div>

            </div>
            
        </div>
    )
}

// https://image.tmdb.org/t/p/original/${images[indexx]?.poster_path}

// "image.tmdb.org/t/p/original/nrlfJoxP1EkBVE9pU62L287Jl4D.jpg"
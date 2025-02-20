import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LatestRelease } from '../components';

const DisplayMovie = () => {

    const  {type,id} = useParams();

    const [movie ,setMovies] = useState("");
    const [similar ,setSimilar] = useState([])

    console.log(id,type)

    const fetchData = async()=>{

      let url 

      if(type ==="tv"){
       url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;

      }else{
      url =  `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

      }
      
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
  }
};

       const data = await fetch(url, options)

       const result = await data.json();

       console.log(result)
       setMovies(result)

    }

          const fetchSimilar = async()=>{
            
            let url 
            if(type ==="tv"){
            url =  `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
       
             }else{
       
               url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
             }
            
            const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
          }
        };

        const result =await fetch(url, options);
        const data = await result.json();

        setSimilar(data.results)
      }
         





    useEffect(()=>{
  
      fetchData()
      fetchSimilar()


    },[id])

  return (
    <section className='w-full h-full overflow-y-auto'>
        <div className='w-full h-[600px] bg-gray-600 relative overflow-hidden'>
        <img className='w-full h-full absolute inset-0 ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt='poster'/>
        <div className='w-full absolute inset-0 h-full bg-gradient-to-tr from-black to-transparent'/>
        <div className='w-[80%] mx-auto mt-[100px] flex items-center gap-10'>
          <div className='w-[300px] h-[400px] shrink-0 relative  hover:-translate-y-3 transition-all duration-150 '>
            <img className='w-full h-full rounded-md' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
          </div>
          <div className='bg-[rgba(245,245,245,0.2)] w-fit flex-[0.7] rounded-md flex flex-col gap-4  px-3 py-4 backdrop-blur-[2px] relative text-white '>
            <h2 className='poppins font-extrabold text-4xl  text-white '>{movie?.title}</h2>
            <div>
              <h4 className='poppins font-normal text-sm mb-2 '>Status : <span>{movie?.status}</span></h4>
              <p className='poppins font-normal text-sm '>
                {movie?.overview}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              {
               movie && movie?.genres.map((ele,ind)=>{
                  return <button key={ele.id} className={`border-[2px] border-white text-black ${ind ===0 ? "bg-white/70" :""} px-4 py-1 rounded-xl`}>
                    {ele.name}
                  </button>
                })
              }
            </div>
          </div>
        </div>

        </div>
        <div className='w-full h-auto py-10'>
          <div className='w-fit'>
            <button  className=''>
              cast
            </button>
          </div>

          <div className='w-full'>

            
                  <LatestRelease movies={similar} title={"Similar Movies"}/>

              
          </div>

        </div>
    </section>
  )
}

export default DisplayMovie
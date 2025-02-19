import React, { useCallback, useEffect, useState } from 'react'
import { LatestRelease, SliderMovies } from '../components'

const MovieContainer = () => {
    const [movies, setMovies] = useState([])

    const [serial, setSerial] = useState([])

    const [searchBy,setSearchBy] = useState("popular")


    const fetchSeries = useCallback(async()=>{

        const url = 'https://api.themoviedb.org/3/trending/tv/week?language=hindi';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
  }
};

const data =  await fetch(url,options) ;

const result = await data.json()

setSerial(result.results)

    },[])



    const fetchMainMoives  = useCallback(async()=>{
        const url = `https://api.themoviedb.org/3/movie/${searchBy}?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
  }

    }
const data =  await fetch(url,options) ;

const result = await data.json()

setMovies(result.results)

    
} ,[searchBy])


useEffect(()=>{

  fetchMainMoives()
  fetchSeries(  )
    


},[])
  return (
    <div className=' h-full bg-amber-300 overflow-y-auto  continaer'>  
     <div className='bg-gray-500 relative w-full  h-[100%] p-[9px] '>
            <SliderMovies movies={movies}/>
     </div>
     <div className='w-full h-auto '>
        <LatestRelease movies={serial} title={searchBy}/>

        <LatestRelease movies={movies} title={"Latest Release..."}/>


     </div>
    
     </div>
  )
}

export default MovieContainer
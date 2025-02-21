import React, { useCallback, useEffect, useState } from 'react'
import { LatestRelease, SliderMovies } from '../components'

const MovieContainer = () => {
    const [movies, setMovies] = useState([])
    const [moviess,setMoviess] = useState([])

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



    const fetchMainMoives  = async()=>{
      console.log("main movies")
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

if(moviess.length > 2){

}else{
  setMoviess(result.results)
}

    
} 

console.log(searchBy)


useEffect(()=>{

  fetchMainMoives()
},[searchBy])

useEffect(()=>{
  fetchSeries()
},[])
  return (
    <div className=' h-full  overflow-y-auto  continaer'>  
     <div className=' relative w-full  h-[100%] p-[9px] '>
            <SliderMovies movies={moviess}/>
     </div>
     <div className='w-full h-auto '>
        <LatestRelease movies={movies}  title={searchBy} show={true} setSearchBy={setSearchBy}  />

        <LatestRelease movies={serial} title={"Latest Release..."} />



     </div>
    
     </div>
  )
}

export default MovieContainer
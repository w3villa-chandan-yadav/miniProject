import React, { useCallback, useEffect, useState } from 'react'
import { LatestRelease, SliderMovies } from '../components'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const MovieContainer = () => {
  const {t,i18n} = useTranslation()
    const [movies, setMovies] = useState([])
    const [moviess,setMoviess] = useState([]);
    const [loading,setLoading] = useState(true)
    const {watchLater,favourt,currentLanguage} = useSelector((state)=>state.movie)
   console.log(i18n.language)
    const [serial, setSerial] = useState([])

    const [searchBy,setSearchBy] = useState("popular")


    const fetchSeries = useCallback(async()=>{
      setLoading(true)

      const url = `https://api.themoviedb.org/3/trending/tv/day?language=${i18n.language}`;
      const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
  }
};

const data =  await fetch(url,options) ;

const result = await data.json()

// const time =await new Promise((r)=>setTimeout(()=>r("promise resolve"),4000))
console.log(result.results)
setSerial(result.results)
setLoading(false)

    },[])



    const fetchMainMoives  = async()=>{
      console.log("main movies")
        const url = `https://api.themoviedb.org/3/movie/${searchBy}?language=${i18n.language}-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
  }

    }
const data =  await fetch(url,options) ;

const result = await data.json()
console.log(result.results)
setMovies(result.results)

if(moviess.length > 2){

}else{
  setMoviess(result.results)
}

    
} 

console.log(movies)


useEffect(()=>{

  fetchMainMoives()
},[searchBy,currentLanguage])

useEffect(()=>{
  fetchSeries()
},[currentLanguage])
  return (
    <div className=' h-full  overflow-y-auto  continaer'>  
     <div className=' relative w-full  h-[300px] lg:h-[120%] md:h-[500px] max-h-[1200px]  p-[9px] '>
            <SliderMovies movies={movies}/>
     </div>
     <div className='w-full h-auto '>
        <LatestRelease movies={movies}  loading={loading} title={searchBy} show={true} setSearchBy={setSearchBy}  background={true}  />

         <LatestRelease movies={serial} loading={loading} title={t("LatestRelease")}  background={true  }/>
  
              {   watchLater.length >= 1 && <LatestRelease movies={watchLater} loading={loading} title={t("WatchLater")}/>
              
              }

              {   favourt.length >= 1 && <LatestRelease movies={favourt} loading={loading} title={t("Favorite")}/>
              
                }


   

     


     </div>
    
     </div>
  )
}

export default MovieContainer
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LatestRelease, LoadingSkeleton, VideoPlayer } from '../components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addPopular,removePopular } from '../redux/slices/moviesSlice';
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { FaPlay } from "react-icons/fa";






const DisplayMovie = () => {
  const {t,i18n} = useTranslation()

  const dispach = useDispatch()

    const {user} = useSelector(state=>state.user)
    const {populars} = useSelector((state)=>state.movie)

    // console.log(populars)

    const  {type,id} = useParams();
    const {currentLanguage} = useSelector((state)=>state.movie)

    const [movie ,setMovies] = useState("");
    const [similar ,setSimilar] = useState([])
    const [recommendations ,setRecommendations] = useState([])
    const [castt,setCast] = useState([])
    const [videoPlayer,setVideoPlayer] = useState(false);
    const [loading,setLoading] = useState(true)
    const mainref = useRef()

    const [isCast ,setIsCrew] = useState(true)
  const [idd,setIdd] = useState()
   

    const fetchData = async()=>{
        
      let url 

      if(type ==="tv"){
       url = `https://api.themoviedb.org/3/tv/${id}?language=${i18n.language}-US`;

      }else{
      url =  `https://api.themoviedb.org/3/movie/${id}?language=${i18n.language}-US`;

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

      //  console.log(result)
       setMovies(result)

    }

          const fetchSimilar = async()=>{
            setLoading(true)
           try {
            let url 
            if(type ==="tv"){
            url =  `https://api.themoviedb.org/3/tv/${id}/similar?language=${i18n.language}-US&page=1`
       
             }else{
       
               url = `https://api.themoviedb.org/3/movie/${id}/similar?language=${i18n.language}-US&page=1`
             }
            
            const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
          }
        };

        const result = await fetch(url, options);
        const data = await result.json();
        // console.log(data) 

        const timer = await new Promise((r)=>setTimeout(()=>r("promise resolve"),2000))


        if(data.status_code ===34){
          setSimilar([])  
          setLoading(false)
        }else{
          setSimilar(data.results)
          setLoading(false)
        }

           } catch (error) {
            setLoading(false)
           }finally{
            setLoading(false)
           }
      }



      const fetchRecomendation =async()=>{

        let url 

        if(type ==="tv"){
           url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=${i18n.language}-US&page=1`;
          
        }else{
           url =  `https://api.themoviedb.org/3/tv/${id}/recommendations?language=${i18n.language}-US&page=1`
     
           }
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
          }
        };

      const data = await fetch(url, options) ;

      const result = await data.json() ;

      // console.log(result.results)

      if(result.status_code ===34){
        setRecommendations([])  
      }else{
        // console.log('something')
        setRecommendations(result.results)
      }

      }

      const fetchCast =async()=>{
        try {
          let url 
          if(type ==="tv"){
            url = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;
            
          }else{  
               url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
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
// console.log(result)
     setCast(result)

        } catch (error) {
          // console.log("error in fetching cast")
        }
      }



      const findVideos = async()=>{
        // console.log("in find video")
        try {
          
          // let url = 'https://api.themoviedb.org/3/movie/2344343/videos?language=en-US';
          // const url = 'https://api.themoviedb.org/3/tv/dfdff/videos?language=en-US';

         
          let url 

          if(type ==="tv"){
            url =  `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
            
          }else{
           url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      
            }

              const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
                }
              };

             const data = await fetch(url, options) ;

             const result = await data.json();

            //  console.log(result)
             setIdd(result.results[0].key)
            //  console.log("moviese path")

        } catch (error) {
          // console.log("error in video fetching")
        }
      }


      // console.log(recommendations)
      // console.log(idd,"video idddddddddddd")
         





    useEffect(()=>{
  
      fetchData()
      fetchSimilar()
      fetchRecomendation()
      fetchCast()
      findVideos()

      if(mainref.current){
        mainref.current.scrollTop =0
      }

    },[id,currentLanguage])

  return (
    <section className='w-full h-full overflow-y-auto  ' 
    ref={mainref}
    >
        <div className='w-full md:h-[600px] py-5 flex justify-center items-center flex-col gap-5   h-auto bg-gray-600 relative overflow-hidden'>
        {/* <div className='w-full h-full dark:bg-linear-[25deg,black_5%,black_25%,transparent_50%,transparent]  absolute inset-0 z-[1]' /> */}
        <div
  className="w-full h-full absolute inset-0 z-[1]"
  style={{background: "radial-gradient(circle, transparent 0%, transparent 25%, rgba(0,0,0,0.3) 50%, black 100%)"}}
/>
          <div className='absolute md:top-[4%] md:right-[6%]  top-[2%] right-[2%]  z-20 rounded-xl h-auto  '>
            <div className='flex py-3 px-3 items-center gap-2 '>
              <div className='bg-gray-500/40 md:p-3 p-2 rounded-full backdrop-blur-[2px] cursor-pointer'>
            <IoIosThumbsUp 
            onClick={()=>{
              if(!user){
                toast.error("Please login")
                return
              }
              dispach(addPopular({...movie,media_type:type,votes:1}))
              toast.success("voted +")
            }}
            className='text-white  md:text-xl transition-all duration-150  hover:scale-110 hover:-translate-y-1'/>
            </div>
            <div className='bg-gray-500/40 md:p-3 p-2 rounded-full backdrop-blur-[2px] cursor-pointer'>
            <IoIosThumbsDown
            onClick={()=>{
              if(!user){
                toast.error("Please login")
                return
              }
              dispach(removePopular(movie))
              toast.success("voted -")
            }}
            className='text-white  md:text-xl  transition-all duration-150 hover:scale-110 hover:translate-y-1  '/>
            </div>
            </div>
           
          </div>
        <img className='w-full h-full absolute inset-0 ' loading='lazy' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt='poster'/>
        {/* <div className='w-full absolute inset-0 h-full bg-gradient-to-tr  from-black  to-transparent'/> */}
        <h2 className='anton font-extrabold md:text-4xl text-xl  text-white z-10 relative text-center '>{movie?.title}</h2>
        <div className='relative mx-auto   z-20'>
        <div className='flex justify-center md:flex-row felx-col gap-3 flex-wrap '>
          <div className='md:w-[300px] md:h-[370px] w-[200px] hidden md:block  h-[230px]  relative  '>
            <img className='w-full h-full rounded-md hover:-translate-y-3 transition-all duration-150' loading='lazy' src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`} />
            
          </div>
          <div className=' w-fit lg:flex-[0.5] flex-[0.6] h-auto rounded-md flex flex-col justify-center  md:gap-4  gap-2 px-3 py-4 backdrop-blur-[2px] relative text-white md:mb-0 mb-7 '>
            {/* <h2 className='poppins font-extrabold md:text-4xl text-xl  text-white '>{movie?.title}</h2> */}
            <div className='flex items-center gap-2'>
              {
               movie && movie?.genres?.slice(0,4).map((ele,ind)=>{
                  return <button key={ind} className='px-3 text-white cursor-pointer  font-bold rounded-2xl py-2 bg-violet-950 poppins md:text-[12px] text-[9px]'>
                  {ele?.name}
             </button>
                })
              }
            </div>
            <div>
              <h4 className='poppins font-bold md:text-sm text-[12px] mb-2 '>Status : <span>{movie?.status}</span></h4>
              <p className='poppins font-semibold  md:text-sm  text-[10px]'>
                {movie?.overview}
              </p>
            </div>
            
          </div>
          </div>
          <div
            onClick={()=>{
              if(!user){
                toast.error("Please login")
                return
              }
              setVideoPlayer(true)
            }}
            className='dark:text-black mx-auto text-white dark:bg-white bg-black text-center mt-2 poppins cursor-pointer font-semibold text-xl w-[50%] flex justify-center items-center gap-2  md:py-2 py-1  rounded-md'><FaPlay/>Play</div>
        </div>
        

        </div>
        <div className='w-full h-auto py-10 bg-transparent'>
          <div className=''>
            <div className='text-center poppins text-xl  mb-10 text-white font-bold flex justify-center gap-8'>
              <p 
              onClick={()=>setIsCrew(true)}
              className='bg-black/70 dark:bg-white/30 cursor-pointer px-5 py-2 w-fit md:text-lg text-xs rounded-sm md:rounded-2xl'>CAST</p>
              <p
              onClick={()=>setIsCrew(false)}
              className='bg-black/70 dark:bg-white/30 cursor-pointer px-5 py-2 w-fit md:text-lg text-xs rounded-sm md:rounded-2xl'>CREW</p>

            </div>
            
            <div className='w-[80%] mx-auto h-auto flex items-center flex-wrap gap-5'>
              {
                isCast ? 
   
                 castt?.cast?.length > 2 ? 

                    castt?.cast?.slice(0,16).map((ele,inx)=>{
                         return(
                          ele.profile_path && <div className='mx-auto' key={inx}>
                              <img src={`https://image.tmdb.org/t/p/w92/${ele?.profile_path}`} className='md:w-[100px] md:h-[100px] w-[60px] h-[60px] object-cover rounded-full' />
                          <p className='text-nowrap text-center md:text-sm text-[10px] font-bold dark:text-white'>{ele.name.length > 13 ? ele.name.substr(0,12) : ele.name}</p>    
                          <p className='text-center dark:text-white  md:text-sm text-[9px]'>{ele.known_for_department}</p>
                           </div>
                          
                         )
                    }) : <p className='poppines text-bold dark:text-white text-black'> No data Avalable</p>
                
                
                :

                castt?.crew?.length > 2 ?

                castt?.crew?.slice(0,22).map((ele,inx)=>{
                  return(
                   ele.profile_path && <div key={inx}>
                       <img src={`https://image.tmdb.org/t/p/original/${ele?.profile_path}`} className='w-[100px] h-[100px] object-cover rounded-full' />
                   <p className='text-nowrap text-center dark:text-white'>{ele.name.length > 13 ? ele.name.substr(0,12) : ele.name}</p>    
                   <p className='text-center dark:text-white'>{ele.known_for_department}</p>
                    </div>
                   
                  )
             }) : <p className='poppines text-bold dark:text-white text-black'> No data Avalable</p>
                
              }
               
            </div>
          </div>

          <div className='w-full'>

            
                {
                 loading ?   <LoadingSkeleton/> :

                   similar.length > 2 && <LatestRelease  movies={similar} title={t("Similar")} background={true}/>

                }

                {
                   recommendations.length > 2 &&  <LatestRelease loading={loading} movies={recommendations} title={t("Recommended")} background={true}/>

                }
              
          </div>

        </div>
        {
          videoPlayer && <VideoPlayer setVideoPlayer={setVideoPlayer} idd={idd}/>
        }
    </section>
  )
}

export default DisplayMovie
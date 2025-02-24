import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LatestRelease, LoadingSkeleton, VideoPlayer } from '../components';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';



const DisplayMovie = () => {

    const {user} = useSelector(state=>state.user)

    const  {type,id} = useParams();

    const [movie ,setMovies] = useState("");
    const [similar ,setSimilar] = useState([])
    const [recommendations ,setRecommendations] = useState([])
    const [castt,setCast] = useState([])
    const [videoPlayer,setVideoPlayer] = useState(false);
    const [loading,setLoading] = useState(true)

    const [isCast ,setIsCrew] = useState(true)
  const [idd,setIdd] = useState()
    // console.log(id,type)

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

      //  console.log(result)
       setMovies(result)

    }

          const fetchSimilar = async()=>{
            setLoading(true)
           try {
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

        const result = await fetch(url, options);
        const data = await result.json();
        // console.log(data)

        const timer = await new Promise((r)=>setTimeout(()=>r("promise resolve"),2000))


        if(data.status_code ===34){
          setSimilar([])  
          setLoading(false)
        }else{
          // console.log('something')
          // console.log(data)
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
           url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
          
        }else{
           url =  `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`
     
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

      // console.log(result)

      if(result.status_code ===34){
        setRecommendations([])  
      }else{
        // console.log('something')
        setRecommendations(result.results)
      }

      }

      const fetchCast =async()=>{
        try {
          const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
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
    },[id])

  return (
    <section className='w-full h-full overflow-y-auto  ' 
    >
        <div className='w-full md:h-[600px] h-auto bg-gray-600 relative overflow-hidden'>
          <div className='absolute top-2 right-2  bg-black z-20 rounded-xl h-auto '>
            <div className='flex py-3 px-3 items-center gap-2 '>
            <FaArrowUp 
            onClick={()=>{
              if(!user){
                toast.error("Please login")
                return
              }
              toast.success("voted +")
            }}
            className='text-white cursor-pointer hover:animate-bounce'/>
            <FaArrowDown
            onClick={()=>{
              if(!user){
                toast.error("Please login")
                return
              }
              toast.success("voted -")
            }}
            className='text-white cursor-pointer hover:animate-bounce'/>
            </div>
            <h4 className='text-white text-center text-xs'>VOTE</h4>
           
          </div>
        <img className='w-full h-full absolute inset-0 ' loading='lazy' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt='poster'/>
        <div className='w-full absolute inset-0 h-full bg-gradient-to-tr from-black to-transparent'/>
        <div className='w-[80%] mx-auto md:mt-[100px] mt-[40px] mb-[20px  ] flex items-center flex-col md:flex-row gap-10'>
          <div className='md:w-[300px] md:h-[400px] w-[200px] h-[250px] shrink-0 relative   '>
            <img className='w-full h-full rounded-md hover:-translate-y-3 transition-all duration-150' loading='lazy' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
            <div
            onClick={()=>{
              if(!user){
                toast.error("Please login")
                return
              }
              setVideoPlayer(true)
            }}
            className='text-black text-center mt-2 poppins cursor-pointer font-semibold text-xl w-full bg-white py-2 rounded-md'>Play</div>
          </div>
          <div className='bg-[rgba(245,245,245,0.2)] w-fit flex-[0.7] rounded-md flex flex-col md:gap-4  gap-2 px-3 py-4 backdrop-blur-[2px] relative text-white '>
            <h2 className='poppins font-extrabold md:text-4xl text-xl  text-white '>{movie?.title}</h2>
            <div>
              <h4 className='poppins font-normal md:text-sm text-[12px] mb-2 '>Status : <span>{movie?.status}</span></h4>
              <p className='poppins font-normal md:text-sm  text-[10px]'>
                {movie?.overview}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              {
               movie && movie?.genres?.slice(0,4).map((ele,ind)=>{
                  return <button key={ele.id} className={`md:border-[2px] border-[1px] border-white text-black ${ind ===0 ? "bg-white/70" :""} md:px-4 md:py-1 px-2 py-[3px] rounded-xl`}>
                    {ele.name}
                  </button>
                })
              }
            </div>
          </div>
        </div>

        </div>
        <div className='w-full h-auto py-10 bg-transparent'>
          <div className=''>
            <div className='text-center poppins text-xl  mb-10 text-white font-bold flex justify-center gap-8'>
              <p 
              onClick={()=>setIsCrew(true)}
              className='bg-black/70 cursor-pointer px-5 py-2 w-fit rounded-2xl'>CAST</p>
              <p
              onClick={()=>setIsCrew(false)}
              className='bg-black/70 cursor-pointer px-5 py-2 w-fit rounded-2xl'>CREW</p>

            </div>
            
            <div className='w-[80%] mx-auto h-auto grid grid-cols-[repeat(auto-fit,120px)] place-items-center gap-5 '>
              {
                isCast ? 
   
                 castt?.cast?.length > 2 ? 

                    castt?.cast?.slice(0,16).map((ele,inx)=>{
                         return(
                          ele.profile_path && <div>
                              <img src={`https://image.tmdb.org/t/p/original/${ele?.profile_path}`} className='w-[100px] h-[100px] object-cover rounded-full' />
                          <p className='text-nowrap text-center dark:text-white'>{ele.name.length > 13 ? ele.name.substr(0,12) : ele.name}</p>    
                          <p className='text-center dark:text-white'>{ele.known_for_department}</p>
                           </div>
                          
                         )
                    }) : <p className='poppines text-bold dark:text-white text-black'> No data Avalable</p>
                
                
                :

                castt?.crew?.length > 2 ?

                castt?.crew?.slice(0,22).map((ele,inx)=>{
                  return(
                   ele.profile_path && <div>
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

                   similar.length > 2 && <LatestRelease  movies={similar} title={"Similar Movies"} background={true}/>

                }

                {

                  loading ?  <div className=' mt-3'><LoadingSkeleton/> </div> :
                   recommendations.length > 2 &&  <LatestRelease loading={loading} movies={recommendations} title={"Recommended Movies"} background={true}/>

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
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addFavourt,addWachLater } from '../redux/slices/moviesSlice';
import { SingleCard } from './SingleCard';





const LatestRelease = ({movies,title,show=false,setSearchBy,background=false}) => {

    const {watchLater ,favourt}  = useSelector((state)=>state.movie)
    const dispatch = useDispatch()

    console.log(watchLater , favourt)

    console.log(movies)

    


   
  
  return (
    <section className={`w-[93vw]  ${background ?  "": `bg-[url("https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5")]`}  bg-cover bg-center bg-fixed  overflow-hidden h-full mx-auto py-5`}>
         {
              show ?   <div className='my-2'>
                
                <select
                className='px-3 py-2 outline-none border-[1px] text-white poppins font-bold border-transparent active:border-[1px]'
                onChange={(e)=>{setSearchBy(e.target.value)}}
                >
                     <option value="popular" >
                        Popular
                    </option>
                <option value="now_playing"  >
                        Now Playing
                    </option>
                   
                    <option value="top_rated">
                       Top Rated
                    </option>
                    <option value="upcoming">
                        Up-Coming
                    </option>
                  
                </select>
                
                  </div>   :      <h3 className='ml-1 poppins font-semibold text-white text-xl  py-3'>{title}</h3> 

         }


        <div className='w-full flex gap-4 flex-nowrap overflow-x-auto continaer'>

{
    movies.slice(10,20).map((ele,ind)=>{
        return(
//             
          <SingleCard key={ind} ele={ele}/>
        )
    })
}
        </div>

    </section>
  )
}

export default LatestRelease
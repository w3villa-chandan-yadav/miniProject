import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { SingleCard } from './SingleCard';
import LoadingSkeleton from './LoadingSkeleton';





const LatestRelease = ({movies,loading,title,show=false,setSearchBy,background=false}) => {

    const {watchLater ,favourt}  = useSelector((state)=>state.movie)
    const dispatch = useDispatch()

    // console.log(watchLater , favourt)

    // console.log(movies)

    


   
  
  return (
    <section className={`w-[93vw]  bg-cover bg-center bg-fixed  overflow-hidden h-full mx-auto py-5`}>
         {
              show ?   <div className='my-2'>
                
                <select
                className='px-3 py-2 outline-none border-[1px] cursor-pointer dark:text-white  dark:bg-black   poppins font-bold border-transparent active:border-[1px]'
                onChange={(e)=>{setSearchBy(e.target.value)}}
                >
                     <option value="popular"  >
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
                
                  </div>   :      <h3 className='ml-1 poppins font-semibold dark:text-white text-black text-xl  py-3'>{title}</h3> 

         }


        <div className='w-full md:ml-2 flex gap-4 flex-nowrap overflow-x-auto continaer'>

{

 loading ?  [1,2,3,4,5].map((_,index)=><LoadingSkeleton key={index}/>) :

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
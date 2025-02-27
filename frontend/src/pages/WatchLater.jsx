import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SingleCard } from '../components'
import { Link } from 'react-router-dom'
import Hooks from '../customHook/Hooks'

const WatchLater = () => {
  const {watchLater,favourt} = useSelector((state)=>state.movie)

  const {getWatchLater} = Hooks()

  useEffect(()=>{
   getWatchLater()
  },[])


  return (
    <div className='w-full h-full overflow-x-auto pt-4'>
    <h2 className='text-center text-xl poppins font-bold dark:text-white text-black'>Watch Later Movies</h2>
    <div className='w-fit mx-auto gap-5 h-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 pt-5 mb-5'>
    {
                watchLater.length < 1 &&     <Link to="/" className='px-4 py-2 h-9 self-center   dark:bg-gray-300/60 bg-gray-500/40 rounded-2xl'>Please Add Some thing
                </Link>
             
              } 

                  {watchLater.map((ele, index) => (
                      <SingleCard ele={ele} key={index}/>
                  ))}
              </div>

    </div>
  )
}

export default WatchLater
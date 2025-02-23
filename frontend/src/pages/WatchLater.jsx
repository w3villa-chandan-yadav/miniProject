import React from 'react'
import { useSelector } from 'react-redux'
import { SingleCard } from '../components'
import { Link } from 'react-router-dom'

const WatchLater = () => {
  const {watchLater,favourt} = useSelector((state)=>state.movie)


  return (
    <div className='w-full h-full overflow-x-auto pt-4'>
    <h2 className='text-center text-xl poppins font-bold dark:text-white text-black'>Watch Later Movies</h2>
    <div className='w-fit mx-auto gap-5 h-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 pt-5 mb-5'>
    {
                watchLater.length < 1 &&  <div className='text-center absolute top-[50%] left-[50%] transform -translate-x-[30%] poppins font-bold '> 
                <Link to="/" className='px-4 py-3 dark:bg-gray-300/60 bg-gray-500/40 rounded-2xl'>Please Add Some thing
                </Link>
                </div>
              } 

                  {watchLater.map((ele, index) => (
                      <SingleCard ele={ele} key={index}/>
                  ))}
              </div>

    </div>
  )
}

export default WatchLater
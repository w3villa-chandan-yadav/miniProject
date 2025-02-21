import React from 'react'
import { useSelector } from 'react-redux'
import { SingleCard } from '../components'

const WatchLater = () => {
  const {watchLater,favourt} = useSelector((state)=>state.movie)


  return (
    <div className='w-full h-auto pt-4'>
    <h2 className='text-center text-xl poppins font-bold'>Watch Later Movies</h2>
   <div className='w-fit mx-auto gap-5 h-full grid grid-cols-5 pt-5 mb-5'>
                  {watchLater.map((ele, index) => (
                      <SingleCard ele={ele} key={index}/>
                  ))}
              </div>

    </div>
  )
}

export default WatchLater
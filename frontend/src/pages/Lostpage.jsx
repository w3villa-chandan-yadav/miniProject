import React from 'react'
import image from "../assets/lost.gif"
import { Link } from 'react-router-dom'

const Lostpage = () => {
  return (
    <div className='w-screen h-screen flex bg-black justify-center items-center'>
        <div>
             <img src={image} className='rounded-md mx-auto '/>
             <p className='text-2xl font-bold text-white'>Look like you have lost</p>
             <h3
            className='text-center mx-auto text-white bg-gray-500 px-3 py-2 rounded-2xl cursor-pointer'
             ><Link to="/"
             >Go Home</Link></h3>
        </div>
    </div>
  )
}

export default Lostpage
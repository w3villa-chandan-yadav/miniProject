import React from 'react'

const VideoPlayer = ({setVideoPlayer,idd}) => {
  return (
    <div className='w-full h-full bg-black/60 absolute inset-0 grid place-items-center'>
        <div className='aspect-video bg-white w-[70vw] relative'>
            <button 
            onClick={()=>setVideoPlayer(false)}
            className='bg-gray-500 font-bold px-2 py-2 rounded-2xl absolute right-2 top-2 text-white w-fit '>
                close
            </button>
            <iframe  className='w-full h-full' 
             src={`https://www.youtube.com/embed?v=${idd}?rel=0&showinfo=0&modestbranding=1&autohide=1`}
             frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             
            />

        </div>

    </div>
  )
}

export default VideoPlayer
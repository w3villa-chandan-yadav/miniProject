import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div 
    className='lg:w-[210px] md:w-[180px]  w-[170px] relative shrink-0 lg:h-[370px] md:h-[320px]  h-[300px] group rounded-md overflow-hidden dark:bg-[rgba(255,255,255,0.8)] bg-[rgba(0,0,0,0.7)] dark:text-black text-white backdrop-blur-[2px]'>
<div className='w-full lg:h-[320px] md:h-[260px] h-[230px] group-hover:scale-95 transition-all dark:bg-slate-500 duration-50 bg-slate-300 animate-pulse' loading='lazy'  />
<div className='flex justify-between  gap-1  items-center mx-2'>    
    <div className='flex  flex-1 flex-col gap-2'>


        <h4 className='poppins font-bold mt-2 text-sm  bg-slate-400  dark:bg-slate-600 rounded-sm animate-pulse h-5 w-[80%] '> </h4> 
        <h4 className='poppins font-bold  text-sm rounded-sm bg-slate-400 dark:bg-slate-500 animate-pulse h-3 w-[70%]'></h4>
        
    </div>

            <div 
            className='cursor-pointer h-6 w-4 self-start mt-1  animate-pulse dark:bg-slate-500 rounded-2xl bg-slate-200'>
                  
            </div>
        </div>
        
    </div>
  )
}

export default LoadingSkeleton
import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div 
    className='lg:w-[200px]  md:w-[190px]  w-[150px] relative shrink-0 shadow-md dark:shadow-sm dark:shadow-white shadow-black lg:h-[340px] md:h-[300px]  h-[240px] group rounded-md  dark:text-black text-white '>
<div className='w-full lg:h-[285px] md:h-[250px] rounded-md h-[185px]   group-hover:scale-95 transition-all dark:bg-slate-500 duration-50 bg-slate-300 animate-pulse' loading='lazy'  />
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
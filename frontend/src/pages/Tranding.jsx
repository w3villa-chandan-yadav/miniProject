import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LoadingSkeleton, SingleCard } from '../components';
// import { useParams } from 'react-router-dom'

const Tranding = () => {
    // const params = useParams()
    const [pageNo, setPageNo] = useState(1) 
    const [data, setData] = useState([])
    const totalPageNoRef = useRef(0) 
    const [loading, setLoading] = useState(true);
    const container = useRef()

    const [genera,setGenera] = useState(null)

    const fetchData = async () => {
        setData([])
        setLoading(true)
        let url 
        if(genera){
            url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genera}`;

        }else{

            url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
        }


        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
            }
        };

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            // console.log(data.results)
            const timer = await  new Promise((r)=>setTimeout(()=>r("Promise resolve"),1000))
            setLoading(false)

            setData(data.results)
            totalPageNoRef.current = data.total_pages // Save totalPageNo in useRef
        } catch (error) {
            console.log('error', error)
            setLoading(false)
        }
    }

    const fetchNewData = async () => {
        setLoading(true)
        let url 
        if(genera){
            url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc&with_genres=${genera}`;
            
        }else{
           url= `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`;

        }
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
              }
        };

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            setData((prev) => [
                ...prev,
                ...data.results
            ])
            setLoading(false)
        } catch (error) {
            console.log('error', error)
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }

    // Handle scroll event for infinite scrolling
    const handleScroll = () => {
        if (container.current) {
            const { scrollTop, scrollHeight, clientHeight } = container.current;
            
            
            if (scrollHeight - scrollTop <= clientHeight + 200) {
                // Using the latest totalPageNo from useRef
                // console.log("totalPageNoRef.current:", totalPageNoRef.current);
                if (pageNo < totalPageNoRef.current) {
                    setPageNo((prev) => prev + 1);
                }
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [genera])

    useEffect(() => {
        console.log("called",pageNo,genera)
        if (pageNo > 1) {
            fetchNewData()
        }
    }, [pageNo])

    // Ensure scroll event listener is added only to the container
    useEffect(() => {
        if (container.current) {
            container.current.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (container.current) {
                container.current.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    // Log the pageNo value whenever it changes (for debugging)
    // useEffect(() => {
    //     console.log("Current pageNo:", pageNo)
    // }, [pageNo])

    return (
        <div
            ref={container}
            className='p-2 w-full h-full overflow-x-scroll py-4'>
            <div className='flex flex-wrap dark:bg-black bg-white w-full justify-center items-center md:gap-3 gap-1 py-4 md:relative fixed md:top-0 top-[60px] left-[50%] transform translate-x-[-50%] z-10 '>
            <h2
            onClick={()=>{
                setPageNo(1)
                setGenera(null)
            }}
            className={`poppins md:font-bold font-semibold   cursor-pointer text-center ${genera ===null  ? "dark:bg-white/20  bg-black/50  md:rounded-xl rounded-sm md:px-3 md:py-2":""}  dark:text-white text-gray-800 md:px-3 md:py-2  px-2 py-1`}>Explore</h2>
            <h2
            onClick={()=>{
                setPageNo(1)
                setGenera(28)
            }}
            className={`poppins font-bold ${genera ===28  ? "dark:bg-white/20 bg-black/50  rounded-2xl px-3 py-2":""} text-center cursor-pointer px-3 py-4 dark:text-white text-gray-800`}>Action</h2>

            <h2
           onClick={()=>{
            setPageNo(1)
            setGenera(12)
        }}
            className={`poppins font-bold text-center ${genera ===12  ? "dark:bg-white/20 bg-black/50 rounded-2xl px-3 py-2":""} cursor-pointer px-3 py-4 dark:text-white text-gray-800`}>Animation</h2>

            <h2 
            onClick={()=>{
                setPageNo(1)
                setGenera(35)
            }}           
             className={`poppins font-bold text-center ${genera ===35  ? "dark:bg-white/20 bg-black/50 rounded-2xl px-3 py-2":""}  dark:text-white text-gray-800 cursor-pointer px-3 py-4 `}>comedy</h2>

            <h2 
           onClick={()=>{
            setPageNo(1)
            setGenera(27)
            }}
            className={`poppins font-bold text-center ${genera ===27  ? "dark:bg-white/20 bg-black/50 rounded-2xl px-3 py-2":""} cursor-pointer px-3 py-4 dark:text-white text-gray-800`}>Horror</h2>


            </div>
            <div className='w-fit mx-auto md:gap-5 gap-9 h-full grid lg:grid-cols-5 md:top-0 relative top-[90px]   sm:grid-cols-3 grid-cols-1 mb-5'>

                {data.map((ele, index) => (
                    <SingleCard ele={ele} key={index}/>
                ))}
                {
                    loading && [1,2,3,4,5,6].map((_,ind)=>{
                        return <LoadingSkeleton key={ind}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tranding

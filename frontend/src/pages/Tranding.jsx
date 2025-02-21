import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SingleCard } from '../components';
// import { useParams } from 'react-router-dom'

const Tranding = () => {
    // const params = useParams()
    const [pageNo, setPageNo] = useState(1) 
    const [data, setData] = useState([])
    const totalPageNoRef = useRef(0) 
    const [loading, setLoading] = useState(false);
    const container = useRef()

    const [genera,setGenera] = useState(null)

    const fetchData = async () => {
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
            console.log(data.results)
            setData(data.results)
            totalPageNoRef.current = data.total_pages // Save totalPageNo in useRef
            setLoading(false)
        } catch (error) {
            console.log('error', error)
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
            <div className='flex justify-center items-center gap-3 py-4'>
            <h2
            onClick={()=>{
                setPageNo(1)
                setGenera(null)
            }}
            className={`poppins font-bold  cursor-pointer text-center ${genera ===null  ? "dark:bg-white/20  bg-black/50  rounded-2xl px-3 py-2":""}  dark:text-white text-gray-800 px-3 py-4 `}>Explore</h2>
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
            <div className='w-fit mx-auto gap-5 h-full grid grid-cols-5 mb-5'>
                {data.map((ele, index) => (
                    <SingleCard ele={ele} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Tranding

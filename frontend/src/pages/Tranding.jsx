import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom'

const Tranding = () => {
    const params = useParams()
    const [pageNo, setPageNo] = useState(1) // Initialize pageNo as 1
    const [data, setData] = useState([])
    const totalPageNoRef = useRef(0) // Use useRef for tracking totalPageNo
    const [loading, setLoading] = useState(false);
    const container = useRef()

    const fetchData = async () => {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer <Your_Token_Here>'
            }
        };

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            setData(data.results)
            totalPageNoRef.current = data.total_pages // Save totalPageNo in useRef
            setLoading(false)
        } catch (error) {
            console.log('error', error)
        }
    }

    const fetchNewData = async () => {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`;
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
    }, [])

    useEffect(() => {
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
    useEffect(() => {
        console.log("Current pageNo:", pageNo)
    }, [pageNo])

    return (
        <div
            ref={container}
            className='p-2 w-full h-full overflow-x-scroll py-4'>
            <h2 className='poppins font-bold'>Trending</h2>
            <div className='w-fit mx-auto gap-5 h-full grid grid-cols-5 mb-5'>
                {data.map((ele, index) => (
                    <div
                        key={index} className='w-[210px] relative shrink-0 h-[370px] group rounded-md overflow-hidden bg-[rgba(255,255,255,0.4)] backdrop-blur-[2px]'>
                        <FaPlay className='absolute top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2 text-3xl text-white hidden group-hover:block cursor-pointer '/>
                        <FaHeart className={`absolute top-[10px] right-[10px] z-20 text-2xl ${true ? "text-red-500" : "text-white"} cursor-pointer `}/>
                        <img className='w-full h-[320px] group-hover:scale-95 transition-all duration-200 ' src={`https://image.tmdb.org/t/p/original/${ele?.poster_path}`} />
                        <div className='flex justify-between items-center mx-2'>
                            {ele.media_type !== "tv" ?
                                <h4 className='poppins font-bold ml-1 text-sm'>{ele?.original_title?.length < 20 ? ele?.original_title : `${ele?.original_title?.substr(0, 19)}...`}</h4> :
                                <h4 className='poppins font-bold ml-1 text-sm'>{ele?.original_name?.length < 13 ? ele?.original_name : `${ele?.original_name?.substr(0, 12)}...`}</h4>
                            }
                            <div className='cursor-pointer'>
                                {false ? <FaBookmark /> : <FaRegBookmark />}
                            </div>
                        </div>
                        <div className='mx-3 mt-2 poppins flex justify-between font-semibold text-xs '>
                            <span> Rating <span>{ele?.vote_average}</span></span>
                            <span>{ele.media_type !== "tv" ? ele?.release_date : ele?.first_air_date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tranding

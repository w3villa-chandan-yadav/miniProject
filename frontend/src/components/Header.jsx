import React, { useEffect, useState } from 'react'
import logoImage from "../assets/fire.gif"
import { FaSearch } from "react-icons/fa";
import imagess from "../assets/icon.webp"
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";




let timerId

const Header = () => {
  const [mode,setMode] = useState("dark");

  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.user)


  const [input ,setInput] = useState("")


  const [searchingData ,setSearchingData] = useState([])

    const fetchSuggestion =async ()=>{
      if(input.length < 2 ) return
      console.log("calling api",input)
      
      // const url = `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=false&language=en-US&page=1`;
      const url = `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`;

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
        }
      };
      
      const result = await fetch(url, options);

      const data = await result.json();

      // console.log(data)

      setSearchingData(data.results)
        
    }



    console.log(searchingData);


    const handleInput = (e)=>{


      // if(e.key ==="Enter"){
      //   console.log("press enterd")
      //  return
      // }
      // console.log(e.target.value )
      if(e.target.value.trim() ===""){
        setSearchingData([])
      }


      setInput(e.target.value)

      
   
      clearTimeout(timerId) ;

      timerId = setTimeout(() => {
        
        fetchSuggestion()
 
      }, 400);



    }

      useEffect(()=>{

      const body =   document.querySelector("html");

      const attribute = body.getAttribute("class")

        body.setAttribute("class",mode)

      // console.log(attribute )



      },[mode])




  return (
    <div className='w-screen h-[60px] max-w-[1900px] dark:bg-gray-800 bg-gray-300  mx-auto py-1'>
        <div className='w-full px-2  rounded-md mx-auto h-full flex justify-between items-center'>
            <div className='h-full   flex items-center gap-2'>
                <img 
                onClick={()=>navigate("/")}
                src={logoImage} className='  rounded-full cursor-pointer md:h-full h-[30px]'/>
            </div>
            
            <div className='flex items-center  gap-3 justify-end flex-1'>
            <div
              className='text-black '
              onClick={()=>setMode((pre)=>{
                if(pre ==="dark"){
                  return "light"
                }else{
                 return "dark"
                }
              })} 
              >
                {mode ==="dark" ? <FiSun className='text-white text-3xl'/> : <MdDarkMode className='text-white text-3xl'/>}
              </div>
              
                <div 
                className=' w-fit h-full gap-2   relative md:py-2 py-1  border-[1px] rounded-md  md:rounded-xl border-gray-600 md:px-3  px-1  flex items-center justify-between'
                >   
                 
                    <input 
                    value={input}
                    onKeyDown={(e)=>{
                      if(e.key === "Enter"){
                        alert("pressed entere")
                        
                        setSearchingData([])
                      }
                    }}
                    onChange={(e)=>handleInput(e)}
                    placeholder='search...'
                    className='outline-none dark:text-white  md:w-full w-[100px]'  
                    />
                      { searchingData.length >=1 &&
                    <div className='w-[250px] rounded-md overflow-y-auto max-h-[250px] h-auto absolute top-[120%] z-30 bg-[rgba(245,245,245,0.6)] backdrop-blur-[2px]'>
                          {
                            searchingData.map((ele,ind)=>{
                              return(
                                <div key={ind}
                                className='px-3 py-3 '
                                onClick={()=>{setInput(ele.title)
                                  navigate(`/details/movie/${ele.id}`)
                                  setSearchingData([])
                                  
                                }}
                                >{ele.title}
                                  </div>

                              )
                            })
                          }
                    </div>
                      }
                    <FaSearch className='text-gray-600'/>
                </div>
                <div className='shrink-0'>
                 {
                  user ?  <img src={imagess}
                  className='h-[30px] '
                  alt='userIcom'/> :
                  <Link
                  to="signIn"
                  className='dark:bg-gray-900 bg-gray-200 dark:text-white text-gray-700 px-3  poppins font-semibold py-2 rounded-xl cursor-pointer'>Login</Link>
                 }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
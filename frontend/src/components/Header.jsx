import React, { useState } from 'react'
import logoImage from "../assets/icegif-747.gif"
import { FaSearch } from "react-icons/fa";
import imagess from "../assets/icon.webp"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


let timerId

const Header = () => {

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

      console.log(data)

      setSearchingData(data.results)
        
    }



    console.log(searchingData);


    const handleInput = (e)=>{


      // if(e.key ==="Enter"){
      //   console.log("press enterd")
      //  return
      // }
      console.log(e.target.value )
      if(e.target.value.trim() ===""){
        setSearchingData([])
      }


      setInput(e.target.value)

      
   
      clearTimeout(timerId) ;

      timerId = setTimeout(() => {
        
        fetchSuggestion()
 
      }, 400);



    }

    




  return (
    <div className='w-screen h-[60px] max-w-[16 00px] bg-indigo-600 mx-auto py-1'>
        <div className='w-[98%] px-2 bg-white rounded-md mx-auto h-full flex justify-between items-center'>
            <div className='h-full  bg-green-300 flex items-center gap-2'>
                <img src={logoImage} className='w-full h-full'/>
            </div>
            <div className='flex items-center'>
                <div 
                className=' w-full h-full gap-2   relative py-1 px-1  rounded-2xl shadow-2xl flex items-center justify-between'
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
                    className='outline-none'
                    />
                      { searchingData.length >=1 &&
                    <div className='w-[250px] rounded-md overflow-y-auto max-h-[250px] h-auto absolute top-[120%] z-30 bg-[rgba(245,245,245,0.6)] backdrop-blur-[2px]'>
                          {
                            searchingData.map((ele,ind)=>{
                              return(
                                <div key={ind}
                                className='px-3 py-3 '
                                onClick={()=>{setInput(ele.title)
                                  setSearchingData([])
                                }}
                                >{ele.title}
                                  </div>

                              )
                            })
                          }
                    </div>
                      }
                    <FaSearch className='text-gray-500'/>
                </div>
                <div className='shrink-0'>
                 {
                  user ?  <img src={imagess}
                  className='h-[30px] '
                  alt='userIcom'/> :
                  <Link
                  to="signIn"
                  className='bg-blue-600 px-3 py-2 rounded-xl cursor-pointer'>Login</Link>
                 }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
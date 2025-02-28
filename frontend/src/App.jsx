import { useEffect, useState } from 'react';
import {Routes,Route} from "react-router-dom"
import imageLoading from "./assets/loading.gif"

import './App.css'
import { Header, ProtectedRoute } from './components';
import { DisplayMovie, Favourite, Homepage, Login, Lostpage, MovieContainer, PopularsNow, SignIn, Tranding, WatchLater } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { IoCloseSharp } from "react-icons/io5";
import { addCurrentLanguage, addLanguage } from './redux/slices/moviesSlice';
import { useTranslation } from 'react-i18next';


const Language =[
  {code:"en",lang:"English"},
  {code:"fr",lang:"French"},
  {code:"hi",lang:"Hindi"},
  {code:"es" ,lang:"Spanish"}
]

function App() {
  const {i18n} =  useTranslation()
  const dispatch =useDispatch()
  const {language} = useSelector((state)=>state.movie);
  const [loading,setLoading] = useState(true) ;

  const changeLangugae =(code)=>{
        i18n.changeLanguage(code);
        dispatch(addLanguage(false))
        dispatch(addCurrentLanguage(code))
  }


  useEffect(()=>{

    const timer = setTimeout(()=>{

      setLoading(false)

    },1000)

    return()=>{
      clearTimeout(timer)
    }


  },[])
 

  return (
    <div className='dark:bg-black bg-gray-400 relative'>
     {
      loading &&  <div className="w-full h-full grid place-items-center absolute inset-0 z-50 overflow-hidden">
      <img className="w-full h-full object-cover sm:max-w-full sm:max-h-full" src={imageLoading} alt="Loading" />
    </div>
     }
    {
      language &&  <div className="absolute w-full inset-0 h-full grid place-items-center backdrop-blur-[3px] bg-[rgba(245,245,245,0.5)] z-50">
      <div className="bg-gray-300 flex flex-col justify-start items-center gap-4 p-4 rounded-2xl shadow-lg relative h-auto w-[280px] max-w-full">
        <h2 
          className="absolute top-2 right-2 text-white text-2xl cursor-pointer hover:text-red-500 transition duration-200"
          onClick={() => dispatch(addLanguage(false))}
        >
          <IoCloseSharp  className='text-red-400'/>
        </h2>
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Select Language</h3>
        {Language.map((ele) => (
          <h3
            key={ele.code}
            onClick={() => changeLangugae(ele.code)}
            className="text-center text-gray-800 cursor-pointer py-2 px-4 w-full rounded-md hover:bg-green-500/40 transition duration-300"
          >
            {ele.lang}
          </h3>
        ))}
      </div>
    </div>
    
    }
   <div className='w-screen h-auto overflow-x-hidden dark:bg-black bg-white max-w-[1950px] mx-auto' >
    <Header/>
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signIn' element={<SignIn/>} />

    <Route exact path='/' element={<Homepage/>}>
    <Route  index element={<MovieContainer/>} />
    <Route  path='/details/:type/:id' element={<DisplayMovie/>}/>
    <Route path='/latest/trending' element={<Tranding/>} />
    <Route path='/popular' element={<PopularsNow/>}/>
    <Route path='/watchLater' element={<ProtectedRoute><WatchLater/></ProtectedRoute>}/>
    <Route path='/liked' element={<ProtectedRoute><Favourite/> </ProtectedRoute>}/>
    </Route>
    <Route  path='*' element={<Lostpage/>}/>
    
    </Routes>    

    
    

   </div>
   </div>
  )
}

export default App

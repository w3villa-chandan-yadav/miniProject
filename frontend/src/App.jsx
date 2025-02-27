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
      language &&  <div className='absolute w-full inset-0 h-full grid place-items-center backdrop-blur-[3px] bg-[rgba(245,245,245,0.5)] z-50'>
                 <div className='bg-black flex justify-between items-center gap-2 flex-col rounded-2xl relative h-auto w-[200px]'>
                 <h2 className='absolute right-2 text-white top-1 text-xl'
                 onClick={()=>dispatch(addLanguage(false))}
                 ><IoCloseSharp/></h2>
                   {
                    Language.map((ele)=>{
                     return <h3 
                     onClick={()=>changeLangugae(ele.code)}
                     className='text-center  text-white cursor-pointer hover:bg-green-400/20 w-full h-full  py-1.5'>{ele.lang}</h3>
                    })
                   }
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

import { useEffect, useState } from 'react';
import {Routes,Route} from "react-router-dom"
import imageLoading from "./assets/loading.gif"

import './App.css'
import { Header, ProtectedRoute } from './components';
import { DisplayMovie, Favourite, Homepage, Login, Lostpage, MovieContainer, SignIn, Tranding, WatchLater } from './pages';



function App() {
 
  const [loading,setLoading] = useState(true) ;


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
      loading &&  <div className='w-full h-full overflow-hidden  absolute inset-0 z-50 object-cover'>
      <img className='w-full h-full ' src={imageLoading} />

    </div>
     }
   <div className='w-screen h-auto overflow-x-hidden dark:bg-black bg-white max-w-[1950px] mx-auto'>
    <Header/>
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signIn' element={<SignIn/>} />

    <Route exact path='/' element={<Homepage/>}>
    <Route  index element={<MovieContainer/>} />
    <Route  path='/details/:type/:id' element={<DisplayMovie/>}/>
    <Route path='/latest/trending' element={<Tranding/>} />
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

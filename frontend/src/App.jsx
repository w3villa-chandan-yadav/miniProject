import { useState } from 'react';
import {Routes,Route} from "react-router-dom"

import './App.css'
import { Header, ProtectedRoute } from './components';
import { DisplayMovie, Favourite, Homepage, Login, Lostpage, MovieContainer, SignIn, Tranding, WatchLater } from './pages';



function App() {
 
 

  return (
   <div className='w-screen h-auto overflow-x-hidden dark:bg-black bg-white'>
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
  )
}

export default App

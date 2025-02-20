import { useState } from 'react';
import {Routes,Route} from "react-router-dom"

import './App.css'
import { Header } from './components';
import { DisplayMovie, Favourite, Homepage, MovieContainer, Tranding, WatchLater } from './pages';



function App() {
 
 

  return (
   <div className='w-screen h-auto'>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Homepage/>}>
    <Route  index element={<MovieContainer/>} />
    <Route  path='/details/:type/:id' element={<DisplayMovie/>}/>
    <Route path='/latest/trending' element={<Tranding/>} />
    <Route path='/watchLater' element={<WatchLater/>} />
    <Route path='/liked' element={<Favourite/>}/>



    </Route>
    
    </Routes>    

    
    

   </div>
  )
}

export default App

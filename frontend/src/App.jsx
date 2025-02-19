import { useState } from 'react';
import {Routes,Route} from "react-router-dom"

import './App.css'
import { Header } from './components';
import { Homepage, MovieContainer } from './pages';

function App() {
 

  return (
   <div className='w-screen h-auto'>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Homepage/>}>
    <Route  index element={<MovieContainer/>} />


    </Route>
    
    </Routes>    

    
    

   </div>
  )
}

export default App

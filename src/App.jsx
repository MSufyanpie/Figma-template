import { useState } from 'react'

import './App.css'

import Home from './components/Home/Home'
import {BrowserRouter as  Router } from 'react-router-dom'
import Services from './components/Services/Services'
import NavBar from './components/Home/Navbar'
import Sections from './components/Sections/Sectionos'


export let cart=5;


function App() {
  
  

  return (
    <>    
    
          
          <Router>
          <NavBar></NavBar>
          <Sections></Sections>
          </Router>
          
          {/* <Home></Home> */}
          
          
          
          
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import AboutMe from './Pages/AboutMe'
import AboutTeam from './Pages/AboutTeam'
import HomePage from './Pages/Homepage'
import Contact from './Pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
 <> 
 <BrowserRouter>
 <Navbar/>  
 <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/aboutme' element={<AboutMe/>}/>
  <Route path='/about' element={<AboutTeam/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/Footer' element={<Footer/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>


 </>
  )
}

export default App

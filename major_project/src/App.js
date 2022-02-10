import React from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/login'
import Contact from './components/contact'
import About from './components/about'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <footer />
    </>
  )
}

export default App

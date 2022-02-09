import React from 'react'
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
        <Route path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </Routes>
    </>
  )
}

export default App
import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <Navbar />
      <Route>
      <Homepage />
      </Route>
      <Route>
      <about />
      </Route>
      <Route>
      <contact />
      </Route>
      <Route>
      <login />
      </Route>
      <Route>
      <Signup />
      </Route>
    </>
  )
}

export default App
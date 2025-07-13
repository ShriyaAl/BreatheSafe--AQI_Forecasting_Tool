import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import {Home, Health, Dashboard, Devices, Community, Analytics} from './pages/pages.js'

const App = () => {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/devices' element={<Devices/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/health' element={<Health/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App

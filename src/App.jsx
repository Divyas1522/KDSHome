import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
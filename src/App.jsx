import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/about' element ={<About />}/>
        <Route path='/contact' element ={<Contact />}/>  
        <Route path='*' element ={<NotFound />}/>  

      </Routes>
      <Footer />
    </Router>
  )
}
export default App


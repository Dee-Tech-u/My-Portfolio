import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


function App() {
  useEffect(() => {
        AOS.init({
          // Optional: Configuration options
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing function
          once: true, // Whether animation should only happen once
          //<div data-aos="fade-up" data-aos-delay="200">
      //This element will fade up on scroll.
    //</div>
        });
      }, []);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App

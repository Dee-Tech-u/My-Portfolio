import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
  <nav className='group bg-gradient-to-br from-black from-2% to-amber-800 shadow-lg flex items-center justify-between sm:px-15 lg:px-40 py-3 px-2 fixed top-0 left-0 w-full z-10 '>
    <div className='max-w-7xl mx-auto px-4 custom-sm:px-2 w-full'>
      <div className='flex items-center justify-between h-16 w-full'>
        <div className='flex-shrink-0'>
           <Link to="/" className=''>
           <img src="Logo.png" alt="" className='h-20'/>
    </Link>
        </div>
    <div className='hidden md:block'>
      <div className='ml-10 flex items-baseline space-x-4'>
        <Link to="/" className='py-1 text-sm sm:text-lg font-light text-white rounded-lg hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Home
      </Link>
      <Link to="/about" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      About Us
      </Link>
      <Link to="/services" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Services
      </Link>
      <Link to="/projects" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Projects
      </Link>
      <Link to="/contact" className='py-1 text-sm sm:text-lg font-light text-white hover:scale-90 transform transition duration-300 ease-in-out hover:gap-4 hover:flex'>
      Contact
      </Link>
      </div>
    </div>
     <Link to="tel:+2348080707492" >
     <a href="tel:+2348080707492" target='-blank'>
      <button type='submit' className='hidden md:block text-sm mr-3 w-25 h-7 bg-amber-600 rounded-full hover:bg-amber-700 hover:scale-105 transition duration-300 ease-linear cursor-pointer'>Book a Call</button>
     </a>
      </Link>

    <div className='custom-md:hidden'>
      <button onClick={toggleMenu} className=' p-10 rounded-md text-gray-400 hover:text-white hover:scale-110 transition duration-300 ease-linear cursor-pointer focus:outline-none'>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
    </div>
    </div>

    <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-black from-2% to-amber-800 text-[#fff] transform ${isOpen ? 'translate-x-0' : '-translate-x-full' } transition-transform duration-300 ease-in-out custom-md:hidden`}>
      <div className='flex-shrink-0'>
           <Link to="/" className='px-4'>
           <img src="Logo.png" alt="" className='h-20'/>
    </Link>
        </div>
      <div className='px-2 pb-3 sp-y-1 custom-sm:px-3 mt-16 '>
        <Link to="/" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-red-950 hover:scale-105 transition duration-300 ease-linear' onClick={toggleMenu}>
      Home
      </Link>
      <Link to="/about" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-red-950 hover:scale-105 transition duration-300 ease-linear' onClick={toggleMenu}>
      About Us
      </Link>
      <Link to="/services" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-red-950 hover:scale-105 transition duration-300 ease-linear' onClick={toggleMenu}>
      Services
      </Link>
      <Link to="/projects" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-red-950 hover:scale-105 transition duration-300 ease-linear' onClick={toggleMenu}>
      Projects
      </Link>
      <Link to="/contact" className='block px-3 py-2 rounded-md text-base font-medium hover:bg-red-950 hover:scale-105 transition duration-300 ease-linear' onClick={toggleMenu}>
      Contact
      </Link>
       <Link to="tel:+2348080707492">
       <a href="tel:+2348080707492" target='-blank'>
        <button type='submit' className='text-sm mt-3 mr-3 w-25 h-7 bg-amber-600 rounded-full hover:bg-amber-700 hover:scale-105 transition duration-300 ease-linear cursor-pointer'>Book a Call</button>
       </a>
      </Link>
      </div>
    </div>
   
   </nav>
  </>
  )
}

export default Navbar
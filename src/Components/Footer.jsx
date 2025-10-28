import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLintcode, SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='text-white py-15 px-10 bg-gradient-to-br from-black from-2% to-gray-950'>
      <div className='text-center'>
        <h1 data-Aos="zoom-in" data-Aos-delay="1500" className='text-2xl text-orange-500 md:text-5xl lg:text-6xl'>READY TO WORK WITH US</h1>
        <p className='text-[10px] pt-1 pb-5'>Let's collaborate to turn your vission into beautiful, functional designs that make an impart</p>
      </div>
      <div className='flex justify-between items-center py-6 border-t-1 border-b-1 border-gray-800 '>
        <div className='w-50 lg:w-100'>
          <SiLintcode className='text-orange-500 text-xl'/>
          <p className='text-[10px] font-semibold text-gray-300 '>I develop responsive, user-friendly, user-centerd designs that turn ideas into reality. With passion for innovation and developing, i help brands and individuals create experience that truly connects</p>
        </div>
        <div>
          <h1 className='font-semibold'>Useful Links</h1>
          <div className='text-[11px] text-gray-300'>
            <Link to="/about" className='py-1'>
              <p className='py-0.5'>About Us</p>
            </Link>
            <Link to="/services">
              <p className='py-0.5'>Services</p>
            </Link>
            <Link to="/projects">
              <p>Projects</p>
            </Link>
          </div>      
        </div>
        <div>
          <h1 className='font-semibold'>Social Links</h1>
          <div className='flex text-orange-500 text-xl mt-2 space-x-1'>
            <Link to="https://x.com/Youngboss1144?s=09" target='-blank'>
              <FaXTwitter />
            </Link>
            <Link to="https://www.facebook.com/share/1BdY4UNbUy/" target='-blank'>
              <FaFacebookF />
            </Link>
            <Link to="https://www.linkedin.com/in/monday-okoro-8ba76237a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='-blank'>
              <FaLinkedinIn />
            </Link>
            <Link to="https://wa.me/message/GFAHWSVIEXPEI1" target='-blank'>
              <SiWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <p className='text-[10px] text-center pt-2'>All rights reserved Copyright &copy; 2025</p>
    </div>
    </>
  )
}

export default Footer
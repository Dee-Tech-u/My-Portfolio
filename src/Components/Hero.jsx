import React, { useEffect } from 'react'
import Aos from 'aos';
import { TiPlus } from 'react-icons/ti';




const Hero = () => {
  useEffect(() => {
          Aos.init({
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
      <div className='flex justify-center items-center text-[#fff]'>
        <div className='flex justify-center items-center flex-col custom-sm:flex-row px-10 gap-5 w-200'>
          <div data-Aos="fade-right" data-Aos-delay="200" className='w-100 px-10'>
            <h1 className='text-2xl font-bold'>I'm Dee Prince, a <br /><span className='text-yellow-600'> Front-end Developer</span></h1>
            <p className='text-[12px]'>A Front-end developer, i create responsive, user-friendly, user-centered, high-performing digital products that engage, inspire and deliver results.</p>
            <a href="mailto:mondy144@gmail.com?subject=Booking Request&body=Please call or Whatsapp +2348080707492 for quick response" target='-blank'>
              <button type='submit' className='bg-orange-500 mt-5 mr-3 w-25 h-7 rounded-full hover:bg-amber-700 transition duration-300 ease-linear cursor-pointer'>Email Me</button>
            </a>
            <a href="tel:+23480807074" target='-blank'>
              <button type='submit' className='text-sm mr-3 w-25 h-7 border-1 border-amber-600 rounded-full hover:scale-105 transition duration-300 ease-linear cursor-pointer'>Book a Call</button>
            </a>
          </div>
          <div data-Aos="fade-left" data-Aos-delay="200">
            <img src="Pic.png" alt="picture" className='size-70 '/>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-orange-500 text-[10px] p-1 ">
        <TiPlus /> USABLE
        <TiPlus /> RELIABLE
        <TiPlus /> ACCESSIBLE
        <TiPlus /> INTERACTIVE
        <TiPlus /> CLARITY
        <TiPlus /> CONSISTENCY
        <TiPlus />
        </div>
    </>
  )
}

export default Hero
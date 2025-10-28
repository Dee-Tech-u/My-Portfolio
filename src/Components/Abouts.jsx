import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { WiDirectionDownRight } from 'react-icons/wi';
import { FaPhoneAlt } from 'react-icons/fa'

const About = () => {
  return (
    <>
    <div className='text-white p-15 bg-gradient-to-tr from-black from-2% to-gray-950 w-full'>
      <div className='flex flex-col custom-md:flex-row justify-center items-center'>
        <div className='w-100 pb-6'>
          <div data-Aos="fade-down" data-Aos-delay="200">
            <img src="Pic.png" alt="picture" className='size-30 m-auto rounded-full border-4 border-orange-500 '/>
          </div>
        </div>
        <div data-Aos="fade-up" data-Aos-delay="200" className='w-100 px-10'>
          <WiDirectionDownRight className='text-orange-500 text-2xl'/>
          <h1 className='text-orange-500 text-[12px]'>About Me</h1>
          <p className='text-3xl '>Who is Dee Prince?</p>
          <p className='text-[12px] text-gray-300 pt-2'>"Empowering businesses with Innovative Web Design and Development Solutions"</p>
          <p className='text-[12px] pt-2 text-gray-400'>Hi. I'm Dee, a passionate Front-end Developer dedicated to transforming ideas into responsive, user-friendly, user-focused experience. I bring creativity, and a keen eye for detail to every Web i develop.</p>
          <div className='flex gap-6 pt-5'>
            <div className='flex items-center gap-2'>
            <MdOutlineEmail className='text-orange-500 text-4xl'/>
            <div>
              <p className='text-[12px] text-gray-400'>Email Me At</p>
              <p className='text-[12px]'>mondy144@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt className='text-orange-500 text-2xl'/>
            <div>
              <p className='text-[12px] text-gray-400'>Phone Number</p>
              <p className='text-[12px]'>+2348080707492</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
import React from 'react'
import { WiDirectionDownRight } from 'react-icons/wi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
  const [state, handleSubmit] = useForm("xpwynplw");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <div className='min-h-screen bg-gray-950 w-full'>
      <div className='min-h-screen bg-gradient-to-t from-black from-2% to-amber-950'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 text-[#fff]'>
          <div data-Aos="zoom-in" data-Aos-delay="200" className='w-100 px-5'>
          <WiDirectionDownRight className='text-orange-500 text-2xl'/>
          <p className='text-orange-500 text-[12px]'>Contact Us</p>
          <h1 className='text-4xl'>Get in touch to discuss your next project!</h1>
          <p className='text-[12px] text-gray-400 pt-6'>Are you ready to take your project to the next level? Whether you're looking for a new website, or simply need advice.</p>
          <div className='text-[#fff] space-y-4 pt-5'>
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
        <form onSubmit={handleSubmit}>
          <div data-Aos="zoom-in" data-Aos-delay="200" className='bg-amber-950 border-1 border-amber-950 w-90 rounded-xl'>
          <p className='text-[12px] px-9 py-5'>Fill out the form below to connect with me. I'll get back to you soon to discuss your project or answer any question</p>
          <div className='w-80 m-auto'>
            <div className='flex pb-3'>
            <input type="text" id='firstName' name='firstName' placeholder='First Name' className='w-40 h-8 mr-2 border-1 border-amber-900 rounded-sm outline-0'/>
            <ValidationError 
              prefix="Text" 
              field="text"
              errors={state.errors}
            />
            <input type="text" id='lastName' name='lastName' placeholder='Last Name' className='w-40 h-8 mr-2 border-1 border-amber-900 rounded-sm outline-0'/>
            <ValidationError 
              prefix="Text" 
              field="text"
              errors={state.errors}
            />
          </div>
          <div className='flex'>
            <input type="email" id='email' name='email' placeholder='Email' className='w-40 h-8 mr-2 border-1 border-amber-900 rounded-sm outline-0'/>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
      />
            <input type="number" id='number' name='number' placeholder='Phone Number' className='w-40 h-8 mr-2 border-1 border-amber-900 rounded-sm outline-0'/>
          </div>
          <textarea name="message" id="Message" cols="34" rows="3" placeholder='Message' className='border-1 border-amber-900 rounded-sm mt-4 outline-0'></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
      />
          </div>
          <button type='submit' disabled={state.submitting} formTarget='_blank' className='block bg-orange-500 text-sm my-4 ml-9 mr-3 w-30 h-7 rounded-full hover:bg-amber-700 transition duration-300 ease-linear cursor-pointer'>Submit Message</button>
        </div>
        </form>
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Contacts
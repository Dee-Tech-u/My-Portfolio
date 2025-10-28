import React from 'react'
import { FaArrowRight, FaLaptopCode } from 'react-icons/fa6';
import { WiDirectionDownRight } from 'react-icons/wi';
import { GoCodeSquare } from 'react-icons/go';
import { MdApps } from 'react-icons/md'

const Provide = () => {
  return (
    <>
    <div className='text-white pt-10 px-10'>
      <div className='flex flex-col md:flex-row justify-center items-center'> 
        <div className='w-100 px-5'>
          <WiDirectionDownRight className='text-2xl'/>
          <p className='text-[12px] text-orange-500 font-semibold'>services i provide</p>
          <h1 className='text-2xl'>Innovative solutions in design and development</h1>
        </div>
      <div className='text-[12px] w-100 py-5 px-5'>
        <p>I work businesses to sharp their vision into meaningful digital experience that inspire and perform. From concept to lauch, i focus on creating products that are both beautiful and built to last</p>
        <button type='submit' className='bg-orange-500 text-sm mt-2 mr-3 w-30 h-7 rounded-full hover:bg-amber-700 transition duration-300 ease-linear cursor-pointer'>View All Services</button>
      </div>
      </div>
    </div>
    <div className='flex flex-col lg:flex-row justify-center items-center text-white'>
      <div data-Aos="fade-down-right" data-Aos-delay="200" className='bg-gradient-to-t from-gray-950 from-2% to-amber-950 w-70 border-2 border-orange-500 rounded-2xl p-3 mt-6 hover:scale-105 transition duration-300 ease-linear'>
        <div className='bg-orange-500  text-3xl size-12 pl-2 pt-2 rounded-full'>
          <FaLaptopCode />
        </div>
          <h1>Website Design</h1>
          <p className='text-sm pt-1'>I create visualy stunning, user-friendly websites that capture your brand's identity and engage your audience.</p>
          <button className='flex items-center gap-2 text-orange-500 pt-1 cursor-pointer'>
          Learn More
          <FaArrowRight/>
          </button>
        </div>
        <div data-Aos="zoom-in-down" data-Aos-delay="200" className='bg-gradient-to-t from-gray-950 from-2% to-amber-950 w-70 border-2 border-orange-500 rounded-2xl p-3 mt-6 hover:scale-105 transition duration-300 ease-linear'>
          <div className='bg-orange-500  text-3xl size-12 pl-2 pt-2 rounded-full'>
            <MdApps />
          </div>
          <h1>Application Designs</h1>
          <p className='text-sm pt-1'>Build responsive, intuitive, high-performing interface that can be converted to Apps.</p>
          <button className='flex items-center gap-2 text-orange-500 pt-1 cursor-pointer'>Learn More
          <FaArrowRight/>
          </button>
        </div>
        <div data-Aos="fade-down-left" data-Aos-delay="200" className='bg-gradient-to-t from-gray-950 from-2% to-amber-950 w-70 border-2 border-orange-500 rounded-2xl p-3 mt-6 hover:scale-105 transition duration-300 ease-linear'>
          <div className='bg-orange-500 text-3xl size-12 pl-2 pt-2 rounded-full'>
            <GoCodeSquare />
          </div>
          <h1>Custom Development</h1>
          <p className='text-sm pt-1'>Front-end, i build powerful, scalable digital products using latest technologies.</p>
          <button className='flex items-center gap-2 text-orange-500 pt-1 cursor-pointer'>
          Learn More
          <FaArrowRight/>
          </button>
        </div>
      </div>
    </>
  )
}

export default Provide
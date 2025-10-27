import React from 'react'
import Abouts from '../Components/Abouts'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
    <div className='min-h-screen bg-gray-950 pt-23'>
      <div className='min-h-screen bg-gradient-to-t from-black from-2% to-amber-950'>
        <Abouts />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default About
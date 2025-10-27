import React from 'react'
import Hero from '../Components/Hero';
import Provide from '../Components/Provide';
import Abouts from '../Components/Abouts';
import Contacts from '../Components/Contacts';
import Project from '../Components/Project';

const Home = () => {
  return (
    <>
    <div className='min-h-screen bg-gray-950 pt-23'>
      <div className='min-h-screen bg-gradient-to-br from-black from-2% to-amber-950'>
      <Hero />
      <Provide />
      <Abouts />
      <Project />
      <Contacts />
    </div>
    </div>
    </>
  )
}

export default Home
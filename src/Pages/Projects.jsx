import React from 'react'
import Contacts from '../Components/Contacts'
import Project from '../Components/Project'

const Projects = () => {
  return (
    <>
    <div className='min-h-screen bg-gray-950 pt-23'>
      <div className='min-h-screen bg-gradient-to-t from-black from-2% to-amber-950'>
        <Project />
        <Contacts />
      </div>
    </div>
    </>
  )
}

export default Projects
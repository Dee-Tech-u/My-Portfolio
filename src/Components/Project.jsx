import React from 'react'

const Project = () => {
  return (
    <>
    <div className=' text-green-800 w-full'>
      <div className=''>
        <div className='bg-black text-center pb-3'>
          <h1 className='text-orange-500 text-[12px]'>What i Created</h1>
          <p className='text-3xl'>My Lastest Projects</p>
        </div>
        <div className='flex justify-center items-center gap-1'>
          <div>
            <div>
            <img src="rental.jpg" alt="" className='h-50'/>
          </div>
          <div>
            <img src="energies-viewpoint.png" alt="" className='h-50 w-70'/>
          </div>
          </div>
          <div>
            <div>
              <img src="work.jpg" alt="" className='h-50'/>
            </div>
            <div>
              <img src="work.jpg" alt="" className='h-50'/>
            </div>
          </div>
          <div>
            <div>
            <img src="energies-viewpoint.png" alt="" className='h-50 w-70'/>
          </div>
          <div>
            <img src="rental.jpg" alt="" className='h-50'/>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project
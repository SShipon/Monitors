import React from 'react'
import rocket from '../../../assets/Banner/rocket-white.png'
import wealth from '../../../assets/Banner/wealth-creation (3).png'
export default function Banner() {
  return (
    
    <section className='max-w-screen-xl mx-auto p-4'>

    {/* Top Section of Core Overview */}
    <div className='flex flex-col md:flex-row gap-x-0 md:gap-x-5 m-4 md:m-8 items-center'>
  
      {/* Left Section */}
      <div className='flex-1 md:flex-2/3 mb-4 md:mb-0'>
  
        <div className='flex justify-between p-4 shadow-xl rounded-2xl'>
          <div className='font-bold text-xl pt-8 pl-5 relative'>
            Welcome X
            <p className='absolute bottom-2 text-3xl font-bold'>&rarr;</p>
          </div>
          <div>
            <img src={rocket} alt="rocket" className='rounded-md w-full md:w-[250px]' />
          </div>
        </div>
  
      </div>
  
      {/* Right Section */}
      <div className='flex-1 md:w-1/3 p-4 shadow-xl rounded-2xl'>
  
        <div className='text-white rounded-2xl relative'>
          <img src={wealth} alt="wealth-creation" className='w-full' />
          <div className='absolute left-4 top-2'>
            <h3 className='font-bold text-xl pb-2'>Lorem</h3>
            <p>Lorem ipsum bla bla</p>
            <p className='font-semibold text-lg mt-2'>Read More &rarr;</p>
          </div>
        </div>
  
      </div>
  
    </div>
  
  </section>
  )
}

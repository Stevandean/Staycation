import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import MostPickedRoom from './components/mostPickedRoom'
import RoomType from './components/roomType'
import PublicFacility from './components/publicFacility'
import Review from './components/review'

const index = () => {

  return (
    <>
      <div className="flex">
      
        {/* wrapper konten utama */}
        <div className="w-full overflow-y-auto h-screen"> 
        
          {/* header */}
          <Header />
          {/* akhir header */}

          {/* konten utama */}
          <div className='w-9/12 mx-auto pt-24 pb-20 font-poppins min-h-full'>

            {/* wrapper hotel information */}
            <div className="grid lg:grid-cols-5 min-h-[40rem]">
              <div className="col-span-3 space-y-6">
                {/* hotel tagline */}
                <span className="tracking-wider leading-relaxed text-4xl font-extrabold text-darkBlue">Forget Busy Work,<span className='block'>Start next Vacation</span></span>
                {/* hotel description tagline */}
                <div className="w-3/5 tracking-wider text-gray">
                  <span>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</span>
                </div>
                {/* button show me */}
                <div className="bg-lightBlue rounded-lg py-2 w-40 flex justify-center items-center">
                  <span className='text-white'>Show Me Now</span>
                </div>
                {/* hotel information */}
                <div className="flex flex-row space-x-4 pt-10">
                  <div className="text-sm flex flex-col space-y-2">
                    <img className='w-9 flex justify-center' src="svg/koper.svg" alt="" />
                    <span className='text-darkBlue'>15K <span className='text-gray'>traveler</span></span>
                  </div>
                  <div className="text-sm flex flex-col space-y-2">
                    <img className='w-9 flex justify-center' src="svg/koper.svg" alt="" />
                    <span className='text-darkBlue'>15K <span className='text-gray'>traveler</span></span>
                  </div>
                  <div className="text-sm flex flex-col space-y-2">
                    <img className='w-9 flex justify-center' src="svg/koper.svg" alt="" />
                    <span className='text-darkBlue'>15K <span className='text-gray'>traveler</span></span>
                  </div>
                </div>
              </div>
              {/* Hotel image */}
              <div className="hidden lg:block col-span-2 relative h-[80%]">
                <div className="absolute border-2 border-gray w-full h-full left-[5rem] -bottom-10 rounded-2xl"></div>
                <img className='absolute rounded-3xl rounded-tl-[10rem] w-full h-full object-cover' src="/images/hotel.jpg" alt="" />
              </div>
              {/* <div className="">
                <div className="border-2 border-gray h-[31rem] w-[30rem] translate-x-[5rem] rounded-2xl translate-y-10 absolute"></div>
                <img className='rounded-3xl rounded-tl-[10rem] absolute w-1/3 h-2/3' src="/images/hotel.jpg" alt="" />
              </div> */}
            </div>
            
            {/* most picked */}
            <MostPickedRoom />

            {/* room type */}
            <RoomType />

            {/* public facilities */}
            <PublicFacility />

            {/* review */}
            <Review />

          </div>
          {/* akhir konten */}
          
          {/* wrapper footer */}
          <div className="border-t-2 border-slate-200">
            <div className="w-9/12 mx-auto">
              <Footer />
            </div>
          </div>
          
        </div>
        {/* Akhir wrapper konten */}
      </div>
    </>
  )
}

export default index
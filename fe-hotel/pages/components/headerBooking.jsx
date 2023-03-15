import React from 'react'
import Link from 'next/link'

const headerBooking = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 h-20 z-50 flex border-b-2 bg-white border-slate-300 shadow-lg">
          {/* wrapper */}
          <div className="flex justify-center items-center w-9/12 mx-auto">
            {/* name */}
            <div className="font-poppins text-2xl tracking-wider">
              <span className='text-lightBlue'>Stay<span className='display:inline text-darkBlue'>cation.</span></span>
            </div>
          </div>
      </div>
    </>
  )
}

export default headerBooking
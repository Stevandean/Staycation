import React from 'react'

const review = () => {
  return (
    <div className="grid grid-cols-6 min-h-[40rem] place-items-center">
        {/* images */}
        <div className="col-span-2 relative w-full h-[80%]">
        <div className="absolute border-2 border-gray w-full h-full rounded-2xl"></div>
        <img className='absolute w-full h-full left-[5rem] top-10 rounded-2xl rounded-br-[7rem] object-cover' src="/images/hotel.jpg" alt="" />
        </div>
        <div className="col-span-4">
        <div className="flex flex-col ml-32">
            <h1 className='text-darkBlue font-semibold tracking-wide text-2xl mb-3'>What a great trip with my family and I should try again next time soon ...</h1>
            <span className='text-gray text-sm mb-10'>Stevan, Frontend Development</span>
            <button className='flex justify-center bg-lightBlue text-white w-44 py-2 rounded-lg'>Read their review</button>
        </div>
        </div>
    </div>
  )
}

export default review
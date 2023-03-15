import React from 'react'

const publicFacility = () => {
    return (
        <div className="mb-24">
                {/* title */}
                <h1 className='text-darkBlue text-2xl font-semibold tracking-wide mb-5'>Public Fasility</h1>
                {/* wrapper all card */}
                <div className="grid grid-cols-4 gap-x-5">
                    {/* wrapper public facilities */}
                    <div className="max-h-52">
                        <img className='w-full h-full object-cover rounded-2xl' src="/images/fasilitas1.jpg" alt="" />
                        <h1 className='font-medium text-xl text-darkBlue mt-3'>ini judul</h1>
                    </div>
                    {/* wrapper public facilities */}
                    <div className="max-h-52">
                        <img className='w-full h-full object-cover rounded-2xl' src="/images/fasilitas2.jpg" alt="" />
                        <h1 className='font-medium text-xl text-darkBlue mt-3'>ini judul</h1>
                    </div>
                    {/* wrapper public facilities */}
                    <div className="max-h-52">
                        <img className='w-full h-full object-cover rounded-2xl' src="/images/fasilitas3.jpg" alt="" />
                        <h1 className='font-medium text-xl text-darkBlue mt-3'>ini judul</h1>
                    </div>
                    {/* wrapper public facilities */}
                    <div className="max-h-52">
                        <img className='w-full h-full object-cover rounded-2xl' src="/images/fasilitas4.jpg" alt="" />
                        <h1 className='font-medium text-xl text-darkBlue mt-3'>ini judul</h1>
                    </div>

                </div>
        </div>
    )
}

export default publicFacility
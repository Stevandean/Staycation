import React from 'react'

const mostPickedRoom = () => {
    return (
        <div className="mb-24">
                {/* most picked room */}
                <h1 className='text-darkBlue text-2xl font-semibold tracking-wide mb-5'>Most Picked</h1>
                {/* wrapper all room */}
                <div className="grid grid-cols-3 gap-x-14 max-h-[30rem]">
                    
                    {/* wrapper room card */}
                    <div className="relative flex">
                        {/* price */}
                        <div className='absolute bg-pink rounded-bl-2xl rounded-tr-2xl right-0 px-8 py-1.5'>
                            <span className='text-white font-semibold text-lg'>$50 <span className='font-thin tracking-wide'>per night</span></span>
                        </div>
                        {/* title and description */}
                        <div className='absolute flex flex-col bottom-4 left-6 text-white'>
                            <span className='font-bold text-xl'>ini judul</span>
                            <span className='font-thin tracking-wide text-sm'>ini deskripsi</span>
                        </div>
                        <img className='rounded-2xl h-full w-full object-cover' src="/images/room1.jpg" alt="" />
                    </div>

                    {/* wrapper room card */}
                    <div className="relative flex">
                        {/* price */}
                        <div className='absolute bg-pink rounded-bl-2xl rounded-tr-2xl right-0 px-8 py-1.5'>
                            <span className='text-white font-semibold text-lg'>$50 <span className='font-thin tracking-wide'>per night</span></span>
                        </div>
                        {/* title and description */}
                        <div className='absolute flex flex-col bottom-4 left-6 text-white'>
                            <span className='font-bold text-xl'>ini judul</span>
                            <span className='font-thin tracking-wide text-sm'>ini deskripsi</span>
                        </div>
                        <img className='rounded-2xl h-full w-full object-cover' src="/images/room2.jpg" alt="" />
                    </div>

                    {/* wrapper room card */}
                    <div className="relative flex">
                        {/* price */}
                        <div className='absolute bg-pink rounded-bl-2xl rounded-tr-2xl right-0 px-8 py-1.5'>
                            <span className='text-white font-semibold text-lg'>$50 <span className='font-thin tracking-wide'>per night</span></span>
                        </div>
                        {/* title and description */}
                        <div className='absolute flex flex-col bottom-4 left-6 text-white'>
                            <span className='font-bold text-xl'>ini judul</span>
                            <span className='font-thin tracking-wide text-sm'>ini deskripsi</span>
                        </div>
                        <img className='rounded-2xl h-full w-full object-cover' src="/images/room3.jpg" alt="" />
                    </div>
                    
                </div>
        </div>
    )
}

export default mostPickedRoom
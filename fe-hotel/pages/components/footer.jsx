import React from 'react'

const footer = () => {
  return (
    <>
        {/* Footer */}
        <footer className="text-darkBlue justify-center py-10 font-poppins">
            {/* wrapper name and tagline hotel */}
            <div className="grid grid-cols-5">
                {/* name and tagline hotel */}
                <div className="col-span-2">
                    <h1 className='text-lightBlue text-xl font-medium tracking-wider mb-4'>Stay<span className='text-darkBlue'>cation.</span></h1>
                    <p className='text-gray text-sm tracking-wider'>We kaboom your beauty holiday<br></br>instantly and memorable.</p>
                </div>
                {/* for beginners */}
                <div className="flex flex-col">
                    <h1 className='text-xl font-medium text-darkBlue mb-4'>For beginners</h1>
                    <span className='text-sm text-gray tracking-wider'>New Account</span>
                    <span className='text-sm text-gray tracking-wider'>Start Booking a Room</span>
                    <span className='text-sm text-gray tracking-wider'>Use Payment</span>
                </div>
                {/* explore us */}
                <div className="flex flex-col">
                    <h1 className='text-xl font-medium text-darkBlue mb-4'>Explore Us</h1>
                    <span className='text-sm text-gray tracking-wider'>New Account</span>
                    <span className='text-sm text-gray tracking-wider'>Start Booking a Room</span>
                    <span className='text-sm text-gray tracking-wider'>Use Payment</span>
                </div>
                {/* connect us */}
                <div className="flex flex-col">
                    <h1 className='text-xl font-medium text-darkBlue mb-4'>Connect Us</h1>
                    <span className='text-sm text-gray tracking-wider'>New Account</span>
                    <span className='text-sm text-gray tracking-wider'>Start Booking a Room</span>
                    <span className='text-sm text-gray tracking-wider'>Use Payment</span>
                </div>
            </div>
            <div className="w-full flex justify-center mt-10">
                <span className='text-gray text-sm mx-auto'>Copyright 2022 • All rights reserved • Staycation</span>
            </div>
        </footer>
    </>
  )
}

export default footer
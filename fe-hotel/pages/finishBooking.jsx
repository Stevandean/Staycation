import React from 'react'
import HeaderBooking from './components/headerBooking'
import Footer from './components/footer'
import Link from 'next/link'

const finishBooking = () => {
    return (
        <>
        <div className="flex">
            {/* wrapper konten utama */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <HeaderBooking />
                {/* akhir header */}

                {/* konten utama */}
                <div className='w-9/12 mx-auto pt-20 pb-20 font-poppins min-h-full'>

                    {/* header booking information */}
                    <div className="flex flex-col justify-center items-center gap-y-2 mb-10">
                        <h1 className='text-2xl font-semibold text-darkBlue'>Yay! Completed</h1>
                    </div>

                    {/* finish booking images */}
                    <div className="flex justify-center items-center mb-10">
                        <img className='w-3/12' src="/images/finishBooking.png" alt="finish booking" />
                    </div>

                    {/* notes finish booking */}
                    <p className='text-center text-gray mb-16 tracking-widest'>We will inform you via email later <br />once transaction has ben accepted</p>

                    {/* button back */}
                    <div className="flex justify-center">
                        <Link href={'/'} className='bg-lightBlue text-white py-2 px-14 rounded-lg'>Back to Home</Link>
                    </div>

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

export default finishBooking
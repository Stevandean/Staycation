import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

const roomDetail = () => {
    return (
        <>
        <div className="flex">
        
        {/* wrapper konten utama */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <Header />
                {/* akhir header */}

                {/* konten utama */}
                <div className='w-9/12 mx-auto pt-14 pb-20 font-poppins min-h-full'>

                    {/* wrapper header room details */}
                    <div className="relative mb-8">
                        {/* Breadcrumbs  */}
                        <nav class="w-full rounded-md absolute flex items-center h-full">
                            <ol class="list-reset flex">
                                <li>
                                    <a href="#" class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Home</a>
                                </li>
                                <li>
                                    <span class="mx-2 text-neutral-500">/</span>
                                </li>
                                <li class="text-neutral-500">Room Details</li>
                            </ol>
                        </nav>
                        {/*room title  */}
                        <div className="flex justify-center text-center">
                            <div className="flex flex-col">
                                <h1 className='text-2xl font-semibold mb-2'>Fabulous Room</h1>
                                <span className='text-sm text-gray tracking-widest'>201 - 301</span>
                            </div>
                        </div>
                    </div>

                    {/* room image */}
                    <div className="grid grid-cols-5 grid-rows-2 gap-x-3">
                        <div className="col-span-3 row-span-2 max-h-96 min-w-full">
                            <img className='w-full h-full object-cover rounded-2xl' src="/images/room1.jpg" alt="" />
                        </div>
                        <div className="col-span-2 gap-y-1">
                            <div className="col-span-3 max-h-48 min-w-full">
                                <img className='w-full h-full object-cover rounded-2xl' src="/images/room1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-span-2 gap-y-1">
                            <div className="col-span-3 max-h-48 min-w-full">
                                <img className='w-full h-full object-cover rounded-2xl' src="/images/room1.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* room description and booking form */}
                    <div className="grid grid-cols-5">
                        <div className="col-span-3"></div>
                        <div className="col-span-2"></div>
                    </div>

                </div>
                {/* akhir konten */}
                    
                {/* footer */}
                <div className="border-t-2 border-slate-200">
                    <div className="w-9/12 mx-auto">
                        <Footer />
                    </div>
                </div>
                {/* akhir footer */}
                
            </div>
            {/* Akhir wrapper konten */}
        </div>
        </>

    )
}

export default roomDetail
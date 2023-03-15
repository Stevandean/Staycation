import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Header from './components/header'
import Footer from './components/footer'
import RoomType from './components/roomType';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detailTipeKamar = () => {

    // deklarasi router
    const router = useRouter()
    const { nama_tipe_kamar } = router.query

    // ini state
    const [dataTipeKamar, setDataTipeKamar] = useState ([])
    const [tanggalCheckin, setTanggalCheckin] = useState ()
    const [tanggalCheckout, setTanggalCheckout] = useState ()
    const [jumlahKamar, setJumlahKamar] = useState (0)

    const getTipeKamar = () => {
        axios.get (BASE_URL + '/tipe_kamar/' + nama_tipe_kamar)
        .then (res => {
            setDataTipeKamar (res.data.tipe_kamar)
        })
        .catch (err => {
            console.log(err.message);
        })
        console.log(BASE_URL + '/tipe_kamar/' + nama_tipe_kamar);
    }

    const continueBooking = () => {
        localStorage.setItem ('tanggalCheckin', tanggalCheckin)
        localStorage.setItem ('tanggalCheckout', tanggalCheckout)
        localStorage.setItem ('jumlahKamar', jumlahKamar)
        localStorage.setItem ('idTipeKamar', dataTipeKamar.id_tipe_kamar)
        localStorage.setItem ('namaTipeKamar', dataTipeKamar.nama_tipe_kamar)
        router.push ('/booking')
    }

    const editJumlahKamar = (e) => {
        if (e === 'kurang') {
            setJumlahKamar (jumlahKamar - (1))
        } else if (e === 'tambah') {
            setJumlahKamar (jumlahKamar + (1))
        } else {
            console.log('gagal edit jumlah kamar');
        }
    }

    useEffect (() => {
        if (!router.isReady) return;
        getTipeKamar ()
    }, [router.query.nama_tipe_kamar, router.isReady])

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
                            <nav className="w-full rounded-md absolute flex items-center h-full">
                                <ol className="list-reset flex">
                                    <li>
                                        <a href="/" className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Home</a>
                                    </li>
                                    <li>
                                        <span className="mx-2 text-neutral-500">/</span>
                                    </li>
                                    <li className="text-neutral-500">{nama_tipe_kamar}</li>
                                </ol>
                            </nav>
                            {/*room title  */}
                            <div className="flex justify-center text-center">
                                <div className="flex flex-col">
                                    <h1 className='text-3xl font-semibold mb-2'>{nama_tipe_kamar}</h1>
                                    <span className='text-md text-gray tracking-widest'>201 - 301</span>
                                </div>
                            </div>
                        </div>

                        {/* room image */}
                        {/* <div className="grid grid-cols-5 grid-rows-2 gap-x-3">
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
                        </div> */}

                        {/* <div className="bg-red-300 grid grid-cols-2 gap-x-2 min-h-fit max-h-80">
                            <div className="h-52">
                                <img className='max-h-fit object-cover' src="/images/room1.jpg" alt="" />
                            </div>
                            <div className="space-y-2 h-full w-full">
                                <img className='h-52 w-full object-cover rounded-2xl' src="/images/room1.jpg" alt="" />
                                <img className='h-52 w-full object-cover rounded-2xl' src="/images/room1.jpg" alt="" />
                                </div>
                            </div> */}

                        <div className="mb-12">
                            <img className='h-80 w-full object-cover rounded-2xl' src={`http://localhost:8080/image/` + dataTipeKamar.foto} alt="" />
                        </div>

                        {/* room description and booking form */}
                        <div className="grid grid-cols-2 gap-x-10 mb-20">
                            {/* room description */}
                            <div className="">
                                <h1 className='text-xl font-semibold'>Room description</h1>
                                <p className='text-sm'>{dataTipeKamar.deskripsi}</p>
                            </div>
                            {/* booking form and room price */}
                            <div className="border-2 border-gray rounded-lg justify-center items-center py-10 px-20">
                                <h1 className='text-lg font-semibold mb-2'>Start Booking</h1>

                                {/* room price */}
                                <div className="mb-5">
                                    <span className='text-3xl font-semibold text-[#1ABC9C]'>IDR {dataTipeKamar.harga}
                                        <span className='display:inline font-thin text-gray'> per night</span>
                                    </span>
                                </div>
                                
                                {/* booking form */}
                                {/* many nights */}
                                <h1 className='mb-1.5'>How long you will stay?</h1>
                                <div className="flex items-center mb-5">
                                    <input value={tanggalCheckin} onChange= {(e) => setTanggalCheckin (e.target.value)} name="start" type="date" className="border text text-sm rounded-lg w-full p-2.5" placeholder="Select date start" />
                                    <span className="mx-4 text-gray-500">to</span>
                                    <input value={tanggalCheckout} onChange={(e) => setTanggalCheckout  (e.target.value)} name="start" type="date" className="border text text-sm rounded-lg w-full p-2.5" placeholder="Select date start" />
                                </div>

                                {/* number of rooms */}
                                <h1 className='mb-1.5'>How many room do you want</h1>
                                <div className="flex w-full h-10 font-semibold text-xl mb-5">
                                    {/* button minus */}
                                    {(() => {
                                        if (jumlahKamar <= 0) {
                                            return (
                                                <button disabled onClick={() => editJumlahKamar('kurang')} className='bg-red-600 w-14 rounded-l-lg text-white cursor-not-allowed'>-</button>
                                            )
                                        } else if (jumlahKamar > 0) {
                                            return (
                                                <button onClick={() => editJumlahKamar('kurang')} className='bg-red-600 w-14 rounded-l-lg text-white'>-</button>
                                            )
                                        }
                                    })()}
                                    {/* number of room indicator */}
                                    {(() => {
                                        if (jumlahKamar <= 0) {
                                            return (
                                                <h1 className='w-full flex justify-center items-center font-normal tracking-widest bg-inputBg cursor-default'>0</h1>
                                            )
                                        } else if (jumlahKamar > 0) {
                                            return  (
                                                <h1 className='w-full flex justify-center items-center font-normal tracking-widest bg-inputBg cursor-default'>{jumlahKamar} Room</h1>
                                            )
                                        }
                                    })()}
                                    {/* button plus */}
                                    <button onClick={() => editJumlahKamar('tambah')} className='bg-green-600 w-14 rounded-r-lg text-white'>+</button>
                                </div>

                                {/* total harga */}
                                <div className="mb-5">
                                    <span className='text-gray'>You will pay 
                                        <span className='text-darkBlue'> IDR {dataTipeKamar.harga * jumlahKamar}
                                            <span className='text-gray'> per
                                                <span className='text-darkBlue'> {jumlahKamar} night</span>
                                            </span>
                                        </span>
                                    </span>
                                </div>

                                {/* booking button */}
                                <button onClick={() => continueBooking()} className='bg-lightBlue py-2 px-7 text-white rounded-lg w-full'>Continue to book</button>

                            </div>
                        </div>

                        <RoomType />

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

export default detailTipeKamar
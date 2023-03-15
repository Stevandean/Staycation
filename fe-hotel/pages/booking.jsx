import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HeaderBooking from './components/headerBooking'
import Footer from './components/footer'
import { useRouter } from 'next/router';
import Link from 'next/link';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const booking = () => {
    
    // deklarasi router
    const router = useRouter()

    // ini state
    const [datTipeKamar, setDataTipeKamar] = useState ([])
    const [nomorPesanan, setNomorPesanan] = useState ('')
    const [namaPemesan, setNamaPemesan] = useState ('')
    const [emailPemesan, setEmailPemesan] = useState ('')
    const [namaTamu, setNamaTamu] = useState ('')

    const getTipeKamar = () => {

        const namaTipeKamar = localStorage.getItem ('namaTipeKamar')

        axios.get(BASE_URL + `/tipe_kamar/` + namaTipeKamar)
        .then (res => {
            setDataTipeKamar (res.data.tipe_kamar)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const handleSave = (e) => {
        const tanggalCheckin = localStorage.getItem ('tanggalCheckin')
        const tanggalCheckout = localStorage.getItem ('tanggalCheckout')
        const jumlahKamar = localStorage.getItem ('jumlahKamar')
        const idTipeKamar = localStorage.getItem ('idTipeKamar')
        // e.preventDefault()
        let form = {
            nomor_pemesanan : nomorPesanan,
            nama_pemesan : namaPemesan,
            email_pemesan : emailPemesan,
            nama_tamu : namaTamu,
            jumlah_kamar : jumlahKamar,
            tgl_pemesanan : tanggalCheckin,
            tgl_check_in : tanggalCheckin,
            tgl_check_out : tanggalCheckout,
            id_tipe_kamar : idTipeKamar,
            status_pemesanan : 'baru'
        }
        axios.post (BASE_URL + `/pemesanan`, form)
        .then (res => {
            console.log(res.data.message);
            console.log('berhasil tambah pesanan');
            router.push ('/finishBooking')
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    useEffect (() => {
        getTipeKamar ()
    }, [])

    return (
        <>
        <div className="flex">
        
            {/* wrapper konten utama */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <HeaderBooking />
                {/* akhir header */}
    
                {/* konten utama */}
                <div className='w-9/12 mx-auto pt-14 pb-20 font-poppins min-h-full'>
    
                    {/* header booking information */}
                    <div className="flex flex-col justify-center items-center gap-y-2 mb-10">
                        <h1 className='text-2xl font-semibold text-darkBlue'>Booking Information</h1>
                        <span className='text-gray text-sm tracking-widest'>Please fill up the blank fields bellow</span>
                    </div>

                    {/* room information and booking form */}
                    <div className="grid grid-cols-11 gap-x-20 mb-7">
                        {/* room information */}
                        <div className="col-span-5 py-10 flex flex-col justify-center">
                            
                            {/* wrapper room image */}
                            <div className="h-64 mb-4">
                                <img className='w-full h-full object-cover rounded-lg' src={`http://localhost:8080/image/` + datTipeKamar.foto} alt="" />
                            </div>
                            
                            {/* room information */}
                            <div className="grid grid-cols-2 text-darkBlue">
                                <h1 className='tracking-widest'>Room Title</h1>
                                <span className='text-end'>IDR 20000
                                    <span className='text-gray'> per
                                        <span className='text-darkBlue'> 2 night</span>
                                    </span>
                                </span>
                            </div>

                        </div>
                        <div className="flex justify-center items-center border-l"></div>

                        {/* input form */}
                        <div className="col-span-5 py-7">
                            <form className='space-y-5' action="POST" onSubmit={handleSave}>
                                <div className="">
                                    <h1 className='mb-1.5 tracking-wider'>Nomor Pesanan</h1>
                                    <input value={nomorPesanan} onChange={(e) => setNomorPesanan (e.target.value)} placeholder='01' className='bg-inputBg w-2/3 p-2 rounded-lg placeholder:px-1' type="text" />
                                </div>
                                <div className="">
                                    <h1 className='mb-1.5 tracking-wider'>Nama Pemesan</h1>
                                    <input value={namaPemesan} onChange={(e) => setNamaPemesan (e.target.value)} placeholder='Your name' className='bg-inputBg w-2/3 p-2 rounded-lg placeholder:px-1' type="text" />
                                </div>
                                <div className="">
                                    <h1 className='mb-1.5 tracking-wider'>Email Pemesan</h1>
                                    <input value={emailPemesan} onChange={(e) => setEmailPemesan (e.target.value)} placeholder='staycation@staycation.co.id' className='bg-inputBg w-2/3 p-2 rounded-lg placeholder:px-1' type="text" />
                                </div>
                                <div className="">
                                    <h1 className='mb-1.5 tracking-wider'>Nama Tamu</h1>
                                    <input value={namaTamu} onChange={(e) => setNamaTamu (e.target.value)} placeholder='James' className='bg-inputBg w-2/3 p-2 rounded-lg placeholder:px-1' type="text" />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* button booking */}
                    <div className="gap-y-2 flex flex-col items-center">
                        <button onClick={() => handleSave()} className='bg-lightBlue text-white py-2 rounded-lg w-2/6'>Continue to Book</button>
                        <Link href={'/'} className='bg-inputBg text-darkBlue py-2 rounded-lg w-2/6 text-center'>Cancel</Link>
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

export default booking
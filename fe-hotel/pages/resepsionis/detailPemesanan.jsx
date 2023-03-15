import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header'
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detailPemesanan = () => {

    // deklarasi router
    const router = useRouter()

    // ini state
    const [dataDetailPemesanan, setDataDetailPemesanan] = useState ([])

    const getDetailPemesanan = () => {
        axios.get (BASE_URL + `/detail_pemesanan`)
        .then (res => {
            setDataDetailPemesanan (res.data.detail_pemesanan)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const isLogged = () => {
        if (localStorage.getItem ('resepsionis') === null || localStorage.getItem ('tokenResepsionis') === null) {
            router.push ('/resepsionis/login')
        }
    }

    useEffect (() => {
        getDetailPemesanan ()
        isLogged ()
    }, [])

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

                    <div className="shadow-md p-5 rounded-lg">
                        <h1 className='text-xl font-bold mb-10'>Daftar Detail Pemesanan</h1>
                        <table className='w-full table-fixed'>
                            <thead>
                                <tr className='bg-slate-300 border-2 border-slate-300'>
                                    <th className='py-3'>ID Pemesanann</th>
                                    <th>Id Kamar</th>
                                    <th>Tanggal Akses</th>
                                    <th>Harga</th>
                                    {/* <th>Aksi</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {dataDetailPemesanan.map ((item, index) => (
                                    <tr key={index + 1}>
                                        <td className='pl-3 py-3 border-2 border-slate-300'>{item.id_pemesanan}</td>
                                        <td className='pl-3 border-2 border-slate-300'>{item.id_kamar}</td>
                                        <td className='pl-3 border-2 border-slate-300'>{item.tgl_akses}</td>
                                        <td className='pl-3 border-2 border-slate-300'>{item.harga}</td>
                                        {/* <td className='pl-3 border-2 border-slate-300'>
                                            <div className="flex justify-center items-center gap-x-3">
                                                <button className="bg-red-300 px-5 py-1.5 rounded-lg">Edit</button>
                                                <button className="bg-red-300 px-5 py-1.5 rounded-lg">Delete</button>
                                            </div>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        
                </div>
                {/* akhir konten */}
                
            </div>
            {/* Akhir wrapper konten */}
        </div>
        </>

    )
}

export default detailPemesanan
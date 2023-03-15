import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Header from './components/header'
import ModalStatus from './components/modalStatus';
import { globalState } from '@/context/context';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const index = () => {

    // deklarasi router
    const router = useRouter()
    
    // state modal
    const [showModalStatus, setShowModalStatus] = useState (false)

    // ini state
    const [dataPemesanan, setDataPemesanan] = useState ([])
    const [status, setStatus] = useState ('')
    const [idPemesanan, setIdPemesanan] = useState ('')
    const [emailPesanan, setEmailPesanan] = useState ('')

    const getPemesanan = () => {
        axios.get (BASE_URL + `/pemesanan`)
        .then (res => {
            setDataPemesanan (res.data.pemesanan)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const editModalStatus = (selectedItem) => {
        setShowModalStatus (true)
        setIdPemesanan (selectedItem.id_pemesanan)
        setStatus (selectedItem.status_pemesanan)
    }

    const getPesananEmail = () => {
        let form = {
            email : emailPesanan
        }
        axios.post (BASE_URL + `/pemesanan/email`, form)
        .then (res => {
            if (emailPesanan) {
                setDataPemesanan (res.data.pemesanan)
                console.log('berhasil');
            } else {
                getPemesanan()
            }
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
        getPemesanan ()
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
                            <div className="mb-10 flex justify-between">
                                <h1 className='text-xl font-bold items-center flex'>Daftar Pemesanan</h1>
                                <div className="flex justify-end shadow-md">
                                    <input name={emailPesanan} onChange={(e) => setEmailPesanan (e.target.value)} className='px-3 py-1.5 focus:outline-gray shadow-inner rounded-l-lg placeholder:text-gray' placeholder='Search by email' type="text" />
                                    <button className='bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] text-darkBlue py-1.5 px-3 rounded-r-lg' onClick={() => getPesananEmail()}>Search</button>
                                </div>
                            </div>
                            <table className='w-full table-fixed'>
                                <thead>
                                    <tr className='bg-slate-300 border-2 border-slate-300'>
                                        <th className='py-3 w-[5%]'>ID</th>
                                        <th>Nama Tamu</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th className='w-[10%]'>Total Kamar</th>
                                        <th className='w-[10%]'>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataPemesanan.map ((item, index) => (
                                        <tr key={index + 1}>
                                            <td className='pl-3 py-3 border-2 border-slate-300'>{item.id_pemesanan}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.nama_tamu}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.email_pemesan}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.status_pemesanan}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.jumlah_kamar}</td>
                                            <td className='pl-3 border-2 border-slate-300'>
                                                <div className="flex justify-center items-center">
                                                    <button onClick={() => editModalStatus(item)} className="bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] px-5 py-1.5 rounded-lg">Edit</button>
                                                </div>
                                            </td>
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

            <globalState.Provider value={{ showModalStatus, setShowModalStatus, dataPemesanan, setDataPemesanan, idPemesanan, setIdPemesanan, status, setStatus }}>
                <ModalStatus />
            </globalState.Provider>
        </>
    )    
}

export default index
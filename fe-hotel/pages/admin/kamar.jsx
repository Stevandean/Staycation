import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header'
import ModalKamar from './components/modalKamar';
import ModalDelete from './components/modalDelete';
import { globalState } from '@/context/context';
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const kamar = () => {

    // deklarasi router
    const router = useRouter()

    // state modal
    const [showModalKamar, setShowModalKamar] = useState (false)
    const [showModalDelete, setShowModalDelete] = useState (false)
    
    // ini state
    const [dataKamar, setDataKamar] = useState ([])
    const [action, setAction] = useState ('')
    const [nomorKamar, setNomorKamar] = useState ('')
    const [tipeKamar, setTipeKamar] = useState ('')
    const [idKamar, setIdKamar] = useState ('')

    const getKamar = () => {
        axios.get (BASE_URL + `/kamar`)
        .then (res => {
            setDataKamar (res.data.kamar)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const addModalKamar = () => {
        setShowModalKamar (true)
        setAction ('insert')
        setNomorKamar ('')
        setTipeKamar ('')
    }

    const editModalKamar = (selectedItem) => {
        setShowModalKamar (true)
        setAction ('update')
        setIdKamar (selectedItem.id_kamar)
        setNomorKamar (selectedItem.nomor_kamar)
        setTipeKamar (selectedItem.tipe_kamar?.nama_tipe_kamar)
    }

    const deleteModalKamar = (selectedId) => {
        setShowModalDelete  (true)
        setAction ('deleteKamar')
        setIdKamar (selectedId)
    }

    const isLogged = () => {
        if (localStorage.getItem ('admin') === null || localStorage.getItem ('tokenAdmin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
        getKamar ()
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
                            <h1 className='text-xl font-bold mb-3'>Daftar Kamar</h1>
                            <button onClick={() => addModalKamar()} className='mb-10 bg-green-500 py-2 px-5 rounded-lg'>Tambah Tipe Kamar</button>
                            <table className='w-full table-fixed'>
                                <thead>
                                    <tr className='bg-slate-300 border-2 border-slate-300'>
                                        <th className='py-3'>ID</th>
                                        <th>Nomor Kamar</th>
                                        <th>Tipe Kamar</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataKamar.map ((item, index) => (
                                        <tr key={index + 1}>
                                            <td className='pl-3 py-3 border-2 border-slate-300'>{item.id_kamar}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.nomor_kamar}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.tipe_kamar?.nama_tipe_kamar}</td>
                                            <td className='pl-3 border-2 border-slate-300'>
                                                <div className="flex justify-center items-center gap-x-3">
                                                    <button onClick={() => editModalKamar(item)} className="bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] px-5 py-1.5 rounded-lg">Edit</button>
                                                    <button onClick={() => deleteModalKamar(item.id_kamar)} className="bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] px-5 py-1.5 rounded-lg">Delete</button>
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

            <globalState.Provider value={{ showModalKamar, setShowModalKamar, dataKamar, setDataKamar, action, setAction, idKamar, setIdKamar, nomorKamar, setNomorKamar, tipeKamar, setTipeKamar }}>
                <ModalKamar />
            </globalState.Provider>
            <globalState.Provider value={{ showModalDelete, setShowModalDelete, action, setAction, dataKamar, setDataKamar, idKamar, setIdKamar }}>
                <ModalDelete />
            </globalState.Provider>
        </>
    )    
}

export default kamar
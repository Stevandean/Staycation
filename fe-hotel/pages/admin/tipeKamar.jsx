import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './components/header'
import ModalTipeKamar from './components/modalTipeKamar';
import ModalDelete from './components/modalDelete';
import { globalState } from '@/context/context';
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const tipeKamar = () => {

    // deklarasi router
    const router = useRouter()

    // state modal
    const [showModalTipeKamar, setShowModalTipeKamar] = useState (false)
    const [showModalDelete, setShowModalDelete] = useState (false)

    // ini state
    const [dataTipeKamar, setDataTipeKamar] = useState ([])
    const [action, setAction] = useState ('')
    const [idTipeKamar, setIdTipeKamar] = useState ('')
    const [namaTipeKamar, setNamaTipeKamar] = useState ('')
    const [harga, setHarga] = useState ('')
    const [deskripsi, setDeskripsi] = useState ('')
    const [foto, setFoto] = useState (null)

    const getTipeKamar = () => {
        axios.get (BASE_URL + `/tipe_kamar`)
        .then (res => {
            setDataTipeKamar (res.data.tipe_kamar)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const addModalTipeKamar = () => {
        setShowModalTipeKamar (true)
        setAction ('insert')
        setNamaTipeKamar ('')
        setHarga ('')
        setDeskripsi ('')
        setFoto (null)
    }

    const editModalTipeKamar = (selectedItem) => {
        setShowModalTipeKamar (true)
        setAction ('update')
        setIdTipeKamar (selectedItem.id_tipe_kamar)
        setNamaTipeKamar (selectedItem.nama_tipe_kamar)
        setHarga (selectedItem.harga)
        setDeskripsi (selectedItem.deskripsi)
        setFoto (null)
    }

    const deleteModalTipeKamar = (selectedId) => {
        setShowModalDelete (true)
        setAction ('deleteTipeKamar')
        setIdTipeKamar (selectedId)
    }

    const isLogged = () => {
        if (localStorage.getItem ('admin') === null || localStorage.getItem ('tokenAdmin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
        getTipeKamar()
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
                            <h1 className='text-xl font-bold mb-3'>Daftar Tipe Kamar</h1>
                            <button onClick={() => addModalTipeKamar()} className='mb-10 bg-green-500 py-2 px-5 rounded-lg'>Tambah Tipe Kamar</button>
                            <table className='w-full table-fixed'>
                                <thead>
                                    <tr className='bg-slate-300 border-2 border-slate-300'>
                                        <th className='py-3'>Nama Tipe</th>
                                        <th>Harga</th>
                                        <th>Deskripsi</th>
                                        <th>Foto</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataTipeKamar.map ((item, index) => (
                                        <tr key={index + 1}>
                                            <td className='p-3 py-3 border-2 border-slate-300'>{item.nama_tipe_kamar}</td>
                                            <td className='p-3 border-2 border-slate-300'>{item.harga}</td>
                                            <td className='p-3 border-2 border-slate-300'>{item.deskripsi}</td>
                                            <td className='p-3 border-2 border-slate-300'>
                                                <img className='w-full' src={`http://localhost:8080/image/` + item.foto} alt="" />
                                            </td>
                                            <td className='p-3 border-2 border-slate-300'>
                                                <div className="flex justify-center items-center gap-x-3">
                                                    <button onClick={() => editModalTipeKamar(item)} className="bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] px-5 py-1.5 rounded-lg">Edit</button>
                                                    <button onClick={() => deleteModalTipeKamar(item.id_tipe_kamar)} className="bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] px-5 py-1.5 rounded-lg">Delete</button>
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

            <globalState.Provider value={{ showModalTipeKamar, setShowModalTipeKamar, dataTipeKamar, setDataTipeKamar, action, setAction, idTipeKamar, setIdTipeKamar, namaTipeKamar, setNamaTipeKamar, harga, setHarga, deskripsi, setDeskripsi, foto, setFoto }}>
                <ModalTipeKamar />
            </globalState.Provider>

            <globalState.Provider value={{ showModalDelete, setShowModalDelete, action, setAction, dataTipeKamar, setDataTipeKamar, idTipeKamar, setIdTipeKamar }}>
                <ModalDelete />
            </globalState.Provider>
        </>
    )    
}

export default tipeKamar
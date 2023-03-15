import React, { useContext, useEffect } from 'react'
import { globalState } from '@/context/context'
import axios from 'axios'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalTipeKamar = () => {

    // state modal
    const {showModalTipeKamar, setShowModalTipeKamar} = useContext (globalState)

    // ini state
    const {dataTipeKamar, setDataTipeKamar} = useContext (globalState)
    const {action, idTipeKamar} = useContext (globalState)
    const {namaTipeKamar, setNamaTipeKamar} = useContext (globalState)
    const {harga, setHarga} = useContext (globalState)
    const {deskripsi, setDeskripsi} = useContext (globalState)
    const {foto, setFoto} = useContext (globalState)

    const getTipeKamar = () => {
        axios.get (BASE_URL + `/tipe_kamar`)
        .then (res => {
            setDataTipeKamar (res.data.tipe_kamar)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        let form = new FormData()
        form.append ('nama_tipe_kamar', namaTipeKamar)
        form.append ('harga', harga)
        form.append ('deskripsi', deskripsi)
        form.append ('foto', foto)

        if (action === 'insert') {
            axios.post (BASE_URL + `/tipe_kamar`, form)
            .then (res => {
                console.log(res.data.message);
                setShowModalTipeKamar (false)
                getTipeKamar()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (action === 'update') {
            axios.put (BASE_URL + `/tipe_kamar/${idTipeKamar}`, form)
            .then (res => {
                console.log(res.data.message);
                setShowModalTipeKamar (false)
                getTipeKamar()
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    const handleFile = (e) => {
        e.preventDefault()
        setFoto (e.target.files[0])
    }

    useEffect (() => {
        getTipeKamar()
    }, [])

    return (
        <>
        {showModalTipeKamar ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#212437] outline-none focus:outline-none">
                            <form 
                            action='POST' onSubmit={handleSave}
                            >
                                {/*header Modal*/}
                                <div className="flex justify-center p-5 border-b border-solid border-slate-500 rounded-t">
                                    {(() => {
                                        if (action === 'insert') {
                                            return (
                                                <>    
                                                    <h3 className="text-3xl font-semibold text-white">
                                                        Tambah Tipe Kamar
                                                    </h3>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>    
                                                    <h3 className="text-3xl font-semibold text-white">
                                                        Edit Tipe Kamar
                                                    </h3>
                                                </>
                                            )
                                        }
                                    })()}
                                </div>

                                {/*Wrapper Input Field*/}
                                <div className="relative p-6 flex flex-col space-y-5 text-white text-lg">

                                    {/* Input */}
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Nama Tipe Kamar</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="text"
                                            value={namaTipeKamar}
                                            onChange={(e) => setNamaTipeKamar((e.target.value))}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Harga</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="number"
                                            value={harga}
                                            onChange={(e) => setHarga((e.target.value))}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Deskripsi</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="text"
                                            value={deskripsi}
                                            onChange={(e) => setDeskripsi((e.target.value))}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Foto</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="file"
                                            onChange={(e) => handleFile(e)}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                                    <button
                                    className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={ () => setShowModalTipeKamar(false)}>
                                    Close
                                    </button>

                                    {(() => {
                                        if (action === 'insert') {
                                            return (
                                                <>
                                                    <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit">
                                                        Tambah Tipe Kamar
                                                    </button>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit">
                                                            Edit Tipe Kamar
                                                    </button>
                                                </>
                                            )
                                        }
                                    })()}
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
            </>
        ):null}
    </>

    )
}

export default modalTipeKamar
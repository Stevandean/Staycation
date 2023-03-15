import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { globalState } from '@/context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalKamar = () => {

    // state modal
    const {showModalKamar, setShowModalKamar} = useContext (globalState)
    
    // ini state
    const {dataKamar, setDataKamar} = useContext (globalState)
    const [dataTipeKamar, setDataTipeKamar] = useState ([])
    const {action, idKamar} = useContext (globalState)
    const {nomorKamar, setNomorKamar} = useContext (globalState)
    const {tipeKamar, setTipeKamar} = useContext (globalState)

    const getKamar = () => {
        axios.get (BASE_URL + `/kamar`)
        .then (res => {
            setDataKamar (res.data.kamar)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

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
        let form = {
            nomor_kamar : nomorKamar,
            id_tipe_kamar : tipeKamar
        }
        if (action === 'insert') {
            axios.post (BASE_URL + `/kamar`, form)
            .then (res => {
                console.log(res.data.message);
                getKamar()
                setShowModalKamar (false)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (action === 'update') {
            axios.put (BASE_URL + `/kamar/${idKamar}`, form)
            .then (res => {
                console.log(res.data.message);
                getKamar()
                setShowModalKamar (false)
            })
        }
    }

    useEffect (() => {
        getKamar()
        getTipeKamar()
    }, [])

    return (
        <>
            {showModalKamar ? (
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
                                                            Tambah Kamar
                                                        </h3>
                                                    </>
                                                )
                                            } else if (action === 'update') {
                                                return (
                                                    <>    
                                                        <h3 className="text-3xl font-semibold text-white">
                                                            Edit Kamar
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
                                                <span>Nomor Kamar</span>
                                                <span>:</span>
                                            </div>
                                            <div className="w-4/6">
                                                <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                                type="number"
                                                value={nomorKamar}
                                                onChange={(e) => setNomorKamar((e.target.value))}
                                                required
                                                >        
                                                </input>
                                            </div>
                                        </div>
                                        <div className="flex flex-row space-x-3 w-full">
                                            <div className="w-2/6 flex justify-between">
                                                <span>Tipe Kamar</span>
                                                <span>:</span>
                                            </div>
                                            <div className="w-4/6">
                                                <div className="relative w-full">
                                                    <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                        <select className='w-full bg-[#212437] focus:outline-none' name={tipeKamar} onChange = {(e) => setTipeKamar (e.target.value)} required>
                                                            <option></option>
                                                            {dataTipeKamar.map ((item, index) => (
                                                                <option key={index + 1} value={item.id_tipe_kamar}>{item.nama_tipe_kamar}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                                        <button
                                        className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={ () => setShowModalKamar(false)}>
                                        Close
                                        </button>

                                        {(() => {
                                            if (action === 'insert') {
                                                return (
                                                    <>
                                                        <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit">
                                                            Tambah Kamar
                                                        </button>
                                                    </>
                                                )
                                            } else if (action === 'update') {
                                                return (
                                                    <>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="submit">
                                                                Edit Kamar
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

export default modalKamar
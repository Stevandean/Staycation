import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { globalState } from '@/context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalDelete = () => {

    const {showModalDelete, setShowModalDelete} = useContext (globalState)
    const {dataUser, setDataUser} = useContext (globalState)
    const {dataKamar, setDataKamar} = useContext (globalState)
    const {dataTipeKamar, setDataTipeKamar} = useContext (globalState)
    const {action, idUser, idKamar, idTipeKamar} = useContext (globalState)

    const getUser = () => {
        axios.get (BASE_URL + `/user`)
        .then (res => {
            setDataUser (res.data.user)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

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

    const handleDelete = () => {
        if (action === 'deleteUser') {
            axios.delete (BASE_URL + `/user/${idUser}`)
            .then (res => {
                console.log(res.data.message);
                getUser()
                setShowModalDelete (false)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (action === 'deleteKamar') {
            axios.delete (BASE_URL + `/kamar/${idKamar}`)
            .then (res => {
                console.log(res.data.message);
                getKamar()
                setShowModalDelete (false)
            })
        } else if (action === 'deleteTipeKamar') {
            axios.delete (BASE_URL + `/tipe_kamar/${idTipeKamar}`)
            .then (res => {
                console.log(res.data.message);
                getTipeKamar()
                setShowModalDelete (false)
            })
        }
    }

    useEffect (() => {
        getUser ()
        getKamar ()
        getTipeKamar ()
    }, [])

    return (
        <>
        {showModalDelete ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-3xl">
    
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#11121C] outline-none focus:outline-none">
    
                    {/*Wrapper Input Field*/}
                    <div className="relative p-6 flex flex-col space-y-5 text-white text-lg mt-5">
    
                    {/* Input Field */}
                    <div className="flex flex-col justify-center space-y-5">
                        
                        <svg className='h-28' viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 0.833333H8.75L7.91667 0H3.75L2.91667 0.833333H0V2.5H11.6667M0.833333 13.3333C0.833333 13.7754 1.00893 14.1993 1.32149 14.5118C1.63405 14.8244 2.05797 15 2.5 15H9.16667C9.6087 15 10.0326 14.8244 10.3452 14.5118C10.6577 14.1993 10.8333 13.7754 10.8333 13.3333V3.33333H0.833333V13.3333Z" fill="white"/>
                        </svg>

                        {/* <img className='h-28' src='../svg/trash.svg' /> */}
                        <span className='text-center text-red-700 text-3xl font-semibold'>Apakah Anda Yakin?</span>
                        <span className='text-center text-white text-base'>Untuk data user ini?</span>
                    </div>
                    </div>
    
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                        className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalDelete(false)}>
                        Close
                    </button>
                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleDelete()}>
                        Hapus Data
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </>
  
    )
}

export default modalDelete
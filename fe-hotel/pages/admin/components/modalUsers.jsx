import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '@/context/context'
import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalUsers = () => {

    // state modal
    const {showModalUser, setShowModalUser} = useContext (globalState)
    
    // ini state
    const {dataUser, setDataUser} = useContext (globalState)
    const {action, idUser} = useContext (globalState)
    const {name, setName} = useContext (globalState)
    const {photo, setPhoto} = useContext (globalState)
    const {email, setEmail} = useContext (globalState)
    const {password, setPassword} = useContext (globalState)
    const {role, setRole} = useContext (globalState)

    // ketika input file berubah maka akan mentrigger const ini
    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined);
        return;
        }
        setSelectedFile(e.target.files[0]); // mengembalikan file
    };

    const getUser = () => {
        axios.get (BASE_URL + `/user`)
        .then (res => {
            setDataUser (res.data.user)
        })
        .catch (err => {
            console.log(err.response);
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        let form = {
            name_user : name,
            foto : photo,
            email : email,
            password : password,
            role : role
        }
        if (action === 'insert') {
            axios.post (BASE_URL + `/user`, form)
            .then (res => {
                console.log(res.data.message);
                getUser ()
                setShowModalUser (false)
            })
        } else if (action === 'update') {
            axios.put (BASE_URL + `/user/${idUser}`, form)
            .then (res => {
                console.log(res.data.message);
                getUser()
                setShowModalUser (false)
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    useEffect (() => {
        getUser ()
    }, [])
    
    return (
        <>
        {showModalUser ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#212437] outline-none focus:outline-none">
                            <form action='POST' onSubmit={handleSave}>
                                {/*header Modal*/}
                                <div className="flex justify-center p-5 border-b border-solid border-slate-500 rounded-t">
                                    {(() => {
                                        if (action === 'insert') {
                                            return (
                                                <>    
                                                    <h3 className="text-3xl font-semibold text-white">
                                                        Tambah User
                                                    </h3>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>    
                                                    <h3 className="text-3xl font-semibold text-white">
                                                        Edit User
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
                                            <span>Name</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName((e.target.value))}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Photo</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="file"
                                            value={photo}
                                            onChange={onSelectFile}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div> */}
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Email</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail((e.target.value))}
                                            required
                                            autoComplete='current-email'
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Password</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword((e.target.value))}
                                            required
                                            autoComplete='current-password'
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Role</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <div className="relative w-full">
                                                <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                    <select className='w-full bg-[#212437] focus:outline-none' name={role} onChange = {(e) => setRole (e.target.value)} required>
                                                        <option></option>
                                                        <option value={'admin'}>Admin</option>
                                                        <option value={'resepsionis'}>Resepsionis</option>
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
                                    onClick={ () => setShowModalUser(false)}>
                                    Close
                                    </button>

                                    {(() => {
                                        if (action === 'insert') {
                                            return (
                                                <>
                                                    <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit">
                                                        Tambah User
                                                    </button>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit">
                                                            Edit User
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

export default modalUsers
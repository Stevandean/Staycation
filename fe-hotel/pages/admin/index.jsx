import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './components/header'
import ModalUsers from './components/modalUsers';
import ModalDelete from './components/modalDelete';
import { globalState } from '@/context/context';
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const index = () => {

    // deklarasi router
    const router = useRouter()

    // state modal
    const [showModalUser, setShowModalUser] = useState (false)
    const [showModalDelete, setShowModalDelete] = useState (false)
    
    // ini state
    const [dataUser, setDataUser] = useState ([])
    const [action, setAction] = useState ('')
    const [name, setName] = useState ('')
    const [photo, setPhoto] = useState ()
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [role, setRole] = useState ('')
    const [idUser, setIdUser] = useState ('')

    const getUser = () => {
        axios.get (BASE_URL + `/user`)
        .then (res => {
            setDataUser (res.data.user  )
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const addUser = () => {
        setShowModalUser (true)
        setAction ('insert')
        setName ('')
        setEmail ('')
        setPassword ('')
        setRole ('')
    }

    const editUser = (selectedItem) => {
        setShowModalUser (true)
        setAction ('update')
        setIdUser (selectedItem.id_user)
        setName (selectedItem.name_user)
        setEmail (selectedItem.email)
        setRole (selectedItem.role)
    }

    const deleteUser = (selectedId) => {
        setShowModalDelete (true)
        setAction ('deleteUser')
        setIdUser (selectedId)
        console.log (selectedId)
    }

    const isLogged = () => {
        if (localStorage.getItem ('admin') === null || localStorage.getItem ('tokenAdmin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
        getUser ()
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
                            <h1 className='text-xl font-bold mb-3'>Daftar User</h1>
                            <button onClick={() => addUser()} className='mb-10 bg-green-500 py-2 px-5 rounded-lg'>Tambah User</button>
                            <table className='w-full table-fixed'>
                                <thead>
                                    <tr className='bg-slate-300 border-2 border-slate-300'>
                                        <th className='py-3'>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataUser.map ((item, index) => (
                                        <tr key={index + 1}>
                                            <td className='pl-3 py-3 border-2 border-slate-300'>{item.name_user}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.email}</td>
                                            <td className='pl-3 border-2 border-slate-300'>{item.role}</td>
                                            <td className='pl-3 border-2 border-slate-300'>
                                                <div className="flex justify-center items-center gap-x-3">
                                                    <button onClick={() => editUser(item)} className="bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] px-5 py-1.5 rounded-lg">Edit</button>
                                                    <button onClick={() => deleteUser(item.id_user)} className="bg-gradient-to-r from-[#D2D0FE] to-[#7F78D2] px-5 py-1.5 rounded-lg">Delete</button>
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

            <globalState.Provider value={{ showModalUser, setShowModalUser, dataUser, setDataUser, idUser, setIdUser , action, setAction, name, setName, photo, setPhoto, email, setEmail, password, setPassword, role, setRole }}>
                <ModalUsers />
            </globalState.Provider>

            <globalState.Provider value={{ showModalDelete, setShowModalDelete, action, setAction, dataUser, setDataUser, idUser, setIdUser }}>
                <ModalDelete />
            </globalState.Provider>
        </>
    )    
}

export default index
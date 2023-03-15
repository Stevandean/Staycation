import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const roomType = () => {

    const [dataTipeKamar, setDataTipeKamar] = useState ([])

    const getDataTipeKamar = () => {
        axios.get (BASE_URL + `/tipe_kamar`)
        .then (res => {
            setDataTipeKamar (res.data.tipe_kamar)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    useEffect (() => {
        getDataTipeKamar ()
    }, [])

    return (
        <div className="mb-20">
            {/* title */}
            <h1 className='text-darkBlue text-2xl font-semibold tracking-wide mb-5'>Room Type</h1>
            {/* wrapper all card */}
            <div className="grid grid-cols-4 gap-x-5 overflow-x-auto">
                {/* wrapper room type */}
                {dataTipeKamar.map ((item, index) => (
                    <Link key={index + 1} href={'../' + item.nama_tipe_kamar} className="max-h-52">
                        <img className='w-full h-full object-cover rounded-2xl' src={`http://localhost:8080/image/` + item.foto} alt="" />
                        <h1 className='font-medium text-xl text-darkBlue mt-3'>{item.nama_tipe_kamar}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default roomType
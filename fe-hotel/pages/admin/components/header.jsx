import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const header = () => {

  // deklarasi router
  const router = useRouter()

  // function logout
  const logoutAdmin = () => {
    localStorage.removeItem('admin')
    localStorage.removeItem('tokenAdmin')
    router.push ('/admin/login')
  }

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 h-20 z-50 flex border-b-2 bg-white border-slate-300 shadow-lg">
          {/* wrapper */}
          <div className="flex justify-between items-center w-9/12 mx-auto">
            {/* name */}
            <div className="font-poppins text-2xl tracking-wider">
              <span className='text-lightBlue'>Stay<span className='display:inline text-darkBlue'>cation.</span></span>
            </div>
            {/* navigate button */}
            <div className=" space-x-5 font-poppins text-lightBlue ">
              <Link href={'#'}>Home</Link>
              <Link href={'/admin'}>User</Link>
              <Link href={'/admin/kamar'}>Kamar</Link>
              <Link href={'/admin/tipeKamar'}>Tipe Kamar</Link>
              <button onClick={() => logoutAdmin()}>Logout</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default header
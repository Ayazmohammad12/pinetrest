import React from 'react'
import { FaPinterest } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='flex justify-between items-center p-5 border-b bg-white'>

      <div className='flex items-center gap-3'>

        <FaPinterest className='text-red-600 text-3xl'/>

        <h1 className='text-2xl font-bold text-red-600'>
          Pinterest
        </h1>

      </div>

      <div className='flex gap-4'>

        <Link to='/login'>

          <button className='bg-red-600 text-white px-5 py-2 rounded-full'>
            Login
          </button>

        </Link>

        <Link to='/register'>

          <button className='bg-gray-200 px-5 py-2 rounded-full'>
            Signup
          </button>

        </Link>

      </div>

    </div>
  )
}

export default Navbar
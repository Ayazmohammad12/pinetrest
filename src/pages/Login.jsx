import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    if(email === "" || password === ""){
      alert("Please fill all fields")
      return
    }

    if(password.length < 6){
      alert("Password must contain 6 characters")
      return
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password
        }
      )

      alert(response.data)

      if(response.data === "Login Success"){

        navigate('/feed')

      }

    } catch (err) {

      console.log(err)

      alert("Login Failed")

    }

  }

  return (

    <div className='min-h-screen relative overflow-hidden'>

      {/* BACKGROUND IMAGES */}

      <div className='absolute inset-0 grid grid-cols-5 gap-4 p-4 opacity-50'>

        <img
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1517841905240-472988babdf9'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

      </div>

      {/* DARK OVERLAY */}

      <div className='absolute inset-0 bg-black/60'></div>

      {/* LOGIN CARD */}

      <div className='relative z-10 flex justify-center items-center min-h-screen'>

        <div className='bg-white w-[420px] p-10 rounded-3xl shadow-2xl'>

          <h1 className='text-4xl font-bold text-center'>
            Welcome to Pinterest
          </h1>

          <p className='text-center text-gray-500 mt-2'>
            Login to continue
          </p>

          <div className='flex flex-col gap-5 mt-8'>

            <input
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='border p-4 rounded-2xl'
            />

            <input
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='border p-4 rounded-2xl'
            />

            <button
              onClick={handleLogin}
              className='bg-red-600 text-white p-4 rounded-full font-bold hover:bg-red-700'
            >
              Login
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login
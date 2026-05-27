import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {

    if(username === "" || email === "" || password === ""){
      alert("Please fill all fields")
      return
    }

    if(password.length < 6){
      alert("Password should contain 6 characters")
      return
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/register",
        {
          username,
          email,
          password
        }
      )

      alert(response.data)

      navigate('/feed')

    } catch (err) {

      console.log(err)
      alert("Registration Failed")

    }

  }

  return (

    <div className='min-h-screen relative overflow-hidden'>

      {/* BACKGROUND */}

      <div className='absolute inset-0 grid grid-cols-5 gap-4 p-4 opacity-40'>

        <img
          src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1521119989659-a83eee488004'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

        <img
          src='https://images.unsplash.com/photo-1517841905240-472988babdf9'
          className='w-full h-[300px] object-cover rounded-3xl'
        />

      </div>

      {/* DARK OVERLAY */}

      <div className='absolute inset-0 bg-black/60'></div>

      {/* REGISTER CARD */}

      <div className='relative z-10 flex justify-center items-center min-h-screen'>

        <div className='bg-white w-[420px] p-10 rounded-3xl shadow-2xl'>

          <h1 className='text-4xl font-bold text-center'>
            Create Account
          </h1>

          <p className='text-center text-gray-500 mt-2'>
            Join Pinterest today
          </p>

          <div className='flex flex-col gap-5 mt-8'>

            <input
              type='text'
              placeholder='Enter Username'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className='border p-4 rounded-2xl outline-none focus:border-red-500'
            />

            <input
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='border p-4 rounded-2xl outline-none focus:border-red-500'
            />

            <input
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='border p-4 rounded-2xl outline-none focus:border-red-500'
            />

            <button
              onClick={handleRegister}
              className='bg-red-600 text-white p-4 rounded-full font-bold hover:bg-red-700 duration-300'
            >
              Register
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register
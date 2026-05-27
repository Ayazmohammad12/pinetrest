import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

  return (
    <div className='bg-[#fffdf8]'>

      <Navbar/>

      {/* ================= HERO SECTION ================= */}

      <section className='min-h-screen flex justify-center items-center px-20 bg-[#fffdf8]'>

        {/* LEFT */}

        <div className='flex-1'>

          <h1 className='text-7xl font-bold leading-tight'>
            Create the life you love on Pinterest
          </h1>

          <div className='flex gap-4 mt-10'>

            <button className='bg-red-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-red-700'>
              Join Pinterest for free
            </button>

            <button className='bg-gray-200 px-8 py-4 rounded-full text-xl font-semibold'>
              I already have an account
            </button>

          </div>

        </div>

        {/* RIGHT IMAGES */}

        <div className='flex-1 relative h-[700px]'>

          <img
            src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
            className='absolute top-10 left-20 w-48 rounded-3xl'
          />

          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330'
            className='absolute top-40 left-60 w-64 rounded-3xl'
          />

          <img
            src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
            className='absolute top-80 left-10 w-48 rounded-3xl'
          />

          <img
            src='https://images.unsplash.com/photo-1517841905240-472988babdf9'
            className='absolute top-80 left-80 w-44 rounded-3xl'
          />

        </div>

      </section>

      {/* ================= SECOND SECTION ================= */}

      <section className='min-h-screen flex justify-center items-center px-20 bg-[#fffdf8]'>

        {/* LEFT IMAGE */}

        <div className='flex-1 flex justify-center'>

          <img
            src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518'
            className='w-[500px] rounded-[50px] shadow-xl'
          />

        </div>

        {/* RIGHT TEXT */}

        <div className='flex-1'>

          <h1 className='text-6xl font-bold leading-tight'>
            Search by skin tone
          </h1>

          <p className='mt-6 text-2xl text-gray-700 max-w-xl'>
            Search with skin tone ranges for beauty ideas that represent you.
          </p>

          <button
  onClick={()=>window.location.href='/feed'}
  className='bg-red-600 text-white p-4 rounded-full font-bold hover:bg-red-700'
>
  Continue
</button>

        </div>

      </section>

      {/* ================= LOGIN SECTION ================= */}

      <section className='min-h-screen relative overflow-hidden'>

        {/* BACKGROUND */}

        <div className='absolute inset-0 grid grid-cols-5 gap-4 p-5 opacity-40'>

          <img
            src='https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
            className='w-full h-[300px] object-cover rounded-3xl'
          />

          <img
            src='https://images.unsplash.com/photo-1521119989659-a83eee488004'
            className='w-full h-[300px] object-cover rounded-3xl'
          />

          <img
            src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
            className='w-full h-[300px] object-cover rounded-3xl'
          />

          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330'
            className='w-full h-[300px] object-cover rounded-3xl'
          />

          <img
            src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
            className='w-full h-[300px] object-cover rounded-3xl'
          />

        </div>

        {/* DARK OVERLAY */}

        <div className='absolute inset-0 bg-black/50'></div>

        {/* CONTENT */}

        <div className='relative z-10 flex justify-center items-center min-h-screen px-20'>

          {/* LEFT */}

          <div className='flex-1 text-white'>

            <h1 className='text-8xl font-bold leading-tight'>
              Sign up to get your ideas
            </h1>

          </div>

          {/* RIGHT LOGIN CARD */}

          <div className='bg-white w-[430px] rounded-3xl p-10 shadow-2xl'>

            <h1 className='text-4xl font-bold text-center'>
              Welcome to Pinterest
            </h1>

            <p className='text-center text-gray-500 mt-2'>
              Find new ideas to try
            </p>

            <div className='mt-8 flex flex-col gap-5'>

              <div>

                <label className='font-semibold'>
                  Email
                </label>

                <input
                  type='email'
                  placeholder='Email'
                  className='w-full border border-gray-400 rounded-2xl p-4 mt-2'
                />

              </div>

              <div>

                <label className='font-semibold'>
                  Password
                </label>

                <input
                  type='password'
                  placeholder='Create a password'
                  className='w-full border border-gray-400 rounded-2xl p-4 mt-2'
                />

              </div>

              <div>

                <label className='font-semibold'>
                  Birthdate
                </label>

                <input
                  type='date'
                  className='w-full border border-gray-400 rounded-2xl p-4 mt-2'
                />

              </div>

              <button
  onClick={()=>window.location.href='/feed'}
  className='bg-red-600 text-white p-4 rounded-full font-bold hover:bg-red-700'
>
  Continue
</button>

              <div className='text-center font-bold'>
                OR
              </div>

             <button
  onClick={() => {
    alert("Google Login Success")
    window.location.href='/feed'
  }}
  className='border border-gray-300 p-4 rounded-full font-semibold hover:bg-gray-100'
>
  Continue with Google
</button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home
// import React from 'react'
// import useState from 'react'

import facebook from "../../assets/icons/Facebook.svg"
import Google from "../../assets/icons/google.png"
import Apple from "../../assets/icons/apple.png"
import Email from "../../assets/icons/mails.png"
// import cancel from "../../assets/icons/Vector.png"

// const [login, setLogin] = useState(true)

function Login() {
  return (
    <div className='w-[500px] mx-auto mb-32 border absolute top- left-1/2 -translate-x-1/2 '>
      <p className='ml-3 text:sm text-gray-700'>Log in or sign up</p>

      <div className='bg-white rounded-2xl'>
        <div className='mx-5'>
          {/* log text */}
          <div className='flex border-b-1 border-gray-300 my-3'>
            <div className='mt-5 flex space-x-32 mb-4 font-bold'>
              <p className='bg-red-400'>❌</p>
              <p>Log in or sign up</p>

            </div>

          </div>
          {/* welcome note */}
          <div className='text-xl font-bold border-b-1 border-gray-100 my-3'>
            <p>welcome to Airbnb</p>
          </div>

          {/* form */}
          <div>
            {/* email */}
            <input type="Email" placeholder='Email' className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 ' />

            {/* continue */}
            <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 bg-blue-600 text-white font-bold text-center'>
              <p>Continue</p>
            </button>

          </div>
          {/* or line */}
          <div>
            <p> for line</p>
            <p></p>
          </div>
          {/* social medias */}
          {/* facebook */}
          <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-28 bg-whiite text-black font-bold '>
            <img src={facebook} alt="" className='h-7 ml-2' />
            <p className=''>Continue with Facebook</p>
          </button>



          {/* google */}

          <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-30 bg-whiite text-black font-bold '>
            <img src={Google} alt="" className='h-7 ml-2' />
            <p className=''>Continue with Google</p>
          </button>



          {/* Apple */}
          <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-31 bg-whiite text-black font-bold '>
            <img src={Apple} alt="" className='h-7 ml-2' />
            <p className=''>Continue with Apple</p>
          </button>


          {/* Email */}
          <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 flex items-center space-x-31 bg-whiite text-black font-bold '>
            <img src={Email} alt="" className='h-7 ml-2' />
            <p className=''>Continue with email</p>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Login
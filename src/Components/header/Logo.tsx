import  { useState } from 'react'
import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import globe from '../../assets/icons/globe.svg'
import photo from '../../assets/icons/photo.svg'
import menu from '../../assets/icons/menu-01.svg'
// import Login from '../Main/Login'
import facebook from "../../assets/icons/Facebook.svg"
import Google from "../../assets/icons/google.png"
import Apple from "../../assets/icons/apple.png"
import Email from "../../assets/icons/mails.png"


function Logo() {
    const [toggle, setToggle] = useState(false)
    const [login2, setLogin2] = useState(false)
    const [userDetails, setUserDetails] =useState({
        userEmail: "",
        userPhone: ""

    })
    // console.log(userEmail)

    let handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <section className='mx-6'>
            <nav>
                <div className='m-3 flex justify-between items-center'>
                    {/* logo and first line */}
                    <div>
                        <img src={logo} alt="logo" className='hidden md:block' />
                        {/* Anywhere and co */}
                    </div>
                    <div className='h-9 w-[500px] grid md:grid-cols-3 gap-1 border-gray-400 border-1 rounded-3xl justify-items-center items-center mt-2 md:'>
                        <p className='w-32 txet-2xl font-bold border-r-2 mt-1 mb-2 text-center hidden md:block'>Anywhere</p>
                        <p className='w-32 text-center txet-2xl font-bold border-r-2 mt-1 mb-2 hidden md:block '>Any week</p>
                        <div className='flex items-center md:mb-2 gap-2'>
                            <p className='mt-1 ml-1 text hidden md:block'>Add guests</p>
                            <img className='md:ml-10  h-6 w-6 md:mt-1.5' src={search} alt="Search" />
                            <p className='md:hidden'>Start your search</p>
                        </div>
                    </div>
                    {/* Airbnb your home and co */}
                    <div className='hidden md:flex items-center space-x-6'>
                        <p className='font-bold'>Airbnb your home</p>
                        <img src={globe} alt="globe" />
                        <div className='flex space-x-2 border-2 border-gray-400 rounded-3xl w-20 justify-around'>
                            <img className='' src={menu} alt="menu" />
                            <button onClick={handleToggle}>
                                <img className='cursor-pointer' src={photo} alt="login" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {
                toggle &&
                // modal
                <div className=' h-screen w-full relative borde'>
                    <div className='w-[500px] mx-auto mb-32 absolute top- left-1/2 -translate-x-1/2 '>
                        <p className='ml-3 text:sm text-gray-700'>Log in or sign up</p>

                        <div className='bg-white rounded-2xl shadow-2xl pb-5'>
                            <div className='mx-5'>
                                {/* log text */}
                                <div className='flex border-b-1 border-gray-300 my-3'>
                                    <div className='mt-5 flex space-x-32 mb-4 font-bold'>
                                        <p onClick={handleToggle} className='cursor-pointer'>❌</p>
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
                                    {login2 ?
                                        <div className='border-2 w-full h-12 border-gray-300 rounded-xl mb-3'>
                                            <label htmlFor="" className=''>email</label>
                                            <input type="email" placeholder='Email' className='w-full focus:ring-0 px-3 h-12' />
                                        </div> :
                                        <div className='px-3'>
                                            <select name="" id="" className='border w-full'>
                                                 <option value="Ng">Nigeria (+234)</option>
    <option value="UK">United Kingdom (+44)</option>
    <option value="US">United State (+1)</option>
    <option value="CA">Canada (+1)</option>
    <option value="DE">Germany (+49)</option>
    <option value="IN">India (+91)</option>
    <option value="JP">Japan (+81)</option>
    <option value="ZA">South Africa (+27)</option>
    <option value="ZA">Australia (+61)</option>
                                            </select>

{/* phone number */}
  <input type="text" placeholder='Phone Number' className='w-full h-12 rounded-xl border-2 border-gray-300 my-5 px-6'  
  value={userDetails.userPhone} 
  onChange={(e)=> setUserDetails({...userDetails, userPhone: e.target.value})} />
  <input type="email" placeholder='Your Email:' className='w-full h-12 rounded-xl border-2 border-gray-300 my-5 px-6'  
  value={userDetails.userEmail} 
  onChange={(e)=> setUserDetails({...userDetails, userEmail: e.target.value})} />
  {/* <p> the number the person is typing: {userEmail}</p> */}

                                        </div>
                                    }

                                    {/* continue */}
                                    <button className='w-full h-12 rounded-xl border-2 border-gray-300 mb-5 bg-red-600 text-white font-bold text-center' onClick={() => setLogin2(true)}>
                                        Continue
                                        {/* <p onClick={<SignLogin/>}
                                        className='cursor-pointer'>Continue</p> */}
                                    </button>

                                </div>
                                {/* or line */}
                                <div className='flex ml-12 space-x-3 mb-8' >
                                    <div className='w-40 border-b-2 mb-2'></div>
                                    <p>  Or </p>
                                    <div className='w-40 border-b-2 mb-2'></div>
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
                </div>
            }


        </section>
    )
}

export default Logo
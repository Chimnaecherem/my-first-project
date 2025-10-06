import React from 'react'
import faceBook from "../../assets/icons/Facebook.svg"
import twitter from "../../assets/icons/Twitter.svg"
import instagram from "../../assets/icons/Instagram.svg"

function LastFooter() {
    const support = ["Help centre","AirCover", "Anti-discrimination", "disabilities support", "Cancellation options", "Report neighbourhood concern"]
    const host = ["Airbnb your home", "AirCover for hosts", "Hosting resources", "Community forum", "Hosting responsibly"]
    const airBNB = ["Newsroom", "New feastures", "Careers", "Investors", "Gift cards", "Airbnb.org emergency stays"]
  return (
    <div className='ml-8' >
      <div className='sm:grid-cols md:grid grid-cols-3'>
      {/* supoort */}
      <div>
          <p className='font-bold'>Support</p>
{support.map((item) => (
  <a href="../" className='grid grid-rows'>{item}</a>
))}
<hr className='my-5 md:hidden' />
      </div>
      {/* hosting */}
      <div>
        <p className='font-bold'>Hosting</p>
{host.map((item2) =>(
  <a className='grid grid-rows' href="../">{item2}</a>
))}
<hr className='my-5 bg-gray-300 md:hidden ' />
      </div>
      {/* Airbnb */}
      <div>
<p className='font-bold'>Airbnb</p>
{airBNB.map((item3) => (
  <a className='grid grid-rows' href="../">{item3}</a>
))}
      </div>

    </div>
    {/*show map, last test and icons */}
    <div className='h-7 w-32 mx-auto my-8 rounded-3xl bg-black'>
<p className='text-white font-bold text-center '>show map 📍</p>
    </div>
    <div className='sm:flex-row md:flex justify-between space-y-3'>
      <p>© 2023 Airbnb, Inc. <br className='md:hidden'/> • Privacy • Terms • Sitemap • UK Modern <br className='md:hidden' />Slavery Act • Company details</p>
       
        {/* social media icon */}
        <div className='sm:flex-row md:flex space-x-7 space-y-3'>
          
          <div className='flex space-x-7'>
            <button>⨂</button>
          <p>English (GB) £ GBP</p>
          </div>
          <button><img src={faceBook} alt="facebook" /></button>
          <button><img src={twitter} alt="twitter" /></button>
          <button><img src={instagram} alt="instagram" /></button>
        </div>
    </div>
     </div>
  )
}

export default LastFooter
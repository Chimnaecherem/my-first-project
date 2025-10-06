// import React from 'react'

import image1 from '../../assets/all image/Image 1.png'
import image2 from '../../assets/all image/Image  2.jpg'
import image3 from '../../assets/all image/Image  3.png'
import image4 from '../../assets/all image/Image  4.png'
import image5 from '../../assets/all image/Image 5.jpg'
import image6 from '../../assets/all image/Image  6.png'
import image7 from '../../assets/all image/Image 7.png'
import image8 from '../../assets/all image/Image 8.png'
import image9 from '../../assets/all image/Image 9.png'
import image10 from '../../assets/all image/Image 10.png'
import image11 from '../../assets/all image/Image 11.png'
import image12 from '../../assets/all image/Image 12.png'
import image13 from '../../assets/all image/Image 13.png'
import image14 from '../../assets/all image/Image 14.png'
import image15 from '../../assets/all image/Image 15.png'
import image16 from '../../assets/all image/Image 16.png'
import image17 from '../../assets/all image/Image 17.png'
import image18 from '../../assets/all image/Image 18.png'
import image19 from '../../assets/all image/Image 19.png'
import image20 from '../../assets/all image/Image 20.png'
import star from '../../assets/icons/star.png'



function Body() {
    const imageAndCaption = [
        { photo: image1, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image2, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image3, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image4, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image5, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image6, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image7, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image8, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image9, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image10, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image11, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image12, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image13, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image14, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image15, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image16, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image17, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image18, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image19, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" },
        { photo: image20, text1: "Half Moon Bay, California,US", icon: star, textNum: "5.0", text2: "Beach and ocean views", text3: "22-27 Oct individal Host", price: "€1,634 total" }
    ]
    return (
        <div>

            {/* image mapping */}
            <div className=' mt-8 grid grid-cols-2 md:grid-cols-4 justify-items-center' >
                {
                    imageAndCaption.map((photos) => (
                        <figure className='mt-3 mb-10 w-[320px]'>
                            <img src={photos.photo} alt="image 1" className='w-full h-[284px]' />

                            <figcaption>
                                <div className='items-center flex flex-col-2 justify-between'>

                                    <p className='font-bold my-2'>{photos.text1}</p>
                                    <div className='flex flex-col-2 items-center space-x-1'>
                                        <img src={photos.icon} alt="" className='h-5' />
                                        <p>{photos.textNum}</p>
                                    </div>
                                </div>
                                <p>{photos.text2}</p>
                                <p>{photos.text3}</p>
                                <p className='font-bold border-b-2 w-24 my-2'>{photos.price}</p>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>
        </div>
    )
}

export default Body
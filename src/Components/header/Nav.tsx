// import React from 'react'
import { useState } from 'react'

import amazingViews from '../../assets/icons/Amazing views.png'
import lakeFront from '../../assets/icons/Lakefrontt.svg'
import amazingPools from '../../assets/icons/Amazing pools.png'
import cabin from '../../assets/icons/Cabins.svg'
import boats1 from '../../assets/icons/Boats (1).svg'
import beachFront from '../../assets/icons//Beachfronts.png'
import filter from '../../assets/icons/Vector.png'
import luxe from '../../assets/icons/Luxe.svg'
import piano from '../../assets/icons/Grand pianos.png'
import mansion from '../../assets/icons/Mansions.png'
import tree from '../../assets/icons/Treehouses.svg'
import next from '../../assets/icons/next icon.svg'
import omg from '../../assets/icons/OMG!.png'
import skiing from '../../assets/icons/Skiing.png'

function Nav() {
    // use state function
    const [lineB, setLineB] = useState("Amazing views");

    // list of icons and their text
    let iconsAndText = [
        { image: amazingViews, text: "Amazing views" },
        { image: cabin, text: "Cabins" },
        { image: beachFront, text: "Beachfront" },
        { image: skiing, text: "Skiing" },
        { image: piano, text: "Grand piano" },
        { image: mansion, text: "mansion" },
        { image: omg, text: "omg" },
        { image: amazingPools, text: "Amazing Pools" },
        { image: luxe, text: "Luxe" },
        { image: boats1, text: "Boats" },
        { image: lakeFront, text: "Lakefront" },
        { image: tree, text: "TreeHouses" },

    ];

    return (
        <div className=' text-2sm flex gap-8 mx-8 justify-around border-t-1 border-gray-500 mt-8 pt-5'>
            <ul >
                              <div className=' space-x-16 hidden md:flex items-center'>
                    {iconsAndText.map((icon) => (
                        <figure className={`${lineB === icon.text && "border-b-2"} items-center flex flex-col`} onClick={() => { setLineB(icon.text) }} >
                            <img src={`${icon.image}`} alt={icon.text} />
                            <figcaption className='text-center text-sm'>
                                {icon.text}
                            </figcaption>
                        </figure>
                    ))
                    }
                </div>
                {/* {lineB === "Amazing views" && <p>Its showing amazing view</p> }
                {lineB === "Cabins" && <p>Its showing cabins</p> }
                {lineB === "Beachfront" && <p>Its showing "Beachfront"</p> } */}
                <div className='space-x-16 flex items-center md:hidden'>
                    {iconsAndText.splice(0, 3).map((icon) => (
                        <figure className={`${lineB === icon.text && "border-b-2"} items-center flex flex-col`} onClick={() => { setLineB(icon.text) }} >
                            <img src={`${icon.image}`} alt={icon.text} />
                            <figcaption className='text-center text-sm'>
                                {icon.text}
                            </figcaption>
                        </figure>

                    ))}
                </div>


            </ul>
            {/* Next and filters */}
            <div className='hidden md:flex space-x-12 justify-around items-center'>
                {/* next */}
                <div className='h-7 w-7 rounded-full border border-gray-500 '>
                    <img src={next} alt="next" className='h-5 mt-1 ml-0.5' />
                </div>
                <div className='h-8 w-20 border rounded-sm flex justify-around items-center'>
                    <img src={filter} alt="filter" />
                    <p>Filters</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
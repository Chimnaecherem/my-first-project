import React from 'react'
import { useState } from 'react'

function Footer() {
    const doubleText = [
        "Popular", "Historic", "Coastal", "Islands", "Lakes", "Unigue stays", "Categories", "Things to do"
    ]

    const dynamicText = [
        "Holiday rentals", "Flat rentals", "Villa rentals", "Cottage rentals", "Holiday rentals", "Flat rentals", "Cottage rentals", "Villa rentals", "Holiday rentals", "Holiday rentals", "Flat rentals", "Villa rentals", "Cottage rentals", "Holiday rentals", "Flat rentals", "Cottage rentals", "Villa rentals"
    ]

    const [display, setDisplay] = useState("Popular")
    const [histories, setHistories] = useState("Historic")
    const [coastaly, setCoastaly] = useState("Coastal")
    return (
        
        <div className='ml-8' >

         
            <div className='space-x-10 hidden md:flex'>
                {doubleText.map((text) => (
                    <button className={`${display === text && "border-b-2"} cursor-pointer `} onClick={() => {setDisplay(text)}}>{text}</button>
                ))}
            </div >
             { display === "Popular" &&
                <div className='hidden md:grid grid-cols-6'> 
                {dynamicText.map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Aberfeldy</p>
                            <p>{text}</p>
                            </a>
                             ))}
           </div>        
             }
             {/* error */}
                <p>wahalaoooooooo</p>
             <div className='sm:flex flex-cols-3 space-x-5 text-2xl md:hidden'>
                {doubleText.splice(0, 3).map((text) => (
                    <button className={`${display === text && "border-b-2 "} cursor-pointer `} onClick={() => {setDisplay(text)}}>{text}</button>
                ))}
            </div >      
            
                         { display === "Popular" &&
                <div className='grid grid-cols-2 justify-between md:hidden'> 
                {dynamicText.map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Aberfeldy</p>
                            <p>{text}</p>
                            </a>
                             ))}
           </div>        
             }
            
            

            {/* for histories */}
            
             { histories === "Historic" &&
                <div className='hidden md:grid grid-cols-6'> 
                {dynamicText.splice(0,4).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Aberfeldy</p>
                            <p>{text}</p>
                            </a>
                             ))}
           </div>        
             }
                                { histories === "Historic" &&
                <div className='grid grid-cols-2 justify-between md:hidden'> 
                {dynamicText.splice(0,4).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Aberfeldy</p>
                            <p>{text}</p>
                            </a>
                             ))}
           </div>        
             }

             {/* for coastal */}
              {/* { coastaly === "Coastal" &&
                <div className='hidden md:grid grid-cols-4'> 
                {dynamicText.splice(0,2).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Aberfeldy</p>
                            <p>{text}</p>
                            </a>
                             ))}
           </div>        
             }
                                { coastaly === "Coastal" &&
                <div className='grid grid-cols-3 justify-between md:hidden'> 
                {dynamicText.splice(0,6).map((text) => (
                        <a href="" >
                           <p className='font-bold text-2xl mt-7'>Aberfeldy</p>
                            <p>{text}</p>
                            </a>
                             ))}
           </div>        
             } */}
        </div>
    )
}

export default Footer
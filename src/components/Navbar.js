"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [hover,setHover] = useState(false)
  

  return (
      <header className="text-gray-600 body-font">
  <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
        <img src={'./Img/earth.png'} alt="" className='w-10 h-10 text-white p-2 rounded-full'/>
      <span className="ml-3 text-xl">Eco-Citizen Network</span>
    </Link>
    <nav className="md:ml-auto h-[50px] w-[500px] md:mr-auto flex flex-wrap items-center text-base justify-center border-2 gap-4 rounded-[30px]">
      <a className="mr-5 px-3 py-[3px] text-white hover:text-black rounded-[7px]  hover:bg-white cursor-pointer">Home</a>
      <Link href="/explore" className="mr-5 px-3 py-[3px] text-white hover:text-black rounded-[7px] hover:bg-white cursor-pointer" onMouseEnter={()=>setHover(true)}>Explore</Link>
      <a className="mr-5 px-3 py-[3px] text-white hover:text-black rounded-[7px] hover:bg-white cursor-pointer">Connect</a>
      <a className="mr-5 px-3 py-[3px] text-white hover:text-black rounded-[7px] hover:bg-white cursor-pointer">Donate</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">  Join
   </button>
  </div>
</header>
  )
}

export default Navbar

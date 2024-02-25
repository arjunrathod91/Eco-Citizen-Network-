"use client"
import React from 'react'
import CustomBtn from './CustomBtn'

function CustomCard() {
  return (
    <div className='rounded-[4px] h-[370px] w-[300px] bg-white flex flex-col justify-start items-start p-[10px] drop-shadow-lg relative'>
        <img src={'Img/solar.jpg'} alt="" className='h-[130px] w-[98%] bg-black rounded'/>
        <h4 className='text-lg text-gray-900 font-medium title-font mb-[6px]'>Recycle chnallenges by Arjun Rathod Today</h4>
        <p className='text-blue-400'>22/1/2024<span className='font-bold text-black ml-3'>9:00 Am</span></p>
        <p className=''>Pune,Maharashtra</p>
        <p className=''>This is a very good event who wants to participate in it then quick registration</p>
        <div className='absolute top-[85%] left-[70%]'>
        <CustomBtn>RVSP</CustomBtn>
        </div>
    </div>
  )
}

export default CustomCard

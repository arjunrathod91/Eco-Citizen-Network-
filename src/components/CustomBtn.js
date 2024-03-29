"use client"
import React from 'react'

function CustomBtn({children}) {
  return (
    <div className={`cursor-pointer m-auto py-2 px-[17px] bg-[#892bdb] rounded-[10px] text-white hover:bg-[#6116a2]`}>
      {children}
    </div>
  )
}

export default CustomBtn
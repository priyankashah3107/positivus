"use client"
import React from 'react'

const Button = ({value}) => {
  return (
    <>
     <button className=' w-[200px] md:w-[220px] bg-white border border-black text-black rounded-md pt-[15px] pb-[15px] 
     pl-[20px] pr-[20px] '>{value}</button>
    </>
  )
}

export default Button;
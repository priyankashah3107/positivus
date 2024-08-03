"use client"
import React from 'react'

const Button = ({value}) => {
  return (
    <>
     <button className=' bg-white border border-black text-black rounded-md pt-[20px] pb-[20px] 
     pl-[35px] pr-[35px] '>{value}</button>
    </>
  )
}

export default Button;
"use client"
import React from 'react'
import Image from 'next/image'
const head = "Navigating the digital landscape for success"
const para = "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation."

const bttn = "Book a consultation"

export const Home = () => {
  return (
   <>
    <div className='flex flex-col lg:flex-row justify-between p-4 pl-6  lg:pl-20 lg:p-10'>
      <div className='flex flex-col gap-6 '>
         <h1 className='homeh  lg:text-6xl lg:w-[531px]'>{head}</h1>
         <Image  src={"/home.png"} alt='home'
         width={300} height={300}
         className="imgh md:w-[550px]  lg:hidden"/>
         <p className='homep lg:w-[498px] text-xl'>{para}</p>
         <button className='btnn'>{bttn}</button>
      </div>
      {/* visible only in desktop */}
      <div className='hidden lg:block'>
        <Image src={"/home.png"} alt='home'
         width={600} height={515}
         className="img "/>
      </div>
    </div>
   </>
  )
}

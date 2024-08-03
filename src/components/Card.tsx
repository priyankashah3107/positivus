"use client" 
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

interface CardProps {
  title: string, 
  title2: string
  img: string, 
  btn: string, 
  para: string,
  bgColor: string,
  titleCol: string,
  titleCol2: string
}

const Card: React.FC<CardProps> = ({title, title2,  img, btn , para, bgColor, titleCol, titleCol2}) => {
  return (
    <>
    <div className='card bg-[#F3F3F3] lg:w-[600px] h-[310px]' 
     style={{backgroundColor: bgColor}}>
      <div className='flex flex-col '>
      <h3 className='card_title bg-[#B9FF66] pl-2 rounded-xl lg:w-[221px] lg:font-[30px]'
      style={{backgroundColor: titleCol }}>{title}</h3>
      <h3 className='card_title bg-[#B9FF66] pl-2 rounded-xl lg:w-[221px] lg:font-[30px]'
       style={{backgroundColor: titleCol2}}>{title2}</h3>
      <Image src={img} alt='btn' width={165} height={129} 
      className="ml-20 mt-4 lg:mt-0 lg:ml-52 lg:w-[210px] h-[100px]" />
       </div>

      <div className='flex lg:flex-row items-center justify-between gap-4'>
        <Image src={btn} alt='btn' width={41} height={41} />
        <p className='cardpara hidden lg:block'>{para}</p>
      </div>

    </div>
    </>
  )
}

export default Card
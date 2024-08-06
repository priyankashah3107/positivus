"use client"
import Image from "next/image"
import React from "react"
interface CaseProps {
  title: string, 
  img: string,
  para: string,
 
}


const Case: React.FC<CaseProps> = ({title, para,  img,}) => {
  return (
    <>
    <div className='card rounded-xl lg:w-full case-slide lg:case-slide-disabled   text-white bg-[#191A23]    h-[310px]' 
     >
      <div className='flex flex-col gap-6'>
      <p className=" w-[180px] lg:w-[286px] lg:text-lg text-base font-normal leading-normal text-white">{title}</p>
      <div className="flex flex-row items-center gap-4">
      <h3 className='text-[#B9FF66]'>{para}</h3>
      <Image src={img} alt="img" width={21} height={21}/>
      </div>
     
       </div>
    </div>
    </>
  )
}

export default Case;


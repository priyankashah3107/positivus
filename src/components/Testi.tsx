"use client"

import { ArrowLeftCircle, ArrowRightCircle, Star } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
interface TestiProps {
  para: string,
  name: string,
  desc: string, 
}

const stars = [{ id: 1, star: "/greenstar.svg" }];

for (let i = 2; i <= 5; i++) {
  stars.push({ id: i, star: "/whitestar.svg" });
}

const Testi: React.FC<TestiProps> = ({para, name, desc}) => {
  const [prev, setPrev] = useState()
  const [next, SetNext] = useState('')
  return (
    <>
    <div className='text-white maindiv   cursor-pointer '>
     <div className='greencard  lg:mt-16 md:w-[606px] md:h-[237px] rounded-sm rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[50px] md:rounded-br-[50px] p-2 border-2  border-[#B9FF66]'>
      <p className='text-white p-10'>{para}</p>
     </div>
        
        <div className='flex flex-col  items-start ml-10 mt-6'>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>

        
     </div>
     
     
<div className=" starcard justify-start relative w-full ">
<div className='text-white flex flex-row justify-center items-center text-center gap-2 lg:gap-6 cursor-pointer absolute -left-96 bottom-0 md:-left-72'>
    <ArrowLeftCircle className='mr-10 lg:mr-10 size-[60px]' />
    {stars.map((val, idx) => (
  <div key={idx} className=''>
    <Image src={val.star} alt='star' width={14} height={14} />
  </div>
))}
    <ArrowRightCircle  className='ml-10 lg:ml-10 size-[60px]'/>
</div>
</div> 
     

    </>
    
  )
}

export default Testi


{/* <div className="flex justify-center w-full ">
<div className='text-white flex flex-row justify-center items-center text-center gap-2 lg:gap-6 cursor-pointer'>
    <ArrowLeftCircle className='mr-10 lg:mr-44 size-[40px]' />
    {stars.map((val, idx) => (
  <div key={idx}>
    <Image src={val.star} alt='star' width={14} height={14} />
  </div>
))}
    <ArrowRightCircle  className='ml-10 lg:ml-44 size-[40px]'/>
</div>
</div> */}
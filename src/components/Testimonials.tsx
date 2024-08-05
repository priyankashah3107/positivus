"use client"
import Testi from './Testi'
import { ArrowLeftCircle, ArrowRightCircle, Star } from 'lucide-react'
import React from 'react'
const head = "Testimonials"
const para = "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"

const stars = [{ id: 1, star: "/greenstar.svg" }];

for (let i = 2; i <= 5; i++) {
  stars.push({ id: i, star: "/whitestar.svg" });
}


const Testimonials = () => {
  return (
   <>
   <div className="p-4 pl-6 lg:pl-20 lg:p-10">
   <div className=' flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-32 lg:mt-24 autoShow'>
        <h2 className='services test  md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>

      <div className="testinomial flex flex-row overflow-hidden md:w-full mt-10 ">
        <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
        <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
        <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
        <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
      </div>
   </div>

  
   </>
  )
}

export default Testimonials
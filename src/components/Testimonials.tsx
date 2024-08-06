// "use client"
// import Testi from './Testi'
// import { ArrowLeftCircle, ArrowRightCircle, Star } from 'lucide-react'
// import React from 'react'
// const head = "Testimonials"
// const para = "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"

// const stars = [{ id: 1, star: "/greenstar.svg" }];

// for (let i = 2; i <= 5; i++) {
//   stars.push({ id: i, star: "/whitestar.svg" });
// }


// const Testimonials = () => {
//   return (
//    <>
//    <div className="p-4 pl-6 lg:pl-20 lg:p-10">
//    <div className=' flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-32 lg:mt-24 autoShow'>
//         <h2 className='services test  md:w-[265px] md:h-[52px]'>{head}</h2>
//         <p className='spara lg:text-lg lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
//       </div>

//       <div className="testinomial flex flex-row overflow-hidden md:w-full mt-10 ">
//         <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
//         <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
//         <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
//         <Testi para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?"} name={"Jhon Smith"} desc={"Marketing Director at XYZ Corp"} />
//       </div>
//    </div>

  
//    </>
//   )
// }

// export default Testimonials



"use client"
import { useState } from 'react';
import Testi from './Testi';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

const head = "Testimonials";
const para = "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services";

const testimonials = [
  {
    id: 1,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur velit culpa veritatis expedita excepturi ut nulla in eius voluptate?",
    name: "John Smith",
    desc: "Marketing Director at XYZ Corp"
  },
  {
    id: 2,
    para: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Jane Doe",
    desc: "CEO at ABC Inc"
  },
  {
    id: 3,
    para: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Alice Johnson",
    desc: "CTO at DEF Ltd"
  },
  {
    id: 4,
    para: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Bob Brown",
    desc: "COO at GHI LLC"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="p-4 pl-6 lg:pl-20 lg:p-10">
      <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-32 lg:mt-24'>
        <h2 className='services test md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>

      <div className="testinomial md:w-full flex flex-col items-center mt-10">
        <div className="relative flex items-center text-white ">
          <ArrowLeftCircle className="cursor-pointer" onClick={handlePrev} />
          <div className="w-full mx-4 ">
            <Testi 
              para={testimonials[currentIndex].para} 
              name={testimonials[currentIndex].name} 
              desc={testimonials[currentIndex].desc} 
            />
          </div>
          <ArrowRightCircle className="cursor-pointer" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

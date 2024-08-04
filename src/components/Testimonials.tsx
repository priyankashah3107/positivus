import React from 'react'

const head = "Testimonials"
const para = "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"

const Testimonials = () => {
  return (
   <>
   <div className="p-4 pl-6 lg:pl-20 lg:p-10">
   <div className=' flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-32 lg:mt-24'>
        <h2 className='services test  md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>

      <div className="testinomial lg:w-full mt-10 ">

      </div>
   </div>
   </>
  )
}

export default Testimonials
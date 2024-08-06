import React from 'react'
import Image from 'next/image'
const happen = "Let’s make things happen"
const para = "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
const btn = "Get your proposal"
const Happen = () => {
  return (
     <>
       <div className='p-4 pl-10  lg:pl-20 lg:p-10'>
       <div className='card bg-[#F3F3F3] w-[390px] h-[400px] md:h-[310px] md:w-full lg:w-full'>
      
        <div className='flex flex-row justify-between lg:gap-52'>
      <div className='flex flex-col gap-6 '>
      <h3 className='card_title lg:text-3xl lg:font-[30px]'>{happen}</h3>
      <p className='cardpara lg:text-lg lg:w-[500px] '>{para}</p>
      <button className='btnn'>{btn}</button>
      </div>
        {/* for image */}
        <Image src={"/happen.png"} alt='happen'
      width={494} height={50} 
      className="h-[280px] hidden lg:block" />
      </div>
       

    </div>
     
     </div>
     </>
  )
}

export default Happen
import React from 'react'
import Heading from './Heading'
import TeamCard from './TeamCard'
const head = "Team"
const para = "Meet the skilled and experienced team behind our successful digital marketing strategies"
const btn = "See all team"
const Team = () => {
  return (
    <>
    <div className="p-4 pl-6 lg:pl-20 lg:p-10"> 

    <div className=' flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-4 lg:mt-24 autoShow '>
        <h2 className='services  md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>
        
       <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:gap-14 lg:mt-20 relative '>
        <TeamCard img='/people/p1.png' name='Jhon Smith' desc='CEO and Founder' icon='/people/glindk.svg' para={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}  />
        <TeamCard img='/people/p1.png' name='Jhon Smith' desc='CEO and Founder' icon='/people/glindk.svg' para={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}  />
        <TeamCard img='/people/p1.png' name='Jhon Smith' desc='CEO and Founder' icon='/people/glindk.svg' para={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}  />
        <TeamCard img='/people/p1.png' name='Jhon Smith' desc='CEO and Founder' icon='/people/glindk.svg' para={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}  />
        <TeamCard img='/people/p1.png' name='Jhon Smith' desc='CEO and Founder' icon='/people/glindk.svg' para={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}  />
        <TeamCard img='/people/p1.png' name='Jhon Smith' desc='CEO and Founder' icon='/people/glindk.svg' para={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}  />
       </div>
         
         <button className='btnn absolute ml-6 mt-14 lg:right-24 lg:mt-10'>{btn}</button>
        

    </div>
    
    </>
  )
}

export default Team
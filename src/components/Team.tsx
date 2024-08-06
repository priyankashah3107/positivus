import React from 'react'
import Heading from './Heading'
import TeamCard from './TeamCard'
const head = "Team"
const para = "Meet the skilled and experienced team behind our successful digital marketing strategies"
const btn = "See all team"
const Team = () => {
  return (
    <>
    <div className="p-4 pl-10 lg:pl-20 lg:p-10"> 

    <div className=' flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-4 lg:mt-24 autoShow '>
        <h2 className='services  md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>
        
       <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:gap-14 lg:mt-20 relative '>
        <TeamCard img='/people/p1.png' name='Jhon Smith' desc='CEO and Founder' icon='/people/glindk.svg' para={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"}  />

        <TeamCard img='/people/p2.png' name='Jane Doe' desc='Director of Operations' icon='/people/glindk.svg' para={"7+ years of experience in project management and team leadership. Strong organizational and communication skills"}  />
        <TeamCard img='/people/p3.png' name='Michael Brown' desc='Senior SEO Specialist' icon='/people/glindk.svg' para={"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"}  />
        <TeamCard img='/people/p4.png' name='Emily Johnson' desc='PPC Manager' icon='/people/glindk.svg' para={"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"}  />
        <TeamCard img='/people/p5.png' name='Brian Williams' desc='Social Media Specialist' icon='/people/glindk.svg' para={"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"}  />
        <TeamCard img='/people/p6.png' name='Sarah Kim' desc='Content Creator' icon='/people/glindk.svg' para={"2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"}  />
       </div>
         
         <button className='btnn absolute ml-6 mt-14 lg:right-24 lg:mt-10'>{btn}</button>
        

    </div>
    
    </>
  )
}

export default Team
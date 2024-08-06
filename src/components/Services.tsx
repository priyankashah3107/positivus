import React from 'react'
import Card from './Card'

const head = "Services";
const para = "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"

const Services = () => {
  return (
    <> 
      <div className='p-4 pl-6 autoShow lg:pl-20 lg:p-10  flex flex-col items-center lg:flex-row gap-6 lg:gap-10 mt-4 lg:mt-24 '>
        <h2 className='services '>{head}</h2>
        <p className='spara lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>
    <div className="p-4 pl-10  lg:pl-20 lg:p-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 mt-4 lg:gap-14">
     <Card title={"Search engine"} title2={"optimization"} img={"/services/s1.png"} btn={"/greenarr.svg"} para={"Learn More"} bgColor='#F3F3F3' 
     titleCol='#B9FF66' titleCol2='#B9FF66' learn="#000000" />

     <Card title={"Pay-per-click"} title2={"advertising"} img={"/services/s2.png"} btn={"/greenarr.svg"} para={"Learn More"} bgColor="#B9FF66"
     titleCol='#ffffff' titleCol2='#ffffff' learn="#000000"/>

     <Card title={"Social Media"} title2={"Marketing"} img={"/services/s3.png"} btn={"/white.svg"} para={"Learn More"} bgColor="#191A23" titleCol='#ffffff' titleCol2='#ffffff' learn="#ffffff" />

     <Card title={"Email"} title2={"Marketing"} img={"/services/s4.png"} btn={"/greenarr.svg"} para={"Learn More"} bgColor='#f3f3f3'
     titleCol='#B9FF66' titleCol2='#B9FF66' learn="#000000" />
     <Card title={"Content"} title2={"Creation"} img={"/services/s5.png"} btn={"/greenarr.svg"} para={"Learn More"} bgColor="#B9FF66"
      titleCol='#ffffff' titleCol2='#ffffff' learn="#000000"   />
     <Card title={"Analytics and"} title2={"Tracking"} img={"/services/s6.png"} btn={"/white.svg"} para={"Learn More"} bgColor="#191A23" 
     titleCol='#B9FF66' titleCol2='#B9FF66' learn="#ffffff" />
     </div>
    </>
  )
}

export default Services



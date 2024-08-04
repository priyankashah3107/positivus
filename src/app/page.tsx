import CaseStudies from '@/components/CaseStudies'
import Happen from '@/components/Happen'
import { Home } from '@/components/Home'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import WorkingProcess from '@/components/WorkingProcess'
import React from 'react'

const page = () => {
  return (
   <>
    <div>
      <Navbar />
      <Home />
      <Logo />
      <Services />
      <Happen />
      <CaseStudies />
      <WorkingProcess />
       <Team />
       <Testimonials />
    </div>
   </>
  )
}

export default page
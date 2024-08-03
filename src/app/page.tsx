import Happen from '@/components/Happen'
import { Home } from '@/components/Home'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
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
    </div>
   </>
  )
}

export default page
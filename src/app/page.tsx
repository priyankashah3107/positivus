import { Home } from '@/components/Home'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
   <>
    <div>
      <Navbar />
      <Home />
      <Logo />
    </div>
   </>
  )
}

export default page
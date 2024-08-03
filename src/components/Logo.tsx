"use client"
import React from 'react';
import logo, {moving} from "../../public/logos/logo.js";
import Image from 'next/image';
const Logo = () => {
  return (
    <>
      <div className='p-4 pl-6  lg:pl-20 lg:p-10  logo-container flex flex-row lg:gap-[60px]'>
        {logo.map((val, idx) => (
          <div key={idx} className='logo-slide'>
            <Image 
            key={idx} 
            src={val.img} 
            alt='logo'
            width={74} 
            height={28}
            className='img'
          />
          </div>
        ))}

       {moving.map((val, idx) => (
          <div key={idx} className='logo-slide'>
            <Image 
            key={idx} 
            src={val.img} 
            alt='logo'
            width={74} 
            height={28}
            className='img'
          />
          </div>
        ))}
         
      </div>
    </>
  );
}

export default Logo;

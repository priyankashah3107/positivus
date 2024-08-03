// "use client"
// import React from 'react'
// import logo from "../../public/logos/logo.js"
// import Image from 'next/image'
// const Logo = () => {
//   return (
//     <>
//      <div className='p-4 pl-6  lg:pl-20 lg:p-10 logo'>
//       {logo.map((val, idx) => (
//         <Image key={idx} 
//         src={val.img} 
//         alt='logo'
//         width={124} height={48}
//         className=''
//          />
//       ))}
//      </div>
//     </>
//   )
// }

// export default Logo

"use client"
import React from 'react';
import logo from "../../public/logos/logo.js";
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className='logo-container flex flex-row lg:gap-[60px]'>
        {logo.map((val, idx) => (
          <Image 
            key={idx} 
            src={val.img} 
            alt='logo'
            width={74} 
            height={28}
            className='logo-item '
          />
        ))}
      </div>
    </>
  );
}

export default Logo;

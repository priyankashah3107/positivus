"use client"
import Image from 'next/image'
import React from 'react'

const fooNav  = [
  {id: 1,
   info: "About us"
  },
  {id: 2,
    info: "Services"
   },
   {id: 3,
    info: "Use Cases"
   },
   {id: 4,
    info: "Pricing"
   },
   {id: 1,
    info: "Blog"
   },

]

const icons =  [
  {
    id: 1,
    icon: "/socials/slinkd.svg"
  },
  {
    id: 2,
    icon: "/socials/face.svg"
  },
  {
    id: 3,
    icon: "/socials/twiiter.svg"
  },
]

const emailInfo = [
  {id: 1,
    info: "Email: info@positivus.com"
   },
   {id: 2,
    info: "Phone: 555-567-8901"
   },
   {id: 2,
    info: "Phone: 555-567-8901"
   },
   {id: 3,
    info: "Address: 1234 Main St Moonstone City, Stardust State 12345"
   },

]

const priv = [
  {id: 1,
    info: "© 2023 Positivus. All Rights Reserved."
    },
    
    {id: 2,
      info: "Privacy Policy"
      },
      

]

const Footer = () => {
  return (
    <div className="p-4 pl-6 lg:pl-20 lg:p-10">
      <div className="foo text-white flex flex-col">

        <div className="flex flex-row justify-between md:pl-20 items-center md:gap-10">
          <div>
          <Image src={"/logo.png"} alt='logo' width={100} height={23}
          className="lg:w-[180px] lg:h-[29px] cursor-pointer" />
          </div>
         
         <div className='flex flex-row gap-10 lg:ml-24'>
         {fooNav.map((val, idx) => (
            <div key={idx}>
                <p className='cursor-pointer'>{val.info}</p>
            </div>
          ))}
         </div>
           
           <div className='flex flex-row gap-10 md:ml-36 items-center hidden lg:block '>
           {icons.map((val) => (
            <Image src={val.icon} alt='icons' width={30} height={30}
            className='flex flex-row gap-10' />
          ))}
           </div>
         
        </div>

        <div className='flex flex-col justify-between ml-20 md:mt-20 md:flex-row'>

          <div className='flex flex-col gap-6'>
          <h3 className='bg-[#B9FF66] rounded-md font-medium text-black w-[115px] h-[23px] md:w-[126px] md:h-[26px]'>Contact us: </h3>
           {emailInfo.map((val, idx) => (
            <p key={idx} className='fooCon md:flex md:flex-start'>{val.info}</p>
           ))}  
          </div>
          
          <div className='fooEmail md:w-[634px] md:h-[184px] md:flex md:flex-row md:ml-20 justify-center items-center '>
            <input type='email' placeholder='Email' className='p-4 border border-white rounded-lg' />
            <button className='bg-[#B9FF66] p-4 text-black rounded-lg font-semibold '>Subscribe to news</button>
          </div>
        </div> 
          
        <div className='border border-b border-white w-full'></div>

        <div className='fooCon md:ml-20 flex flex-row gap-16 items-center'>
          {priv.map((val, idx) => (
            <p key={idx}>{val.info}</p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Footer
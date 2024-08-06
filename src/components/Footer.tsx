"use client";
import Image from 'next/image';
import React from 'react';

const fooNav  = [
  { id: 1, info: "About us" },
  { id: 2, info: "Services" },
  { id: 3, info: "Use Cases" },
  { id: 4, info: "Pricing" },
  { id: 5, info: "Blog" },
];

const icons =  [
  { id: 1, icon: "/socials/slinkd.svg" },
  { id: 2, icon: "/socials/face.svg" },
  { id: 3, icon: "/socials/twiiter.svg" },
];

const emailInfo = [
  { id: 1, info: "Email: info@positivus.com" },
  { id: 2, info: "Phone: 555-567-8901" },
  { id: 3, info: "Address: 1234 Main St Moonstone City, Stardust State 12345" },
];

const priv = [
  { id: 1, info: "© 2023 Positivus. All Rights Reserved." },
  { id: 2, info: "Privacy Policy" },
];

const Footer = () => {
  return (
    <div className="p-4 pl-8 lg:pl-20 lg:p-10  text-white">
      <div className="flex flex-col w-[400px] md:w-full gap-8 bg-gray-900 p-20 rounded-tr-2xl rounded-tl-2xl">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <div>
            <Image src="/logo.png" alt="logo" width={100} height={23} className="cursor-pointer lg:w-[180px] lg:h-[29px]" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 lg:ml-24">
            {fooNav.map((val) => (
              <p key={val.id} className="cursor-pointer fooCon md:text-[20px] items-center text-center md:mb-0 md:underline">{val.info}</p>
            ))}
          </div>
          
          <div className="flex gap-4 md:gap-10 hidden lg:flex">
            {icons.map((val) => (
              <Image key={val.id} src={val.icon} alt="icon" width={30} height={30} className="cursor-pointer" />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 ">
          <div className="flex flex-col gap-2 text-center items-center md:text-start md:items-start">
            <h3 className="bg-[#B9FF66] rounded-md font-medium text-black w-max px-2 py-1">Contact us:</h3>
            {emailInfo.map((val) => (
              <p key={val.id} className="md:flex  fooCon md:text-[20px] leading-[30px] ">{val.info}</p>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 bg-[#292A32] p-10 rounded-xl">
            <input type="email" placeholder="Email" className="p-2 border border-white rounded-lg w-full md:w-auto" />
            <button className="bg-[#B9FF66] p-2 text-black rounded-lg font-semibold w-full md:w-auto">Subscribe to news</button>
          </div>
        </div>
        
        <div className="border-b border-white w-full"></div>
        
        <div className="flex flex-row  items-center gap-4 md:gap-16">
          {priv.map((val) => (
            <p key={val.id} className='fooCon md:text-[20px]'>{val.info}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

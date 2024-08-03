"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Button from "@/components/Button"
const nav = [
  { id: 1, name: "About us" },
  { id: 2, name: "Services" },
  { id: 3, name: "Use Cases" },
  { id: 4, name: "Pricing" },
  { id: 5, name: "Blog" },
  { id: 6, name:  <Button value={"Request a quote"}/>  },
 
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative cursor-pointer ">
      <div className="flex items-center justify-between  p-4 pl-6  lg:pl-8 lg:p-10">
          <Image src={"/logo.svg"} alt='img'
           width={120} 
           height={20} 
          className="logo lg:w-[219px] h-[36px]"/>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden lg:flex lg:flex-row justify-center items-center md:ml-20  lg:gap-20">
          {nav.map((item) => (
            <p key={item.id} className="md:text-medium lg:px-2.5">
              {item.name}
            </p>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-16 w-screen bg-white backdrop-blur-lg shadow-lg border border-white border-opacity-10">
          {nav.map((item) => (
            <div key={item.id} className="p-4 border-b border-white border-opacity-20">
              <p className="nav">{item.name}</p>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;

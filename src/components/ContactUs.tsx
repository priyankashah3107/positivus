import Image from 'next/image'
import React from 'react'
const head = "Contact Us"
const para = "Connect with Us: Let's Discuss Your Digital Marketing Needs"
const btn = "Send Message"
const ContactUs = () => {
  return (
    <>
    <div className="p-4 pl-6 lg:pl-20 lg:p-10">
       
    <div className=' flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-32 lg:mt-24 '>
        <h2 className='services test  md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg lg:text-start lg:text-[18px] md:w-[323px] md:h-[46px]'>{para}</p>
      </div>


      <div className="contact md:w-full mt-20 relative ">
            
             <div className='flex flex-row gap-20 justify-between  md:p-20 '>
             
              <form className='form md:w-[556px] h-[443px]'>
                <div className='flex flex-col gap-14'>
               
                <div className='flex flex-row gap-6 '>
               <div className="flex flex-row gap-4">
               <input type="radio" id="hi" name="hi" value="hi" checked  />
               </div>

               <div className='flex flex-row gap-4'>
               <input type="radio" id="quote" name="quote" value="quote" />
              <label htmlFor="quote">Get a Quote</label>
               </div>
              </div>
                
              <div className="flex flex-col gap-1">
              <label>Name</label>
               <input type='text' placeholder='Name' 
               className="input"
                />
               </div>

               <div className="flex flex-col gap-1">
              <label>Email*</label>
               <input type='email' placeholder='Email'  
               className='input' />
               </div>

               <div className="flex flex-col gap-1">
              <label>Message*</label>
               <input type='text' placeholder='Message' 
               className='input md:h-[auto] '  />
               </div>
                 
                 <button className='btnn'>{btn}</button>
              </div>
              </form>
               
               <div className='size-[600px] absolute right-0 hidden lg:block '>
               <Image src={"/contact.png"} alt='contact' width={600} height={600}
              className='' />
               </div>
           

           
             </div>
      </div>
      </div>
    </>
  )
}

export default ContactUs
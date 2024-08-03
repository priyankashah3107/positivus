import Image from 'next/image'
import React from 'react'

const head = "Case Studies"
const para = "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"

const data = [
  {id: 1, info: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  learn: "Learn more",
  icon: "/icon.svg"
  },
  {id: 2, info: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    learn: "Learn more",
    icon: "/icon.svg"
    },
    {id: 3, info: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      learn: "Learn more",
      icon: "/icon.svg"
      },
      {id: 4, info: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        learn: "Learn more",
        icon: "/icon.svg"
        },
        {id: 5, info: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
          learn: "Learn more",
          icon: "/icon.svg"
          },
          {id: 6, info: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
            learn: "Learn more",
            icon: "/icon.svg"
          }
]

const CaseStudies = () => {
  return (
    <>
      <div className='p-4 pl-6  lg:pl-20 lg:p-10  flex flex-col items-center lg:flex-row gap-6 lg:gap-10 mt-4 lg:mt-24 '>
        <h2 className='services md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg  lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>
        
        <div className='flex flex-row gap-14 p-4 pl-6  lg:pl-20 lg:p-10 logo-contains'>
          {data.map((val, idx) => (
            <div key={idx} className="" >
              <div className='lg:w-full rounded-lg bg-[#191A23] text-[#ffffff] p-4 logo-slide '>
              <p>{val.info}</p>
              <div className='flex flex-row items-center '>
              <p>{val.learn}</p>
               <Image src={val.icon} alt='icon' width={21} height={20} />
              </div>
              </div>
              
            </div>
          ))}
        </div>
        

    </>
  )
}

export default CaseStudies
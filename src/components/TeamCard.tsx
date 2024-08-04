// "use client"
// import Image from 'next/image'
// import React from 'react'

// interface TeamProps {
//   img: string,
//   para: string,
//   name: string,
//   desc: string
//   icon: string
// }

// const TeamCard: React.FC<TeamProps> = ({ name, desc,  img, para, icon}) => {
//   return (
//     <>
//      <div className=" card text-black bg-[#ffffff] w-[390px] h-[294px] lg:w-[387px] lg:h-[331px]">
//       <div className=' flex flex-col gap-4'>
//         <div className='flex flex-row items-center gap-6'>
//           <Image src={img} alt='people' width={100} height={100} />
//           <div className='flex flex-col'>
//              <h3>{name}</h3>
//              <p>{desc}</p>
//           </div>
//           <Image src={icon} alt='icon' width={34} height={34}/>
//         </div>

//         <div className='border-b-2 border-black'></div>
          
//           <div>
//           <p>{para}</p>
//           </div>
        
//        </div>
//     </div>
//     </>
//   )
// }

// export default TeamCard


import Image from 'next/image'
import React from 'react'

interface TeamProps {
  img: string,
  para: string,
  name: string,
  desc: string
  icon: string
}

const TeamCard: React.FC<TeamProps> = ({ name, desc, img, para, icon }) => {
  return (
    <>
      <div className="card  text-black  bg-[#fbfdf5] w-[390px] p-[40px_35px] flex flex-col items-center gap-[10px] lg:w-[387px] lg:h-[354px] lg:items-start">
        <div className='flex flex-col gap-4 lg:w-[290px]'>
          <div className='flex flex-row items-center gap-6 relative'>
            <Image src={img} alt='people' width={70} height={70} />
            <div className='flex flex-col '>
              <h4 className='teamName  lg:text-[20px]'>{name}</h4>
              <p className='teamDesc lg:w-[194px] lg:text-[18px] lg:leading-normal'>{desc}</p>
            </div>
            <Image src={icon} alt='icon' width={34} height={34} className='absolute right-0 top-0' />
          </div>

          <div className='border-b-2 border-black mt-4'></div>

          <div>
            <p className='teamPara lg:text-[18px] lg:w-[317px] mt-4'>{para}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard

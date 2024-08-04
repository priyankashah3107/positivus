// "use client";
// import Image from 'next/image';
// import React, { useState } from 'react';

// const processkeys = [
//   {
//     key: 1,
//     num: "01",
//     title: "Consultation",
//     description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
//     icon: "/plus.svg"
//   },
//   {
//     key: 2,
//     num: "02",
//     title: "Research and Strategy Development",
//     description: "In this phase, we conduct thorough research to gain insights into your industry, competitors, and market trends. Based on these insights, we develop a strategic plan that outlines the most effective marketing tactics to achieve your goals.",
//     icon: "/plus.svg"
//   },
//   {
//     key: 3,
//     num: "03",
//     title: "Implementation",
//     description: "Once the strategy is finalized, we move into the implementation phase. This involves executing the marketing plan across various channels, ensuring each tactic is deployed effectively to reach your target audience and drive results.",
//     icon: "/plus.svg"
//   },
//   {
//     key: 4,
//     num: "04",
//     title: "Monitoring and Optimization",
//     description: "To ensure optimal performance, we continuously monitor the implemented strategies. We analyze data and metrics to identify areas for improvement and make necessary adjustments to enhance the effectiveness of our efforts.",
//     icon: "/plus.svg"
//   },
//   {
//     key: 5,
//     num: "05",
//     title: "Reporting and Communication",
//     description: "Regular reporting keeps you informed of our progress and the impact of our marketing efforts. We provide detailed reports that highlight key performance indicators, results achieved, and insights gained, maintaining open communication throughout the process.",
//     icon: "/plus.svg"
//   },
//   {
//     key: 6,
//     num: "06",
//     title: "Continual Improvement",
//     description: "Marketing is an ongoing process, and we are committed to continual improvement. We constantly evaluate the effectiveness of our strategies, incorporate feedback, and stay updated with the latest industry trends to ensure your marketing efforts remain successful and aligned with your business goals.",
//     icon: "/plus.svg"
//   }
// ];

// const head = "Our Working Process";
// const para = "Step-by-Step Guide to Achieving Your Business Goals";

// const WorkingProcess = () => {
//   const [isPlus, setIsPlus] = useState(true);

//   return (
//     <div className="p-4 pl-6 lg:pl-20 lg:p-10">
//       <div className="flex flex-row items-center gap-6 lg:gap-10 mt-4 lg:mt-24">
//         <h2 className="services md:w-[398px] md:h-[52px]">{head}</h2>
//         <p className="spara  md:w-[292px] lg:text-lg lg:text-start lg:text-[18px]">{para}</p>
//       </div>

//       <div className="p-4 pl-6 lg:pl-20 lg:p-10">
//         {processkeys.map((val, idx) => (
//           <div key={val.key} className="workingP flex flex-row md:flex-row w-[392px] md:w-full p-6 justify-between items-center border-1 border-[#191A23] bg-[#F3F3F3]  mb-6">
//             <div key={idx} className=''>
//               <div className='flex flex-row  items-center justify-between gap-6 ' >
//               <h1 className='num'>{val.num}</h1>
//               <h3 className="text-xl font-bold">{val.title}</h3>
//               <Image src={val.icon} alt="icon" width={30} height={30} className='' />
//               </div>
                
//                 <div className='border-b border-black  md:w-full p-6 hidden'></div>

//               <p className="text-base mt-2 hidden ">{val.description}</p>
//             </div>
           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WorkingProcess;

"use client";
import Image from 'next/image';
import React, { useState } from 'react';


type ProcessKey = {
  key: number;
  num: string,
  title: string,
  description: string,
  icon: string, 
  expandedIcon: string
} 

const processkeys: ProcessKey[] = [
  {
    key: 1,
    num: "01",
    title: "Consultation",
    description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    icon: "/plus.svg",
    expandedIcon: "/minus.svg"
  },
  {
    key: 2,
    num: "02",
    title: "Research and Strategy Development",
    description: "In this phase, we conduct thorough research to gain insights into your industry, competitors, and market trends. Based on these insights, we develop a strategic plan that outlines the most effective marketing tactics to achieve your goals.",
    icon: "/plus.svg",
    expandedIcon: "/minus.svg"
  },
  {
    key: 3,
    num: "03",
    title: "Implementation",
    description: "Once the strategy is finalized, we move into the implementation phase. This involves executing the marketing plan across various channels, ensuring each tactic is deployed effectively to reach your target audience and drive results.",
    icon: "/plus.svg",
    expandedIcon: "/minus.svg"
  },
  {
    key: 4,
    num: "04",
    title: "Monitoring and Optimization",
    description: "To ensure optimal performance, we continuously monitor the implemented strategies. We analyze data and metrics to identify areas for improvement and make necessary adjustments to enhance the effectiveness of our efforts.",
    icon: "/plus.svg",
    expandedIcon: "/minus.svg"
  },
  {
    key: 5,
    num: "05",
    title: "Reporting and Communication",
    description: "Regular reporting keeps you informed of our progress and the impact of our marketing efforts. We provide detailed reports that highlight key performance indicators, results achieved, and insights gained, maintaining open communication throughout the process.",
    icon: "/plus.svg",
    expandedIcon: "/minus.svg"
  },
  {
    key:6,
    num: "06",
    title: "Continual Improvement",
    description: "Marketing is an ongoing process, and we are committed to continual improvement. We constantly evaluate the effectiveness of our strategies, incorporate feedback, and stay updated with the latest industry trends to ensure your marketing efforts remain successful and aligned with your business goals.",
    icon: "/plus.svg",
    expandedIcon: "/minus.svg"
  }
];

const head = "Our Working Process";
const para = "Step-by-Step Guide to Achieving Your Business Goals";


const WorkingProcess = () => {
  const [expandedItems, setExpandedItems] = useState<{[key: number] : boolean}>({});

  const toggleItem = (key: any) => {
    setExpandedItems(prevState => ({
       ...prevState,
       [key]: !prevState[key]
    }))
  }

  return (
    <div className="p-4 pl-6 lg:pl-20 lg:p-10">
      <div className="flex flex-row items-center gap-6 lg:gap-10 mt-4 lg:mt-24">
        <h2 className="services md:w-[398px] md:h-[52px]">{head}</h2>
        <p className="spara md:w-[292px] lg:text-lg lg:text-start lg:text-[18px]">{para}</p>
      </div>

      <div className="p-4 pl-6 lg:pl-20 lg:p-10">
        {processkeys.map((val, idx) => (
          <div
            key={val.key}
            className={`workingP flex flex-row md:flex-row w-[392px] md:w-full p-6 justify-between items-center border-1 border-[#191A23] mb-6 ${expandedItems[val.key] ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'}`}
          >
            <div key={idx} className='w-full'>
              <div className='flex flex-row items-center justify-between gap-6' onClick={() => toggleItem(val.key)}>
                <h1 className='num'>{val.num}</h1>
                <h3 className="text-xl font-bold">{val.title}</h3>
                <Image src={expandedItems[val.key] ? val.expandedIcon : val.icon} alt="icon" width={30} height={30} className='cursor-pointer' />
              </div>

              {expandedItems[val.key] && (
                <>
                  <div className='border-b border-black md:w-full p-6'></div>
                  <p className="text-base mt-2">{val.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingProcess;

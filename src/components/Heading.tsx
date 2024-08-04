import React from 'react'

interface HeadingProps {
  head: string
  para: string,
  hwidth: string,
  pwidth: string
}

const Heading: React.FC<HeadingProps> = ({head, para, hwidth, pwidth}) => {
  return (
    <>
    <div className="flex  flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-4 lg:mt-24 autoShow">
        <h2 className="services md:w-[398px] lg:w-1/3 md:h-[52px]"
        style={{width: hwidth}}
        >{head}</h2>
        <p className="spara md:w-[292px] lg:text-lg lg:text-start lg:text-[18px]"
        style={{width: pwidth}}>{para}</p>
      </div>
    </>
  )
}

export default Heading
import React from 'react'
import Case from './Case'

const head = "Case Studies"
const para = "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"

const CaseStudies = () => {
  return (
    <>
      <div className='p-4 pl-6 lg:pl-20 lg:p-10 flex flex-col items-center gap-6 lg:gap-10 mt-4 lg:mt-24'>
        <h2 className='services md:w-[265px] md:h-[52px]'>{head}</h2>
        <p className='spara lg:text-lg lg:text-start lg:text-[18px] lg:w-[580px]'>{para}</p>
      </div>
        
      <div className='p-4 pl-6 lg:pl-20 lg:p-10 flex flex-row gap-8 w-[350px] md:w-[750px] lg:w-full overflow-hidden cursor-pointer'>

        <Case title={"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."} para={"Learn more"} img={"/icon.svg"} />
        <Case title={"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."} para={"Learn more"} img={"/icon.svg"} />
        <Case title={"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."} para={"Learn more"} img={"/icon.svg"} />
        <Case title={"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."} para={"Learn more"} img={"/icon.svg"} />
      </div>
    </>
  )
}

export default CaseStudies;
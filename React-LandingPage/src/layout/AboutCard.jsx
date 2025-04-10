import React from 'react'

const AboutCard = ({icon,title,contend}) => {
  return (
    <div className=' flex flex-col  items-center gap-2 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl  hover:text-white transition-transform transform hover:bg-emerald-500  hover:-translete-y-2 hover:scale-105  duration-300 border hover:border-0'>
        <span className=' text-lg- font-semibold'>{icon}</span>
        <h3 className='text-sm font-light'>{title}</h3>
        <p>{contend}</p>
      
    </div>
  )
}

export default AboutCard

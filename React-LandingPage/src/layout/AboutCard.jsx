import React from 'react'

const AboutCard = ({icon,title}) => {
  return (
    <div className=' flex flex-col  items-center gap-2 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl hovwe:bg-black hover:text-green-400 transition-transform transform hover:bg-black  hover:-translete-y-2 hover:scale-105  duration-300'>
        <span className=' text-lg- font-semibold'>{icon}</span>
        <h3 className='text-sm font-light'>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, veniam amet consectetur ipsum ea quam?</p>
      
    </div>
  )
}

export default AboutCard

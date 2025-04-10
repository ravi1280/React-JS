import React from 'react'

const ReviewCard = ({img , title}) => {
  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]  p-5 rounded-2xl transition-transform transform hover:scale-95 duration-300 bg-zinc-800 '>
        <img className='rounded-2xl' src={img} alt="img" />
        <h3 className='text-lg- font-semibold text-center mt-3 '>{title}</h3>
        <p className='font-light text-sm mt-5  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, placeat aperiam nemo quibusdam blanditiis quia totam, odio provident nostrum, esse ratione aspernatur at velit assumenda veritatis vitae similique? Exercitationem, quasi.</p>
      
    </div>
  )
}

export default ReviewCard

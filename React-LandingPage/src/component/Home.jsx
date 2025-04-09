import React from 'react'
import video from "../assets/video/Hero.mp4"
import img from "../assets/img/Character.png"

const Home = () => {
  return (
    <div className=' relative min-h-screen'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted playsInline>
        <source src={video} type="video/mp4"/>
      </video>
      <div className=' min-h-screen relative z-10 flex flex-row items-center  justify-between px-5 md:px-14 bg-black/50 text-white'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl  font-semibold'>hello . helllo</h3>
          <h1 className='text-5xl font-bold'>Uthenticate</h1>
          <p className=' w-full  md:w-3/4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus magni eaque alias nihil nemo eligendi, dolor aspernatur voluptatum tenetur numquam.</p>
          <p className=' w-full  md:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque obcaecati ipsum, cumque, rerum officia et minima quod reprehenderit hic commodi est necessitatibus. Veritatis delectus quidem asperiores, pariatur reprehenderit deleniti.</p>
          <button className='w-3/4 md:w-1/4 py-1 bg-orange-500 px-2  rounded-lg hover:text-black hover:bg-white transition duration-300 ease-in-out cursor-pointer"'>Expore More !</button>
        </div>
        <div className='hidden  lg:flex w-3/4 rounded-fill   justify-center'>
          <img className='h-150 text-center'  src={img} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Home

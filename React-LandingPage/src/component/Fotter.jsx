import React from 'react'

const Fotter = () => {
  return (
    <footer className=' bg-black text-white rounded-t-3xl mt-8 md:mt-0 '>
      <div className=' flex flex-col md:flex-row justify-between px-5 md:px-32 p-8 '>
        <div className='w-full md:w-1/4'>
          <h1 className=' font-semibold  text-xl  pb-4'>Footer</h1>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            veniam eius libero quisquam praesentium nostrum, optio quas quasi
            vel iusto?
          </p>
        </div>
        <div>
          <h1 className='font-medium  text-xl pb-4 pt-5 md:pt-0'>Links</h1>
          <nav className='flex flex-col gap-2'>
          <a className='text-orange-400 transition-all cursor-point' href="/">Home</a>
          <a className='text-orange-400 transition-all cursor-point' href="/">About Us</a>
          <a className='text-orange-400 transition-all cursor-point' href="/">Product</a> 
          <a className='text-orange-400 transition-all cursor-point' href="/">Conatct Us</a>
          </nav>
          
        </div>
        <div>
            <h1 className='font-medium  text-xl pb-4 pt-5 md:pt-0'>
                My Special
            </h1>
            <nav className='flex flex-col gap-2'>
            <a className='text-orange-400 transition-all cursor-point' href="/">Premium Quality</a>
            <a className='text-orange-400 transition-all cursor-point' href="/">Exotic Falvors</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium  text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
            <nav className='flex flex-col gap-2'>
            <a className='text-orange-400 transition-all cursor-point' href="/">User@gmaul.com</a>
            <a className='text-orange-400 transition-all cursor-point' href="/">+94587454546</a>
            <a className='text-orange-400 transition-all cursor-point' href="/">Socail Media</a>
            </nav>

        </div>
      </div>
      <div >
        <p className='text-center  py-4'>@copyright develop By <span className='text-orange-600'>Ravishka Indraji</span> | All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Fotter

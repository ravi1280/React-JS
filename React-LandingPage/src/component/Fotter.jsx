import React from 'react'

const Fotter = () => {
  return (
    <footer className=' bg-black text-white rounded-t-3xl   inset-shadow-sm inset-shadow-emerald-500' id='footer'>
      <div className=' flex flex-col md:flex-row justify-between px-5 md:px-32 p-8  '>
        <div className='w-full md:w-2/4 mt-8'>
          <h1 className=' font-semibold  text-xl  pb-4'>Stay Connected with AvatarX</h1>
          <p className='text-md'>
          At avatarX, we’re passionate about bridging the gap between creators and collectors in the digital space. Whether you’re looking to showcase your work, build your collection, or explore new trends, we're here to help you every step of the way. Stay connected with us for the latest updates, new releases, and helpful resources. Let’s shape the future of digital art and collectibles together
          </p>
        </div>
        <div className='mt-8'>
          <h1 className='font-medium  text-xl pb-4 pt-5 md:pt-0'>Links</h1>
          <nav className='flex flex-col gap-2'>
          <a className='text-emerald-400 transition-all cursor-point' href="/">Home</a>
          <a className='text-emerald-400 transition-all cursor-point' href="/">About Us</a>
          <a className='text-emerald-400 transition-all cursor-point' href="/">Product</a> 
          <a className='text-emerald-400 transition-all cursor-point' href="/">Conatct Us</a>
          </nav>
          
        </div>
       
        <div className='mt-8'>
            <h1 className='font-medium  text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
            <nav className='flex flex-col gap-2'>
            <a className='text-emerald-400 transition-all cursor-point' href="/">support@avatarx.com</a>
            <a className='text-emerald-400 transition-all cursor-point' href="/">+94587454546</a>
            <a className='text-emerald-400 transition-all cursor-point' href="/">Socail Media</a>
            </nav>

        </div>
      </div>
      <div >
        <p className='text-center  py-4'> &copy; 2025 <span className='text-emerald-600'>avatarX.</span> |  All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Fotter

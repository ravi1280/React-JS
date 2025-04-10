import React from 'react'
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative  min-h-screen  flex justify-center items-center bg-[url('/src/assets/img/banner3.jpg')] bg-cover bg-center mt-10">
      <div className='absolute inset-0  bg-black/30 '></div>
      <motion.div 
    

      className='relative z-10  w-full md:w-3/5  bg-black/50 text-white p-10 mx-5 space-y-5 rounded-lg hover:scale-110 duration-300' >
        <h1 className=' text-4xl font-bold'>Step into the Future of Digital Art & Collectibles</h1>
        <p className='text-sm font-light text-emerald-400'>
        Join the next generation of digital collectors and creators! At avatarX, we offer a seamless and secure platform to buy, sell, and trade exclusive NFTs. Whether you're an artist showcasing your creations or a collector looking for the next big thing, avatarX is your gateway to the exciting world of digital ownership. Explore unique avatars, stunning artwork, music, virtual real estate, and much more. The digital revolution is here, and it’s time to own what you create and cherish what you collect.
        </p>
        <button className='bg-emerald-500 px-5 py-2  rounded-lg hover:bg-white  hover:text-black transition duration-300 ease-in-out  cursor-pointer'>Start Exploring Now</button>
      </motion.div>
    </div>
  );
}

export default Banner

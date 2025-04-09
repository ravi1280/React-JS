import React from 'react'

const Banner = () => {
  return (
    <div className="relative  min-h-screen  flex justify-center items-center bg-[url('/src/assets/img/banner3.jpg')] bg-cover bg-center">
      <div className='absolute inset-0  bg-black/30 '></div>
      <div className='relative z-10  w-full md:w-2/4  bg-black/50 text-white p-10 mx-5 space-y-5 rounded-lg'>
        <h1 className=' text-4xl font-bold'>Spicing Up Every Product</h1>
        <p className='text-sm font-light text-green-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          excepturi. Dignissimos necessitatibus velit sed deserunt delectus
          consequuntur sint est facilis assumenda quam, quaerat possimus
          voluptatibus ducimus inventore impedit nam accusantium.
        </p>
        <button className='bg-green-500 px-5 py-2  rounded-lg hover:bg-white  hover:text-black transition duration-300 ease-in-out  cursor-pointer'>Order Now</button>
      </div>
    </div>
  );
}

export default Banner

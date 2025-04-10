import React from 'react'

const ProductCard = ({img,title ,contend}) => {
  return (
    <div className=" bg-zinc-800 p-3.5  rounded-lg text-center space-y-2 group hover:cursor-pointer hover:shadow-[0_4px_20px_rgba(52,211,153,0.3)] transition duration-300 ease-in-out mt-10 ">
      <div className='flex  items-center justify-center'>
      <img src={img} alt="img" className="rounded-2xl h-70 group-hover:scale-135 duration-300" /></div>
      <h3 className=" text-white text-lg-font-semibold group-hover:opacity-0 ">{title}</h3>
      <div className="flex  items-center justify-center">
        <p className="text-sm  font-light group-hover:opacity-0 transition-opacity  duration-300 p-5">
          {contend}
        </p>
        <button className="opacity-0 group-hover:opacity-100 bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold transition-opacity duration-300 absolute ">
          View Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard

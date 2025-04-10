import React from 'react'

const ProductCard = ({img,title ,contend}) => {
  return (
    <div className=" bg-zinc-800 p-3.5  rounded-lg text-center space-y-2 group hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 ease-in-out  ">
      <div className='flex  items-center justify-center'>
      <img src={img} alt="img" className="rounded-2xl h-70 " /></div>
      <h3 className=" text-white text-lg-font-semibold ">{title}</h3>
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

import React from 'react'

const ProductCard = ({img,title}) => {
  return (
    <div className=" bg-gray-200 p-3.5  rounded-lg text-center space-y-2 group hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-300 ease-in-out">
      <img src={img} alt="img" className="rounded-2xl" />
      <h3 className=" text-black text-lg-font-semibold ">{title}</h3>
      <div className="flex  items-center justify-center">
        <p className="text-sm text-black font-light group-hover:opacity-0 transition-opacity  duration-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae
          deserunt omnis quisquam dolore autem itaque necessitatibus odit
          recusandae saepe beatae nisi fugiat, quidem non.
        </p>
        <button className="opacity-0 group-hover:opacity-100 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold transition-opacity duration-300 absolute ">
          View Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard

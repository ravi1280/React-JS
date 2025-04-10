import React from 'react'
import img1 from "../assets/img/prod1.jpg"
import img2 from "../assets/img/prod2.jpg"
import img3 from "../assets/img/prod3.jpg"
import img4 from "../assets/img/prod4.jpg"
import img5 from "../assets/img/prod5.jpg"
import img6 from "../assets/img/prod6.jpg"
import ProductCard from '../layout/ProductCard'

const Product = () => {
  return (
    <div className='min-h-screen  px-5 md:px-14 py-8'>
      <h1 className='text-4xl text-emerald-500  text-center font-bold py-5'>Our Products !</h1>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-14 mt-2'>
      <ProductCard img={img1} title={"POS System"}/>
      <ProductCard img={img2} title={"POS System"}/>
      <ProductCard img={img3} title={"POS System"}/>
      <ProductCard img={img4} title={"POS System"}/>
      <ProductCard img={img5} title={"POS System"}/>
      <ProductCard img={img6} title={"POS System"}/>
      </div>
     
    </div>
  )
}

export default Product

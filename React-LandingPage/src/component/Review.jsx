import React from 'react'
import img1 from "../assets/img/review1.jpg"
import img2 from "../assets/img/review2.jpg"
import img3 from "../assets/img/review3.jpg"
import ReviewCard from '../layout/ReviewCard'


const Review = () => {
  return (
    <div className='px-5 md:px-14'>
      <h1 className='text-center  text-4xl font-bold py-5'>That People Say !</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
        <ReviewCard img={img1} title="James Anderson " />
        <ReviewCard img={img2} title="James Anderson " />
        <ReviewCard img={img3} title="James Anderson " />
      </div>
    </div>
  );
}

export default Review

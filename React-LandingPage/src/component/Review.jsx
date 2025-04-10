import React from 'react'
import img1 from "../assets/img/Review1.png"
import img2 from "../assets/img/Review2.png"
import img3 from "../assets/img/Review3.png"
import ReviewCard from '../layout/ReviewCard'


const Review = () => {
  return (
    <div className="px-5 md:px-14 ">
      <h1 className="text-center  text-4xl font-bold py-5 text-emerald-400 mt-10">
        That People Say 
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <ReviewCard
          img={img1}
          title="John D . ( Digital Artist )"
          contend={
            "I’ve been into NFTs for a while, but avatarX took the experience to a whole new level. The platform is easy to use, and I love how simple it is to buy and sell exclusive digital creations. Highly recommend it to anyone looking to explore the NFT world!"
          }
        />
        <ReviewCard
          img={img2}
          title="Sarah W . ( NFT Collector )"
          contend={
            "I found some of the most rare and valuable digital collectibles on avatarX. The variety of NFTs available, from avatars to music tracks, is unmatched. It's a one-stop shop for every NFT enthusiast!"
          }
        />
        <ReviewCard
          img={img3}
          title="Mike L . ( Digital Entrepreneur )"
          contend={
            "The team at avatarX is fantastic! I had a few questions about the purchasing process, and their customer service was incredibly helpful. The whole buying and selling process is smooth, and I feel secure with every transaction."
          }
        />
      </div>
    </div>
  );
}

export default Review

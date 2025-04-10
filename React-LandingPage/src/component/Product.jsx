import React from 'react'
import img6 from "../assets/img/prod1.png"
import img2 from "../assets/img/prod2.png"
import img4 from "../assets/img/prod3.png"
import img1 from "../assets/img/prod4.png"
import img5 from "../assets/img/prod5.png"
import img3 from "../assets/img/prod6.png"
// import img6 from "../assets/img/Character.png"
import ProductCard from '../layout/ProductCard'

const Product = () => {
  return (
    <div className="min-h-screen  px-5 md:px-14 py-8" id='product'>
      <h1 className="text-4xl text-emerald-500  text-center font-bold py-5">
        Gallery
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-14 mt-2">
        <ProductCard
          img={img1}
          title={"The Digital Future"}
          contend={
            "Explore our exclusive digital avatars, each designed to capture a futuristic and personalized identity."
          }
        />
        <ProductCard
          img={img2}
          title={"Creator's Art"}
          contend={
            "Showcasing the finest creations by talented artists, available exclusively as NFTs. Own a piece of digital art history."
          }
        />
        <ProductCard
          img={img3}
          title={"Digital Real Estate"}
          contend={
            " Invest in virtual lands and properties. Buy, sell, or develop in the metaverse with exclusive virtual assets."
          }
        />
        <ProductCard
          img={img4}
          title={"Music for the Digital Age"}
          contend={
            "Unlock limited-edition music albums and tracks as NFTs, giving you ownership of exclusive sound experiences."
          } 
        />
        <ProductCard
          img={img5}
          title={"Rare Collectibles"}
          contend={
            "Get your hands on limited-edition NFTs, collectible items that will forever remain one of a kind in the digital world."
          }
        />
        <ProductCard
          img={img6}
          title={"Collaboration Projects"}
          contend={
            " Experience collaboration at its best—where multiple creators join forces to create a unique NFT project. Own a part of their collective creativity."
          }
        />
      </div>
    </div>
  );
}

export default Product

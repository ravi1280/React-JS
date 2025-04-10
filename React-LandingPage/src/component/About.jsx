import React from 'react'
import AboutCard from '../layout/AboutCard'
import { FaCogs} from "react-icons/fa";
import {  FaExchangeAlt } from "react-icons/fa";
import { FaDna } from "react-icons/fa";

const About = () => {
  return (
    <div className='px-5 md:px-14  py-10' id='aboutUs'>
      <h1 className='text-center text-4xl font-bold py-5 text-emerald-500'>Why Choose AvatarX </h1>
      <div className=' grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8'>
        <AboutCard
          icon={
            <FaDna size={45} className=" text-white" />
          }
          title="Own What You Create"
          contend="Every avatar is minted as a unique NFT on the blockchain — fully yours, forever. No duplicates. No limits. Just true digital identity you can trade or showcase."
        />
        <AboutCard
          icon={
            <FaCogs size={45} className=" text-white " />
          }
          title="Customize Every Detail"
          contend="Choose from vibrant styles, themes, and traits to build your perfect digital persona. Your avatar, your rules — crafted for self-expression in any universe."
        />
        <AboutCard
          icon={
            <FaExchangeAlt size={45} className=" text-white" />
          }
          title="Buy, Sell & Connect"
          contend="Join a growing community of collectors and creators. Explore rare drops, list your avatars, and connect through the AvatarX marketplace powered by Web3."
        />
      </div>
    </div>
  );
}

export default About

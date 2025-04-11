import React from "react";
import video from "../assets/video/Hero.mp4";
import img from "../assets/img/Character.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const [move, setMove] = React.useState(false);

  function onSplineMouseDown(e) {
    if (e.target.name === "Cube") {
      console.log("I have been clicked!");
    }
  }
  return (
    <div className=" relative min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className=" min-h-screen relative z-10 flex flex-row items-center  justify-between px-5 md:px-14 bg-black/50 text-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold">
            <TypeAnimation
              sequence={[
                "Discover Rare Digital Art",
                2000,
                "Trade Digital Art",
                2000,
                "Own What You Love",
                2000,
                "Explore the Metaverse",
                2000,
              ]}
              wrapper="span"
              speed={40}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className=" w-full  md:w-3/4">
            AvatarX is the ultimate NFT avatar marketplace — where creativity
            meets true digital ownership. Discover limited-edition,
            blockchain-backed avatars that are uniquely yours.
          </p>
          <p className=" w-full  md:w-3/4">
            Join a new era of collectors, creators, and explorers. Customize,
            mint, and showcase your NFT-style avatars across platforms, games,
            and the metaverse.
          </p>
          <button className="w-3/4 md:w-1/4 py-1 bg-emerald-500 px-2 py-2  rounded-lg hover:text-black hover:bg-white transition duration-300 ease-in-out cursor-pointer ">
            Explore More !
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden  lg:flex w-3/4 rounded-fill   justify-center"
        >
       
          <img className="h-140 text-center" src={img} alt="img" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

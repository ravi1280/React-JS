import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import  img1  from "../assets/Images/img1.png";
import  img2  from "../assets/Images/img2.png";
import  img3  from "../assets/Images/img3.png";
import  img4  from "../assets/Images/img4.png";
import  img5  from "../assets/Images/img5.png";
import  img6  from "../assets/Images/img6.png";
import  img7  from "../assets/Images/img7.png";
import  img8  from "../assets/Images/img8.png";
import  img9  from "../assets/Images/img9.png";
import  img10  from "../assets/Images/img11.png";
import  img12  from "../assets/Images/img12.png";
import  img13  from "../assets/Images/img13.png";

 const DragCard = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        Ravishka<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={img1}
        alt="Example image"
        rotate="6deg"
        top="60%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src={img2}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={img3}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src={img4}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={img5}
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src={img6}
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="35%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src={img7}
        alt="Example image"
        rotate="-3deg"
        top="50%"
        left="52%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src={img8}
        alt="Example image"
        rotate="-3deg"
        top="15%"
        left="25%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src={img9}
        alt="Example image"
        rotate="6deg"
        top="45%"
        left="15%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src={img10}
        alt="Example image"
        rotate="-10deg"
        top="5%"
        left="5%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 ",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
        // dragMomentum={false}
      dragElastic={0.65}
    />
  );
};

export default DragCard;
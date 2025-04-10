import React from 'react'
import { motion } from "framer-motion";

const AboutCard = ({icon,title,contend}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    
      className=" flex flex-col  items-center gap-2 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl  hover:text-white transition-transform transform hover:bg-emerald-500  hover:-translete-y-2 hover:scale-105  duration-300 border hover:border-0"
    >
      <span className=" text-lg- font-semibold">{icon}</span>
      <h3 className="text-sm font-light">{title}</h3>
      <p>{contend}</p>
    </motion.div>
  );
}

export default AboutCard

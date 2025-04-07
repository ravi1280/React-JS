import React, { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineClose,AiOutlineMenuUnfold} from 'react-icons/ai';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleaChange = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="flex  justify-between px-5 py-5 lg:px-14 md:px-10 bg-black text-white">
        <div>
          <span className="text-xl font-bold">Ravishka Inraji</span>
        </div>

        <nav className="hidden lg:flex items-center  gap-8 px-20">
          <a
            href="/Home"
            className="hover:text-orange-400 transition duration-300 ease-linear"
          >
            {" "}
            Home
          </a>
          <a
            href="/Home"
            className="hover:text-orange-400 transition duration-300 ease-linear"
          >
            {" "}
            About Us
          </a>
          <a
            href="/Home"
            className="hover:text-orange-400 transition duration-300 ease-linear"
          >
            {" "}
            Project
          </a>
          <a
            href="/Home"
            className="hover:text-orange-400 transition duration-300 ease-linear"
          >
            {" "}
            Contact Us
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <FaShoppingCart className="" size={26} />
          <button className=" bg-orange-500 px-2 py-1 rounded-lg hover:text-black hover:bg-white transition duration-300 ease-in-out cursor-pointer">
            Sign In
          </button>
        </div>
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={26} onClick={handleaChange} />
          ) : (
            <AiOutlineMenuUnfold size={26} onClick={handleaChange} />
          )}
        </div>
      </div>
      
      {/* <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-400`}
      >
        <a
          href="/Home"
          className="hover:text-orange-400 transition duration-300 ease-linear"
        >
          {" "}
          Home
        </a>
        <a
          href="/Home"
          className="hover:text-orange-400 transition duration-300 ease-linear"
        >
          {" "}
          About Us
        </a>
        <a
          href="/Home"
          className="hover:text-orange-400 transition duration-300 ease-linear"
        >
          {" "}
          Project
        </a>
        <a
          href="/Home"
          className="hover:text-orange-400 transition duration-300 ease-linear"
        >
          {" "}
          Contact Us
        </a>
      </div> */}
    </>
  );
};

export default Navbar

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    //jika ingin transparan ganti jadi navbar-fixed (index.css)
    <div className="fixed bg-white top-0 shadow w-full">
      <div className="flex justify-between items-center h-24 mx-auto px-4 lg:px-24">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-[38px]" />
          <h1 className="text-2xl font-bold text-primary font-tt-firs-neue ml-2">
            thofolio
          </h1>
        </div>
        <ul className=" hidden md:flex text-secondary font-medium gap-12 font-tt-firs-neue ">
          <li className="p-4 hover:text-primary hover:font-bold">
            UI/UX Design
          </li>
          <li className="p-4 hover:text-primary hover:font-bold">
            Web Developer
          </li>
          <li className="p-4 hover:text-primary hover:font-bold">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          <AiOutlineMenu size={30} />
          {/* animasi button mobile 
        {nav ? (
          <AiOutlineClose size={30} className="animate-vote" />
        ) : (
          <AiOutlineMenu size={30} className="animate-vote2" />
        )} */}
        </div>
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[50%] h-screen bg-white ease-in-out duration-500"
              : "fixed right-[-100%] top-0 h-screen bg-white  ease-in-out duration-500"
          }
        >
          <div>
            <AiOutlineClose
              size={30}
              className="absolute top-8 right-4"
              onClick={handleNav}
            />
          </div>
          <ul className="p-4 font-tt-firs-neue text-secondary font-medium mt-[70px]">
            <li className="p-2 hover:text-primary hover:font-bold border-b border-gray-300">
              UI/UX Design
            </li>
            <li className="p-2 hover:text-primary hover:font-bold border-b border-gray-300">
              Web Developer
            </li>
            <li className="p-2 hover:text-primary hover:font-bold border-b border-gray-300">
              Contacts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 lg:px-24">
      <h1 className="text-2xl font-bold text-black font-tt-firs-neue">
        thofolio
      </h1>
      <ul className=" hidden lg:flex text-black font-medium gap-12 font-tt-firs-neue">
        <li className="p-4">UI/UX Design</li>
        <li className="p-4">Web Development</li>
        <li className="p-4">Contacts</li>
      </ul>
      <button className="hidden lg:block text-black font-medium font-tt-firs-neue bg-primary px-8 py-2 rounded-full">
        Sign in
      </button>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <AiOutlineClose size={30} className="animate-vote" />
        ) : (
          <AiOutlineMenu size={30} className="animate-vote2" />
        )}
      </div>
    </div>
  );
};

export default Navbar;

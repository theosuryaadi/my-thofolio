import React from "react";
import { ReactTyped } from "react-typed";
import Me from "../assets/me.png";

export const Hero = () => {
  return (
    <div
      id="home"
      className="md:grid md:grid-cols-2 items-center justify-center bg-primary text-white rounded-[2.5rem] md:rounded-[3.5rem] mt-[120px] mx-4 xl:mx-24 p-10 lg:p-24"
    >
      <div className="">
        <h2 className="text-2xl lg:text-3xl font-medium font-tt-firs-neue">
          Hi, I'm Theo.
        </h2>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-tt-firs-neue font-bold mt-4">
          I'm a <br />
          <ReactTyped
            className="text-primary bg-white"
            strings={["UI/UX Designer", "Web Developer"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          ></ReactTyped>
        </h1>
        <p className="md:text-sm lg:text-md xl:text-lg font-tt-firs-neue font-normal mt-4 md:w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quia
          reprehenderit.
        </p>
        <button className="font-tt-firs-neue font-medium text-[14px] w-[150px] lg:text-lg lg:w-[200px] py-3 mt-4 border rounded-xl text-white hover:bg-white hover:text-primary ease-in-out duration-300">
          View My Projects
        </button>
      </div>
      <div className="flex justify-center">
        <img src={Me} alt="Me" className="w-[100%]" />
      </div>
    </div>
  );
};

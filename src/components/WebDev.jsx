import React from "react";
import WebsiteMA from "../assets/website_ma.png";

const WebDev = () => {
  return (
    <div id="webdeveloper" className="font-tt-firs-neue max-h-full">
      <div className="w-full bg-gray p-10 mt-6">
        <h1 className="text-center font-bold text-2xl lg:text-3xl text-primary">
          Web Developer
        </h1>
      </div>
      <div className="mt-4 mx-4 md:grid md:grid-cols-2">
        <img className="rounded-xl " src={WebsiteMA} alt="website MA" />
        <div className="mt-4 md:ml-4">
          <p>Project Internal Website Metrodata Academy</p>
          <a href="https://metrodataacademy.id/" target="_blank">
            <button className="w-[160px] py-3 mt-4 rounded-lg bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border">
              Selengkapnya
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDev;

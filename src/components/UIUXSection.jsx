import React from "react";
import Carousel from "./Carousel";

const UIUXSection = () => {
  return (
    <div className="font-tt-firs-neue max-h-full">
      <div className="w-full bg-gray p-10 mt-6">
        <h1 className="text-center font-bold text-2xl lg:text-3xl text-primary">
          UI/UX Design
        </h1>
      </div>
      <div className="mx-4">
        <Carousel />
      </div>
    </div>
  );
};

export default UIUXSection;

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*o5TbgZ5PhTupyWj6qwwJ8g.jpeg",
      desciprion:
        "UI/UX Case Study ini merupakan salah satu Challenge yang diberikan oleh Skilvul dan sangat penting untuk berkarir sebagai UI/UX Designer.",
    },
    {
      url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5m2WVENzNwEbwnjRUAIICg.jpeg",
      desciprion:
        "UI/UX Case Study ini merupakan Final Challenge yang diberikan oleh Skilvul dan sangat penting untuk berkarir sebagai UI/UX Designer.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.lengths]);

  return (
    <div className="md:grid md:grid-cols-2 md:h-[280px] lg:h-[350px]">
      <div className="h-[200px] sm:h-[300px] md:h-[200px] lg:h-[280px] xl:w-[600px] xl:ms-auto mt-4 group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-t-2xl bg-cover duration-500"
        ></div>
        {/* Left Arrow
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        Right Arrow
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div> */}
        <div className="bg-white shadow-lg rounded-b-2xl">
          <div className="flex top-4 justify-center py-2 cursor-pointer">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)}>
                {currentIndex === slideIndex ? (
                  <RxDotFilled size={20} className="text-primary" />
                ) : (
                  <RxDotFilled size={20} className="text-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 md:mx-4 md:mt-4 xl:w-[450px]">
        <p className="">{slides[currentIndex].desciprion}</p>
        <a href="https://medium.com/@theosuryaadi" target="_blank">
          <button className="w-[160px] py-3 mt-4 rounded-lg bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border">
            Selengkapnya
          </button>
        </a>
      </div>
    </div>
  );
};

export default Carousel;

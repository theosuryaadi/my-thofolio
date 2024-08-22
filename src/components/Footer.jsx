import React from "react";
import { FaInstagram, FaYoutube, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary pt-10 pb-8 mt-6">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/2">
            <h2 className="font-bold text-4xl text-white mb-5">Thofolio</h2>
            <h3 className="font-bold text-2xl mb-2">Contact Me:</h3>
            <p>theosuryaadi@gmail.com</p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/2">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="inline-block text-base hover:text-white mb-3"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#uiuxdesign"
                  className="inline-block text-base hover:text-white mb-3"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#webdeveloper"
                  className="inline-block text-base hover:text-white mb-3"
                >
                  Web Developer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            <a
              href="https://www.youtube.com/@thofolio"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.instagram.com/thofolio9/"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://medium.com/@theosuryaadi"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <FaMedium size={20} />
            </a>
          </div>
          <p className="font-medium text-xs text-white text-center">
            Dibuat menggunakan Vite + ReactJS + Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

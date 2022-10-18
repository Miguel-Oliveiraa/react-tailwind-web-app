import React from "react";
import Typed from "react-typed";

export function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center py-4">
          <p className="text-xl font-bold sm:text-4xl md:text-5xl">
            Fast, Flexible financing for
          </p>
          <Typed
            className="text-xl font-bold sm:text-4xl pl-2 md:pl-4 md:text-5xl"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-sm font-medium my-6 mx-auto px-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

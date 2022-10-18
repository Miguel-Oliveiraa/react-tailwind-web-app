import React from "react";
import Laptop from "../assets/laptop.jpg";

export function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl font-bold py-2 sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptas voluptatum, atque provident, modi possimus nostrum laborum
            exercitationem earum quos error ducimus at, culpa voluptate porro
            eaque dolores! Atque, facere.
          </p>
          <button className="bg-black w-[200px] rounded-sm font-medium my-6 mx-auto px-6 py-3 text-[#00df9a] md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

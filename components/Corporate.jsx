/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { corporate1 } from "../public/assets/corporate1.jpeg";

const Corporate = () => {
  return (
    <div className="w-full bg-white border-b-[1px] border-[#d4c4c4] pb-3">
      <div className="max-w-4xl mx-auto flex flex-col  pt-4 ">
        <h1 className="font-bold text-2xl text-center ">
          OUR CORPORATE AND FOUNDATION SUPPORTERS
        </h1>
        <div className="  grid  grid-cols-4 gap-11 place-items-center mt-6 ">
          <div className="relative h-full w-full ">
            <img src="/assets/corporate1.jpeg" alt="" />
          </div>
          <div className="relative h-full w-full ">
            <img src="/assets/corporate2.svg" alt="" />
          </div>
          <div className="relative h-full w-full ">
            <img src="/assets/corporate3.svg" alt="" />
          </div>
          <div className="relative h-full w-full ">
            <img src="/assets/corporate4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;

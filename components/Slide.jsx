import Image from "next/image";
import React from "react";
import chalk from "../public/assets/chalk.png";

const Slide = () => {
  return (
    <div className="w-full bg-blue-500 ">
      <div className="max-w-[95%] bg-red-400 mx-auto flex">
        <div className="w-[5%] inline-flex items-center ">A</div>
        <div className="w-[90%]  my-5 grid grid-cols-3  ">
          <div className="col-span-1">
            <Image src={chalk} alt="" objectFit="contain" />
          </div>
          <div className="col-span-2">
            <h1>Conversations with inspiring MIT faculty</h1>
            <h1>about how they teach.</h1>

            <h1>Listen now.</h1>
          </div>
        </div>
        <div className="w-[5%] inline-flex items-center justify-end ">A</div>
      </div>
    </div>
  );
};

export default Slide;

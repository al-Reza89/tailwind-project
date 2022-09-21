import Image from "next/image";
import React from "react";
import chalk from "../public/assets/chalk.png";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Slide = () => {
  return (
    <div className="w-full h-auto">
      <div className="max-w-[95%] mx-auto flex">
        <div className="w-[5%] inline-flex items-center ">
          <GoChevronLeft className="h-14 w-14 cursor-pointer " />
        </div>
        <div className="w-[70%] mx-auto  my-3 grid grid-cols-3 gap-3 pl-4 ">
          <div className="col-span-1 hidden xs:inline-grid ">
            <Image src={chalk} alt="" objectFit="contain" />
          </div>
          <div className="xs:col-span-2 col-span-3 flex flex-col">
            <h1 className="text-xl lg:text-2xl font-bold ">
              Conversations with inspiring MIT faculty
            </h1>
            <h1 className=" text-xl lg:text-2xl font-bold ">
              about how they teach.
            </h1>

            <h1 className="text-lg underline underline-offset-2 py-4">
              Listen now.
            </h1>
          </div>
        </div>
        <div className="w-[5%] inline-flex items-center justify-end ">
          <GoChevronRight className="h-14 w-14 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Slide;

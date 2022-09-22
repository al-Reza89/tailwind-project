import Image from "next/image.js";
import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { imgData } from "../public/assets/data.js";

const Card = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 ">
      <div className="w-full flex">
        <h1 className="w-[50%] inline-flex items-center font-bold text-2xl  ">
          Featured Courses
        </h1>
        <div className="w-[50%] flex justify-end gap-2 ">
          <div className="flex p-2 border-[1.5px] border-black rounded-md gap-1 font-[500] items-center ">
            <GoChevronLeft />
            <button>Previous</button>
          </div>
          <div className="flex border-[1.5px] border-black p-2 mr-2  rounded-md gap-1 font-[500] items-center ">
            <button>Next</button>
            <GoChevronRight />
          </div>
        </div>
      </div>

      <div className="relative ">
        {imgData.map((data) => (
          <Image
            src={data.img}
            alt=""
            key={data.id}
            objectFit="contain"
            layout="fill"
            height={20}
            width={20}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;

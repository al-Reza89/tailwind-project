/* eslint-disable @next/next/no-img-element */
import Image from "next/image.js";
import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { imgData } from "../public/assets/data.js";

const Card = () => {
  console.log({ imgData });
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
          <div className="flex border-[1.5px] border-black px-2 py-1 mr-2  rounded-md gap-1 font-[500] items-center ">
            <button>Next</button>
            <GoChevronRight />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-auto rounded-lg ">
          <div className=" ">
            <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md shadow-2xl hover:shadow-3xl ">
              <div className="h-[240px] w-auto relative ">
                <Image
                  layout="fill"
                  src={imgData[0].img}
                  alt={imgData[0].img}
                />
              </div>
              <div className="pl-3 py-3  ">
                <h1>RES.8-007 | UNDERGRADUATE</h1>
                <h1 className="font-bold text-xl hover:underline cursor-pointer">
                  Cosmic Origin of the Chemical Elements
                </h1>
                <h1>Instructors(s): Prof. Anna Frebel</h1>
                <h1>Topic(s): Science , Physics , Astrophysics</h1>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-block">
            <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md shadow-2xl hover:shadow-3xl ">
              <div className="h-[240px] w-auto relative ">
                <Image
                  layout="fill"
                  src={imgData[1].img}
                  alt={imgData[0].img}
                />
              </div>
              <div className="pl-3 py-3 ">
                <h1>RES.8-007 | UNDERGRADUATE</h1>
                <h1 className="font-bold text-xl hover:underline cursor-pointer">
                  Cosmic Origin of the Chemical Elements
                </h1>
                <h1>Instructors(s): Prof. Anna Frebel</h1>
                <h1>Topic(s): Science , Physics , Astrophysics</h1>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-block">
            <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md shadow-2xl hover:shadow-3xl ">
              <div className="h-[240px] w-auto relative ">
                <Image
                  layout="fill"
                  src={imgData[2].img}
                  alt={imgData[0].img}
                />
              </div>
              <div className="pl-3 py-3">
                <h1>RES.8-007 | UNDERGRADUATE</h1>
                <h1 className="font-bold text-xl hover:underline cursor-pointer">
                  Cosmic Origin of the Chemical Elements
                </h1>
                <h1>Instructors(s): Prof. Anna Frebel</h1>
                <h1>Topic(s): Science , Physics , Astrophysics</h1>
              </div>
            </div>
          </div>
          <div className="hidden xl:inline-block">
            <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md shadow-2xl hover:shadow-3xl ">
              <div className="h-[240px] w-auto relative ">
                <Image
                  layout="fill"
                  src={imgData[3].img}
                  alt={imgData[0].img}
                />
              </div>
              <div className="pl-3 py-3 ">
                <h1>RES.8-007 | UNDERGRADUATE</h1>
                <h1 className="font-bold text-xl hover:underline cursor-pointer">
                  Cosmic Origin of the Chemical Elements
                </h1>
                <h1>Instructors(s): Prof. Anna Frebel</h1>
                <h1>Topic(s): Science , Physics , Astrophysics</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

/* eslint-disable @next/next/no-img-element */
import Image from "next/image.js";
import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { imgData } from "../public/assets/data.js";
import one from "../public/assets/1.png";

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
          <div className="flex border-[1.5px] border-black px-2 py-1 mr-2  rounded-md gap-1 font-[500] items-center ">
            <button>Next</button>
            <GoChevronRight />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 h-auto rounded-lg ">
          <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md shadow-2xl hover:shadow-3xl ">
            <div className="h-52 w-auto ">Image</div>
            <div>
              <h1>RES.8-007 | UNDERGRADUATE</h1>
              <h1>Cosmic Origin of the Chemical Elements</h1>
              <h1>Instructors(s): Prof. Anna Frebel</h1>
              <h1>Topic(s): Science , Physics , Astrophysics</h1>
            </div>
          </div>
          <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md  hover:shadow-3xl ">
            <div className="h-52 w-auto ">Image</div>
            <div>
              <h1>RES.8-007 | UNDERGRADUATE</h1>
              <h1>Cosmic Origin of the Chemical Elements</h1>
              <h1>Instructors(s): Prof. Anna Frebel</h1>
              <h1>Topic(s): Science , Physics , Astrophysics</h1>
            </div>
          </div>
          <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md  hover:shadow-3xl ">
            <div className="h-52 w-auto ">Image</div>
            <div>
              <h1>RES.8-007 | UNDERGRADUATE</h1>
              <h1>Cosmic Origin of the Chemical Elements</h1>
              <h1>Instructors(s): Prof. Anna Frebel</h1>
              <h1>Topic(s): Science , Physics , Astrophysics</h1>
            </div>
          </div>
          <div className="flex flex-col  border-[1px] border-[#6d5f5f] rounded-md  hover:shadow-3xl ">
            <div className="h-52 w-auto ">Image</div>
            <div>
              <h1>RES.8-007 | UNDERGRADUATE</h1>
              <h1>Cosmic Origin of the Chemical Elements</h1>
              <h1>Instructors(s): Prof. Anna Frebel</h1>
              <h1>Topic(s): Science , Physics , Astrophysics</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

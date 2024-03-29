/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const card = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-900">
      <div className=" relative w-[640px] h-[360px] bg-white overflow-hidden    ">
        {/* top left circle */}
        <div className="w-[200px] -top-16 h-[200px] -left-12 bg-purple-200 absolute rounded-full grid place-items-center ">
          <AiOutlineCaretRight
            color="white"
            className="w-[120px] h-[90px] ml-3 mt-3 "
          />
        </div>

        {/* right big circle */}
        <div className="w-[512px] h-[512px] bg-purple-200 absolute rounded-full -top-20 -right-56 "></div>

        {/* screen shot */}

        <div className="absolute  top-8 right-8 ">
          <img
            className="w-64 h-36 object-cover rounded-2xl shadow-3xl rotate-3 "
            src="/assets/radio.jpeg"
            alt=""
          />
          <img
            className="w-64 h-36 object-cover rounded-2xl shadow-3xl -rotate-3 translate-x-16  "
            src="/assets/Visualizing.jpeg"
            alt=""
          />
        </div>

        {/* last button */}

        <div className="absolute right-12 inset-y-0 grid items-center ">
          <div className="w-12 h-12 bg-purple-500 ring-4 ring-white rounded-full grid place-items-center ">
            <span className="sr-only"></span>
            <AiOutlineCaretRight color="white" className="w-8 h-8  " />
          </div>
        </div>

        {/* last content */}
        <div className=" relative flex flex-col justify-end h-full p-8 space-y-4 w-2/3 ">
          <p className="uppercase font-semibold text-xs text-pink-600  ">
            How we are build it
          </p>
          <h1 className="text-4xl font-extrabold ">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <h1 className="w-36 font-bold text-2xl">TAILWIND</h1>
        </div>
      </div>
    </div>
  );
};

export default card;

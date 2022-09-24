import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Donation = () => {
  return (
    <div className="w-full bg-gray-200 h-auto">
      <div className="max-w-4xl mx-auto md:flex p-5 ">
        <div className="flex md:w-[70%] flex-col ">
          <h1 className="font-bold text-3xl my-2 ">
            Your Donation Makes a Difference
          </h1>
          <p className="text-xl font-medium my-3 ">
            Learn more about how you can help MIT OpenCourseWare share knowledge
            with the world.
          </p>
        </div>
        <div className=" md:w-[30%]  justify-center items-center md:p-5 mt-4  ">
          <div className=" cursor-pointer  md:w-[70%] bg-[#29041d] border md:ml-7 rounded-md justify-center items-center flex h-16 xl:h-12 ">
            <button className=" font-extrabold text-3xl uppercase text-orange-500 ">
              Give
            </button>
            <AiFillHeart
              color="orange"
              className="text-4xl ml-1 cursor-pointer "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;

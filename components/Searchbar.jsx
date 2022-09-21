import React from "react";

const Searchbar = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto items-center">
      <div className="w-[70%]">
        <div className="text-white hidden md:inline-block  justify-start ">
          <h1 className="mt-3">
            Discover courses, materials & teaching resources
          </h1>
        </div>
        <div className=" md:flex items-center">
          <input
            type="text"
            className=" h-12 w-full md:w-[60%] rounded-md my-3 md:border-r-0 md:rounded-r-none "
          />
          <div className=" flex md:h-12  items-center gap-2 overflow-hidden md:w-[40%] ">
            <button
              className="bg-blue-600 w-[50%] md:w-[40%] h-9 md:h-12 rounded-md
            md:rounded-l-none "
            >
              Search
            </button>
            <span className="hidden md:inline-block text-white md:w-[10%] ">
              OR
            </span>
            <button className="bg-red-600 w-[50%] h-9 md:h-12 md:w-[40%]  rounded-md ">
              Explore
            </button>
          </div>
        </div>
        <div className="bg-[#302d2d] h-36 mt-5 rounded-md md:h-20  md:flex md:items-center  ">
          <div className="flex  h-[40%] items-center md:w-[40%] md:items-center md:flex-col ">
            <div className="text-white ml-4 md:ml-0 md:mr-10">
              Are you new to OCW?
            </div>
            <div className="text-blue-600 underline p-2 md:p-0 md:mr-28 ">
              Get Started
            </div>
          </div>
          <div className=" bg-white border-b w-[98%] mx-auto md:w-[1px] md:h-[90%] md:justify-center " />
          <div className="flex h-[50%] items-start flex-col justify-center md:flex md:w-[55%] ">
            <span className="text-white ml-4 md:mt-[20px] md:justify-start ">
              Looking for teaching materials?
            </span>
            <div className="text-blue-600 underline ml-4">
              Educators Start Here
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto my-5 bg-[#e0d6d6] bg-opacity-10 h-auto text-white flex flex-col justify-center ">
          <div className="w-[70%] h-auto mx-auto p-5 ">
            <h2 className="text-xl">
              <h2> UNLOCKING KNOWLEDGE,</h2>
              EMPOWERING MINDS.
            </h2>
            <h1 className="mt-4 mb-4">
              Free lecture notes, exams, and videos from MIT. <br /> No
              registration required.
            </h1>
            <span className="underline underline-offset-4">
              LEARN MORE ABOUT THE OCW MISSION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

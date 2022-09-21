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
          <div className=" flex md:h-12  items-center gap-2 overflow-hidden ">
            <button
              className="bg-blue-600 w-[50%] h-9 md:h-12 rounded-md
            md:rounded-l-none "
            >
              Search
            </button>
            <span className="hidden md:inline-block text-white ">OR</span>
            <button className="bg-red-600 w-[50%] h-9 md:h-12 md:w-20  rounded-md ">
              Explore
            </button>
          </div>
        </div>
        <div>
          <div>
            <div>Are you new to OCW?</div>
            <div>Get Started</div>
          </div>
          <div>
            <span>Looking for teaching materials?</span>
            <div>Educators Start Here</div>
          </div>
        </div>
        <div>
          <span>UNLOCKING KNOWLEDGE, EMPOWERING MINDS.</span>
          <h1>
            Free lecture notes, exams, and videos from MIT. No registration
            required.
          </h1>
          <span>LEARN MORE ABOUT THE OCW MISSION</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const News = () => {
  return (
    <div className="max-w-6xl mx-auto h-auto p-3">
      <div className="flex items-center mb-4">
        <h1 className="w-[50%] font-extrabold text-3xl ">OCW NEWS</h1>
        <div className=" flex w-[50%] lg:hidden justify-end gap-2 ">
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
      <div className="grid grid-cols-8 gap-3 bg-green-400">
        <div className="col-span-8 md:col-span-4">
          <div className="bg-slate-400">Image1</div>
          <div className="hidden md:inline-block bg-slate-50">Image2</div>
          <div>Image 3</div>
          <div>Image 4</div>
        </div>
      </div>
    </div>
  );
};

export default News;

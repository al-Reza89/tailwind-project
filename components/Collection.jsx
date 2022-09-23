import React from "react";

const Collection = () => {
  return (
    <div className="max-w-6xl mx-auto mb-4 ">
      <h1 className="font-bold text-3xl">Discover Collections</h1>
      <div className="bg-gray-200 rounded-md ">
        <div className="">
          <p className="py-2 px-5 pt-7 text-base font-medium ">
            OCW offers course content and materials related to a wide range of
            collections. Below are some topics available for you to explore:
          </p>
          <div className="px-5 py-2 pb-3 ">
            <button className="button1">Energy</button>
            <button className="button1">Entrepreneurship </button>
            <button className="button1">Environment & Sustainability</button>
            <button className="button1">Introductory Programming</button>
            <button className="button1">Transportation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

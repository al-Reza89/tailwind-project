import React from "react";

const card = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-900">
      <div className="w-[640px] h-[360px] bg-white ">
        <div className="flex flex-col justify-end h-full p-8 space-y-4 w-2/3 ">
          <p className="uppercase font-semibold text-xs text-pink-600">
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

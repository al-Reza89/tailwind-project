import React from "react";

const Connect = () => {
  return (
    <div className="w-full h-auto py-8 px-7 bg-blue-600">
      <div className="max-w-6xl my-4  mx-auto  flex  gap-4  ">
        <div className="w-[50%] bg-white  ">
          <div className=" ">
            <h1>STAY CONNECTED WITH OCW</h1>
            <div>logo</div>
          </div>
        </div>
        <div className="w-[50%] bg-white ">
          <h1>SUBSCRIBE TO THE OCW NEWSLETTER</h1>
          <div>
            logo
            <input type="text" />
          </div>
          <button> Sign Me UP </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;

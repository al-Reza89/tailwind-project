/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 ">
      <div className="flex flex-col my-2 md:my-0 md:flex-row md:justify-between">
        <div className="relative h-[50px] w-[200px] ">
          <img src="/assets/footer.png" alt="" className="cursor-pointer" />
        </div>
        <div className="flex flex-col  md:flex-row gap-3 underline font-bold ">
          <h1 className="cursor-pointer">Accessibility</h1>
          <h1 className="cursor-pointer">Creative Commons License</h1>
          <h1 className="cursor-pointer">Terms and Conditions</h1>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row md:justify-between mb-11 mt-5">
        <p className=" w-full md:w-[50%] font-medium ">
          MIT OpenCourseWare is an online publication of materials from over
          2,500 MIT courses, freely sharing knowledge with learners and
          educators around the world.
          <br /> <h1 className="underline font-bold ">Learn more</h1>
        </p>
        <div className="flex mt-3 md:mt-0 md:justify-center items-center  ">
          <h1 className="font-bold text-xl">PROUD MEMBER OF : </h1>
          <div className="relative md:mr-2">
            <img src="/assets/global.png" alt="" />
          </div>
        </div>
      </div>
      <div className="font-bold text-xl text-center">
        <h1>© 2001–2022 Massachusetts Institute of Technology</h1>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import logo from "../public/assets/ocw_logo_white_v2.png";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-[100%] lg:mx-auto flex max-w-7xl lg:justify-between bg-black lg:bg-[#3d3939]  h-20 items-center ">
      <div className="flex items-center ">
        <AiOutlineMenu className="text-white h-6 w-6 lg:hidden  " />
        <div className=" h-50 w-80 m-7 ">
          <Image src={logo} alt="" objectFit="contain" />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between gap-7 mr-4 ">
        <button className="px-2 py-1.5 rounded-md bg-orange-500 uppercase font-[500] ">
          GIVE NOW
        </button>
        <h1 className="p-0 text-white uppercase">about ocw</h1>
        <h1 className="p-0 text-white uppercase">help & faqs</h1>
        <h1 className="p-0 text-white uppercase">contact us</h1>
      </div>
    </div>
  );
};

export default Navbar;

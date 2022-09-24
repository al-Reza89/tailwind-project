import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";

const Connect = () => {
  return (
    <div className="w-full h-auto py-8 px-7 bg-blue-600">
      <div className="max-w-6xl my-4  mx-auto   ">
        <div className="flex w-full  gap-4  flex-col lg:flex-row">
          <div className=" w-full lg:w-[50%] bg-white rounded-md  ">
            <div className="flex flex-col justify-center items-center py-8 ">
              <div className="p-1  ">
                <h1 className="font-bold text-3xl py-4 ">
                  STAY CONNECTED WITH OCW
                </h1>
                <div className="gap-2 flex justify-evenly ">
                  <BsFacebook
                    color="blue"
                    className="h-12 w-12 cursor-pointer"
                  />
                  <AiFillInstagram
                    color="blue"
                    className="h-12 w-12 cursor-pointer"
                  />
                  <AiFillTwitterCircle
                    color="blue"
                    className="h-12 w-12 cursor-pointer"
                  />
                  <BsYoutube
                    color="blue"
                    className="h-12 w-12 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-[50%] bg-white rounded-md flex flex-col px-7 py-8">
            <div className="p-1">
              <h1 className="font-bold text-3xl mb-4 ">
                SUBSCRIBE TO THE OCW NEWSLETTER
              </h1>
              <div className="flex flex-col xl:flex-row xl:justify-center xl:items-center ">
                <div className="flex border border-[#1a1818] h-11 items-center mb-2 xl:w-[65%] xl:mb-0 ">
                  <AiOutlineMail className="h-8 w-8 m-2 " />
                  <input
                    type="text"
                    placeholder="Your email address.."
                    className=" h-full w-full border-none p-0  "
                  />
                </div>
                <button className="border border-[#d80c05] h-11 bg-red-900 rounded-sm text-white uppercase font-bold w-full mt-2 xl:w-[35%] xl:ml-3 xl:mt-0">
                  Sign Me UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;

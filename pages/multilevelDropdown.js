import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/multilevelDropdown/Button";
import NavLinks from "../components/multilevelDropdown/NavLinks";
import logo from "../public/assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const MultilevelDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-300 ">
      <nav className="bg-white">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 w-full md:w-auto flex justify-between ">
            <div className="h-8 w-24 relative ">
              <Image src={logo} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
              {open ? <ImCross /> : <AiOutlineMenu />}
            </div>
          </div>
          <ul className="  md:flex hidden uppercase items-center font-normal gap-8">
            <li>
              <Link href="/multilevelDropdown">
                <span className="py-7 px-3 inline-block">Home</span>
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden ">
            <Button />
          </div>
          {/* mobile nav */}
          <ul
            className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            } `}
          >
            <li>
              <Link href="/multilevelDropdown">
                <span className="py-7 px-3 inline-block">Home</span>
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MultilevelDropdown;

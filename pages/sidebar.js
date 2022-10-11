import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

const Sidebar = () => {
  const menus = [
    { name: "dashboard", link: "/sidebar", icon: MdOutlineDashboard },
    { name: "user", link: "/sidebar", icon: AiOutlineUser },
    { name: "messages", link: "/sidebar", icon: FiMessageSquare },
    {
      name: "analytics",
      link: "/sidebar",
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "File Manager", link: "/sidebar", icon: FiFolder },
    { name: "Cart", link: "/sidebar", icon: FiShoppingCart },
    { name: "Saved", link: "/sidebar", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/sidebar", icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-50 px-4  `}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            className="cursor-pointer"
            size={26}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {menus.map((menu, i) => (
            <div
              key={i}
              className={` ${
                menu.margin && "mt-10"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 `}
            >
              <Link href={`/${menu.link}`}>
                <>
                  <div>{React.createElement(menu.icon, { size: "20" })}</div>
                  <h2
                    style={{ transitionDelay: `${i + 3}00ms` }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28  "
                    } `}
                  >
                    {menu.name}
                  </h2>
                  <h2
                    className={` ${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-green-900  rounded-md drop-shadow-lg w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit `}
                  >
                    {menu.name}
                  </h2>
                </>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">Sidebar</div>
    </section>
  );
};

export default Sidebar;

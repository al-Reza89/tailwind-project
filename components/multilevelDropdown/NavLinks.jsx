import Link from "next/link";
import React from "react";
import { links } from "./Data";

const NavLinks = () => {
  return (
    <div className="md:flex gap-8 ">
      {links.map((link) => (
        <div key={link.id}>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1 className="py-7">{link.name}</h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block ">
                  <div className="py-2">
                    <div className="w-4 h-4 absolute left-3  bg-white rotate-45 "></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10 ">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold ">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublinks.map((slink) => (
                          <li
                            key={slink.name}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <Link href={slink.link}>
                              <span className="hover:text-blue-500">
                                {slink.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* for mobile device */}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;

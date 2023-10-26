import React from "react";
import Logo from "../public/Logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky w-full h-24 shadow-xl bg-white border-b border-green-200 py-6 ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-8 container sm:flex">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="120"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>

        <div>
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl text-green-500 ">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl text-green-500">
                contact us
              </li>
            </Link>
            <Link href="/services">
              <li className="mx-10 uppercase hover:border-b text-xl text-green-500">
                {" "}
                Our services
              </li>
            </Link>
          </ul>
        </div>
        
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;

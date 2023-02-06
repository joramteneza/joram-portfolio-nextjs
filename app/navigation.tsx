"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../images/logo.png";
import { IoMdArrowDropright } from "react-icons/io";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("me");

  return (
    <nav className="flex items-center justify-between">
      <div
        className={`bg-black rounded-xl flex flex-row items-center p-2 justify-around gap-8 ${
          isOpen && "pl-10 pr-5"
        } ${isOpen ? "openmenu" : "closemenu"}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen && (
          <div className="flex gap-8 text-primary-500 text-xs font-bold tracking-wider">
            {active !== "me" && (
              <Link
                className="group flex flex-row items-center"
                href="/"
                onClick={() => setActive("me")}
              >
                <IoMdArrowDropright className="invisible group-hover:visible" />
                ME
              </Link>
            )}
            {active !== "works" && (
              <Link
                className="group flex flex-row items-center"
                href="/works"
                onClick={() => setActive("works")}
              >
                <IoMdArrowDropright className="invisible group-hover:visible" />
                WORKS
              </Link>
            )}
            {active !== "more" && (
              <Link
                className="group flex flex-row items-center"
                href="/more"
                onClick={() => setActive("more")}
              >
                <IoMdArrowDropright className="invisible group-hover:visible" />
                MORE
              </Link>
            )}
          </div>
        )}
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>
    </nav>
  );
};

export default Navigation;

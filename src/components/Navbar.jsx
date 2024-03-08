"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [color, setColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("bg-white");
        setTextColor("text-black");
      } else {
        setColor("bg-transparent");
        setTextColor("text-white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, [color, textColor]);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${color}`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className={`font-bold text-4xl ${textColor}`}>Captur</h1>
        </Link>
        <ul className={`sm:flex hidden ${textColor}`}>
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile-button */}
        <div
          onClick={handleNavbar}
          className={`sm:hidden block z-10 ${textColor}`}
        >
          {isNavbarOpen ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* mobile-menu */}
        <div
          className={
            isNavbarOpen
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 right-0 -left-full bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

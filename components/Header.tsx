"use client";
import Image from "next/image";
import { headerListItem, categoriesData } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false); // NEW

  const pathName = usePathname();
  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 px-2 bg-transparent">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* ============== LOGO ============== */}
        <Link href="/" className="relative group overflow-hidden">
          <Image
            src="/Logo.png"
            alt="PL Logo"
            width={120}
            height={50}
            priority
            className="object-contain"
          />
          <span className="absolute bottom-0 w-full h-[2px] bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
        </Link>

        {/* ============== MOBILE MENU (SLIDE-OUT) ============== */}
        {showMenu && (
          <div className="w-full h-screen fixed lg:hidden top-0 left-0 bg-dark bg-opacity-90 z-50">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full bg-white p-4 absolute bottom-0 left-0 flex flex-col justify-center items-center"
            >
              {/* Close & Logo */}
              <div className="absolute top-[-20px] left-1">
                <Link href="/" onClick={() => setShowMenu(false)}>
                  <Image
                    src="/Logo.png"
                    alt="PL Logo"
                    width={120}
                    height={50}
                    priority
                    className="object-contain"
                  />
                </Link>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute right-2 top-8 text-3xl text-red-400 hover:text-red-600 cursor-pointer duration-300"
              >
                <IoCloseSharp />
              </span>

              {/* NEW: A container for both menus */}
              <div className="relative w-full h-full mt-10 overflow-hidden">
                {/* ============== MAIN MENU ============== */}
                <motion.ul
                  className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black gap-3 uppercase text-4xl font-semibold"
                  initial={false}
                  animate={{ x: showServices ? "-100%" : "0%" }}
                  transition={{ duration: 0.6 }}
                >
                  {headerListItem.map((item) => {
                    // Intercept "Services" to open submenu
                    if (item.title.toLowerCase() === "services") {
                      return (
                        <li
                          key={item._id}
                          className="hover:text-gray-500 cursor-pointer duration-300"
                          onClick={() => setShowServices(true)}
                        >
                          {item.title}
                          <ChevronRightIcon className="w-6 h-8 ml-2 mb-2 inline-block" />
                        </li>
                      );
                    }
                    // Include Contact Us for mobile menu only
                    if (item.title.toLowerCase() === "contact us") {
                      return (
                        <Link key={item._id} href={item.link}>
                          <li
                            onClick={() => setShowMenu(false)}
                            className="hover:text-gray-500 cursor-pointer duration-300"
                          >
                            {item.title}
                          </li>
                        </Link>
                      );
                    }
                    // Normal link for other items
                    return (
                      <Link key={item._id} href={item.link}>
                        <li
                          onClick={() => setShowMenu(false)}
                          className="hover:text-gray-500 cursor-pointer duration-300"
                        >
                          {item.title}
                        </li>
                      </Link>
                    );
                  })}
                </motion.ul>

                {/* ============== SERVICES SUBMENU ============== */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-6 text-black"
                  initial={false}
                  animate={{ x: showServices ? "0%" : "100%" }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Single <ul> for Back + categories */}
                  <ul className="flex flex-col gap-3 uppercase text-4xl font-semibold items-center">
                    {/* "Back" item */}
                    <li
                      className="hover:text-gray-500 cursor-pointer duration-300"
                      onClick={() => setShowServices(false)}
                    >
                      &larr; Back
                    </li>

                    {/* Categories */}
                    {categoriesData.map((cat) => (
                      <Link key={cat.title} href={cat.href}>
                        <li
                          className="hover:text-gray-500 cursor-pointer duration-300"
                          onClick={() => {
                            setShowMenu(false);
                            setShowServices(false);
                          }}
                        >
                          {cat.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </motion.div>
              </div>
              {/* End container for both menus */}
            </motion.div>
          </div>
        )}

        {/* ============== HAMBURGER ICON (Mobile Only) ============== */}
        <div
          onClick={() => setShowMenu(true)}
          className="flex flex-col justify-between lg:hidden w-7 h-5 overflow-hidden group cursor-pointer"
        >
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-[40%] group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor"></span>
        </div>

        {/* ============== DESKTOP NAVBAR ============== */}
        <div className="hidden lg:inline-flex items-center gap-8 text-sm uppercase font-semibold tracking-wide">
          <ul className="flex gap-8">
            {headerListItem
              .filter((item) => item.title.toLowerCase() !== "contact us")
              .map((item) => (
                <Link key={item._id} href={item.link}>
                  <li
                    className={`
                    ${active === item.link ? "text-primeColor" : ""}
                    hover:text-primeColor cursor-pointer duration-300 group relative
                  `}
                  >
                    {item.title}
                    <span
                      className={`
                      ${active === item.link ? "scale-100" : ""}
                      absolute w-full transform scale-0 group-hover:scale-100
                      duration-500 h-[2px] -bottom-[1px] left-0 bg-primeColor inline-block
                    `}
                    ></span>
                  </li>
                </Link>
              ))}
          </ul>

          {/* Desktop CTA Button now links to "/contactus" and is labeled "Contact Us" */}
          <Link href="/contactus">
            <button className="w-36 h-10 bg-darkGreen text-white uppercase rounded-md hover:bg-primeColor duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;


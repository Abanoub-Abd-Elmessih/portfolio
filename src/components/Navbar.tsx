"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { motion } from "framer-motion";

export const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <motion.nav
      className="container text-light_gray"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 80,
      }}
    >
      {/* Desktop Menu */}
      <div className="p-3 flex justify-between items-center">
        <Link href="/" className="uppercase text-2xl">
          abanoub .
        </Link>
        <ul className="hidden xl:flex gap-8 justify-end">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-5 py-1.5 rounded-lg duration-300 ${
                  pathName === link.path
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 bg-gray-100 border border-gray-500 rounded-lg">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition ${
                  pathName === link.path
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

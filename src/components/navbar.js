import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useRouter } from "next/router";
import {
  LinkedInIcon,
  GithubIcon,
  InstaIcon,
  FacebookIcon,
  InstaIcon2,
} from "./icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, titles, className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group ${
        router.asPath === href ? "font-bold" : "font-normal"
      }`}
    >
      {titles}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full px-5 sm:px-8 py-4 md:py-6 lg:px-16 xl:px-32 font-medium flex justify-center items-center">
      {/* Responsive Min MD */}
      <button
        onClick={handleToggle}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className={`w-5 h-5 ${isOpen ? "transform rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:hidden absolute top-20 left-0 z-50 bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:dark:z-20`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <Logo />
          <li>
            <CustomLink href="/" titles={["Home"]} />
          </li>
          <li>
            <CustomLink href="/about" titles={["About"]} />
          </li>
          <li>
            <CustomLink href="/projects" titles={["Projects"]} />
          </li>
          <li>
            <CustomLink href="/Contactme" titles={["Contact"]} />
          </li>
          <li className=" inline-grid grid-cols-4 gap-5 w-44 justify-center mt-5">
            <FacebookIcon />
            <LinkedInIcon />
            <GithubIcon />
            <InstaIcon />
          </li>
        </ul>
      </div>
      {/* ---------------------------------- */}

      <div className="w-full flex-col-reverse sm:flex-row justify-between items-center hidden md:flex">
        <nav className="flex items-center justify-center sm:justify-start">
          <CustomLink href="/" titles={["Home"]} className="mx-3" />
          <CustomLink href="/about" titles={["About"]} className="mx-3" />
          <CustomLink href="/projects" titles={["Projects"]} className="mx-3" />
          <CustomLink href="/Contactme" titles={["Contact"]} className="mx-3" />
        </nav>
        <Logo />
        <nav className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-end gap-12">
          <motion.a
            href="https://www.instagram.com/vincentleonn2/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-2"
          >
            <InstaIcon2 />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/vincent.ghanz"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-2"
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vincentghanz/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-2"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/skadouuds"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-2"
          >
            <GithubIcon />
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import { AvatarKu } from "./icons";

const FooterKu = () => {
  return (
    <footer className="rounded-lg dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-6 justify-center md:justify-normal md:mb-0 "
          >
            <AvatarKu className=" w-1/8 md:w-full" />
            <span className="self-center text-l md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Vincent Leon Ghanz
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="mr-4 hover:underline md:mr-6 ">
                Project
              </a>
            </li>
            <li>
              <a href="/contacts" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className=" text-center block text-sm text-gray-500 sm:text-center">
          {new Date().getFullYear()} &copy; All Right Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterKu;

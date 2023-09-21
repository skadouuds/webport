import React, { use, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import LinkedinPhoto from "../../public/images/profile/Foto Linked in.jpg";
import coba2 from "../../public/images/profile/465px-Cyanocitta_cristata_FWS_(uncropped).jpg";
import teachmelogo from "../../public/images/projects/Teach.png";
import bikelogo from "../../public/images/projects/nthuridehailing.png";
import moneylogo from "../../public/images/projects/moneytracker.jpg";
import webport from "../../public/images/projects/webku.jpeg";
import {
  useInView,
  useMotionValue,
  useSpring,
  useAnimation,
  inView,
} from "framer-motion";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Transitionku from "@/components/Transition";

const project = () => {
  // Define the hover animation variants
  const imageVariants = {
    hover: {
      scale: 1.1, // Increase scale on hover
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", // Add a shadow on hover
      transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
    },
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // No shadow initially
    },
    initialmotion: {
      opacity: 0.3,
      // scale: 0.5,
      x: -100,
    },
    initial2: {
      opacity: 0.3,
      // scale: 0.5,
      x: 100,
    },
    after: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Transitionku />
      <main className="w-full flex flex-col items-center justify-center md:w-full">
        <div className=" hidden md:block">
          <Layout className="pt-16">
            <h1 className="text-6xl font-bold w-full text-center pb-10 mt-10">
              Projects
            </h1>
            <div className="flex justify-center mt-8 rounded">
              <Link
                href="https://github.com/skadouuds/Python-Money-Tracker"
                target="_blank"
              >
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initialmotion"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame w-100% h-auto bg-white">
                    <Image src={moneylogo} />
                  </div>
                  <div className="image-description text-left font-extrabold">
                    Money Tracker
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="flex justify-center mt-8 rounded">
              <Link href="https://teachme-ss.vercel.app/" target="_blank">
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initial2"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame w-100% h-auto">
                    <Image src={teachmelogo} />
                  </div>
                  <div className="image-description font-extrabold">
                    TeachMe
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="flex justify-center mt-8 rounded">
              <Link
                href="https://github.com/skadouuds/NTHU-Bike-Ride-Hailing-system"
                target="_blank"
              >
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initialmotion"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame w-100% h-auto">
                    <Image src={bikelogo} />
                  </div>
                  <div className="image-description text-left font-extrabold">
                    NTHU Bike Ride Hailing system
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="flex justify-center mt-8 rounded">
              <Link href="#" target="_blank">
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initial2"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame w-100% h-auto">
                    <Image src={webport} />
                  </div>
                  <div className="image-description text-left font-extrabold text-white">
                    Web Portofolio
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </Layout>
        </div>

        <div className=" block md:hidden  mb-12 ">
          <h1 className="text-6xl font-bold w-full text-center pb-10 mt-10">
            Projects
          </h1>
          <div className=" grid grid-rows-4 gap-2">
            <div className="flex justify-center mt-8 rounded">
              <Link
                href="https://github.com/skadouuds/Python-Money-Tracker"
                target="_blank"
              >
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initialmotion"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame1 w-72 h-48 bg-white">
                    <Image src={moneylogo} className="w-full h-auto" />
                  </div>
                  <div className="image-description text-left font-extrabold h-16">
                    Money Tracker
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="flex justify-center mt-8 rounded">
              <Link href="https://teachme-ss.vercel.app/" target="_blank">
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initial2"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame1 w-72 h-48">
                    <Image src={teachmelogo} className=" object-center" />
                  </div>
                  <div className="image-description font-extrabold h-16">
                    TeachMe
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="flex justify-center mt-8 rounded">
              <Link href="#" target="_blank">
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initialmotion"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame1 w-72 h-48">
                    <Image src={bikelogo} />
                  </div>
                  <div className="image-description text-left font-extrabold h-16">
                    NTHU Bike Ride Hailing system
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
            <div className="flex justify-center mt-8 rounded">
              <Link href="/" target="_blank">
                <motion.div
                  whileHover="hover" // Apply the hover animation on hover
                  variants={imageVariants} // Use the defined variants
                  className="image-container"
                  initial="initial2"
                  whileInView="after"
                  viewport={{ once: true }}
                >
                  <div className="image-frame1 w-72 h-48 ">
                    <Image src={webport} />
                  </div>
                  <div className="image-description text-left font-extrabold text-white h-16">
                    Web Portofolio
                    <p>
                      <span className="text-sm font-normal">NextJS</span>
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <style jsx global>{`
        main {
          min-height: calc(
            100vh - 64px
          ); // Adjust as needed, 64px is the header height
          overflow-y: auto; // Add vertical scrollbar when content overflows
        }

        .image-container {
          position: relative;
          cursor: pointer;
        }

        .image-frame {
          border: 5px solid black; // Border color and thickness
          border-opacity: 0.2;
          border-radius: 4px; // Rounded corners
          overflow: hidden; // Hide overflowing content within the frame
          width: 474px;
          height: 314px;
        }
        .image-frame1 {
          border: 5px solid black; // Border color and thickness
          border-opacity: 0.2;
          border-radius: 4px; // Rounded corners
          overflow: hidden; // Hide overflowing content within the frame
        }

        .image-description {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: gray;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          width: 100%; // Set width to 100% to match the image width
        }

        .image-container:hover .image-description {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
};

export default project;

import react from "react";
import { motion } from "framer-motion";

const Timelinewithicon = () => {
  return (
    <div className="p-3 md:p-0">
      <div className="container bg-light mx-auto w-full min-h-screen my-12 md:my-64">
        <h2 className="font-bold text-2xl mb-12 md:mb-32 w-full text-center md:text-8xl">
          Education
        </h2>
        <motion.ol
          className="relative border-l border-black dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              January 2017 - March 2020
            </time>
            <a
              href="https://kristo.sch.id/v2/"
              target="_blank" // Optionally, use target to open the link in a new tab
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Saint Christopher Senior High School
              </h3>
            </a>
            <p className="text-base font-semibold italic ">
              Jakarta , Indonesia.
            </p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Focused / Majored in Science. Graduated with a GPA of 3.7/4.0.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              September 2020 - Present
            </time>
            <a
              href="https://eecs-gs.site.nthu.edu.tw/p/412-1552-82.php?Lang=en"
              target="_blank" // Optionally, use target to open the link in a new tab
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                National Tsinghua University
              </h3>
            </a>
            <p className="text-base font-semibold italic ">Taipei, Taiwan.</p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Currently Majored in Electrical Engineering and Computer Science.
              Expected to graduate in June 2024. The IPEECS (International
              Undergraduate) program encourages students to emphasize EE/CS
              engineering technology while offering great flexibility for
              students to explore other fields and develop special topics for
              future research or career choice.
            </p>
          </li>
          {/* <li className="ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li> */}
        </motion.ol>
      </div>
    </div>
  );
};

export default Timelinewithicon;

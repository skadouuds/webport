import React from "react";
import { motion } from "framer-motion";

const DetailKu = ({ desc, title, layout, period, num, position, link }) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, x: -17 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 p-4 dark:border-primary-500"
    >
      {/* <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
      <div className="flex items-center">
        <div className="-ml-2 mr-3 w-4 h-4 bg-gray-500  dark:bg-primary-500 rounded-full"></div>
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <div className="mb-6 ml-6 pb-6">
        <a
          href="#!"
          className="text-sm text-dark transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >
          {period}
        </a>
        <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
          {desc}
        </p>
        <a
          href={`${link}`}
          target="_blank" // Optionally, use target to open the link in a new tab
          rel="noopener noreferrer" // Recommended for security when using target="_blank"
        >
          <button
            type="button"
            className="inline-block rounded bg-dark px-4 pb-1 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Details
          </button>
        </a>
      </div>
    </motion.li>
  );
};

const Experience = () => {
  return (
    <div className=" p-3 md:p-0">
      <div className="container bg-light mx-auto w-full min-h-screen my-12 md:my-64">
        <h2 className="font-bold text-2xl mb-12 w-full text-center md:text-8xl md:mb-32">
          Experiences
        </h2>
        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-l-2 border-dark dark:border-primary-500"
        >
          <DetailKu
            desc="As a Sales Marketing Specialist at 19 Motor, a thriving family business dedicated to car automotive accessories and spare parts, I played a pivotal role in driving our brand's growth and enhancing our market presence.My role as a Sales Marketing Specialist was pivotal in driving 19 Motor's success by enhancing brand visibility, increasing sales, and maintaining strong customer relationships. It was a rewarding experience to contribute to the growth and prosperity of our family business in the automotive industry.
            
            "
            title="Sales and Marketing Specialist"
            layout="right"
            period="2016 - Present"
            num="1"
          />
          <DetailKu
            desc="As a QA and Production Staff member at Huaxia Glass Corporation, I had the valuable opportunity to contribute to the manufacturing process of high-quality glass kitchenware and related products during the summer holiday. My role as a QA and Production Staff member at Huaxia Glass Corporation allowed me to gain hands-on experience in quality assurance within the manufacturing industry. It reinforced the importance of precision, attention to detail, and teamwork."
            title="QA & Production Staff"
            layout="left"
            period="2021 - 2022"
            num="2"
            position="flex-row-reverse"
            link=" https://www.hwahsiaglass.com/en/about/global#group=data-group-map&4=1&group=data-group-1&1=1"
          />
          <DetailKu
            desc="During my tenure as a part-time administrative assistant at National Tsinghua University, I had the distinct privilege of playing a crucial role in the university's efficient parking payment system.

            As part of the administrative team, my responsibilities encompassed managing , optimizing the university's parking payment infrastructure and support other administrative divisions. This involved overseeing the day-to-day operations of the parking system, ensuring that it functioned smoothly, and providing assistance to students, faculty, and staff with their parking needs."
            layout="right"
            period="2020 - Present"
            num="3"
            title="NTHU Administrative Assistant"
            link="https://nthu-en.site.nthu.edu.tw/p/404-1003-76365.php"
          />
        </motion.ol>
      </div>
    </div>
  );
};

export default Experience;

import react from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logonthu from "../../public/images/projects/NTHU_Round_Seal.svg.png";
import logomm from "../../public/images/projects/mmsys23-logo-removebg-preview.png";

const Honorsawards = () => {
  return (
    <div className="p-3 md:p-0">
      <div className="container bg-light mx-auto w-full min-h-screen my-12 md:my-64">
        <h2 className="font-bold text-2xl mb-12 md:mb-32 w-full text-center md:text-8xl">
          Honors & Awards
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
            <Image src={logonthu} className=" w-14 h-14" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              Issued by NTHU - August 2023.
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              國立清華大學國際學生獎學金 NTHU 1-Year Scholarship
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Awarded Scholarship Type B: Tuition Fee Waiver Scholarship:
              Recipients are exempt from tuition and fees (not including
              accident insurance, health insurance, housing, housing deposit,
              Internet access fees, etc.) for the current academic year.
            </p>
            <a
              href="https://oga.site.nthu.edu.tw/p/412-1524-18035.php?Lang=en"
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
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <Image src={logonthu} className=" w-14 h-14" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              Issued by NTHU - August 2022.
            </time>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              國立清華大學國際學生獎學金 NTHU 1-Year Scholarship
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Awarded Scholarship Type A: Full Scholarship (Monthly stipend +
              Tuition fee waiver): A fixed lump sum will be disbursed based on
              University regulations and recipients are exempt from tuition and
              fees (not including accident insurance, health insurance, housing,
              housing deposit, Internet access fees, etc.) for the current
              academic year.
            </p>
            <a
              href="https://oga.site.nthu.edu.tw/p/412-1524-18035.php?Lang=en"
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
          </li>
          <li className="mb-0 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <Image src={logomm} className=" h-14 w-auto" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">
              Bytedance - March 2023.
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              MMSys 2023 Grand Challenge Participant (ACM Multimedia Systems
              Conference 2023 Canada)
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              This challenge is organised by ByteDance (Tiktok). At ByteDance,
              we have found that Multi-site Parallel Downloading (MPD) can
              effectively reduce the cost for video streaming services. In this
              grand challenge, we provide the platform for contestants to design
              an MPD transport algorithm and test the algorithm performance in
              the real world network environment. For simplicity, we provide
              APIs for querying, connecting, downloading data from available
              data nodes. Ranked 7th in the Final Result of the competition.
            </p>
            <a
              href="https://2023.acmmmsys.org/participation/challenges/"
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
          </li>
        </motion.ol>
      </div>
    </div>
  );
};

export default Honorsawards;

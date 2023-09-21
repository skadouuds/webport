import react from "@heroicons/react";
import { easeInOut, motion } from "framer-motion";

const Transitionku = () => {
  return (
    <>
      <motion.div
        className="slide-out fixed top-0 left-0 w-screen h-screen  bg-light origin-top z-50    "
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <motion.div
        className="slide-out fixed top-0 left-0  w-screen h-screen bg-gray-400 origin-top z-40"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
      />

      <motion.div
        className="slide-out fixed top-0 left-0  w-screen h-screen bg-dark origin-top z-30"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
      />
    </>
  );
};

export default Transitionku;

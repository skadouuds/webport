import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Motionkuy = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <Motionkuy
        href="/"
        className="w-16 h-16  bg-dark text-light flex items-center justify-center rounded-full font-mono font-bold text-2xl dark"
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 1, ease: "easeInOut" },
          backgroundColor: ["rgb(139, 92, 246), rgb(27, 27, 27)"],
        }}
      >
        VLG
      </Motionkuy>
    </div>
  );
};

export default Logo;

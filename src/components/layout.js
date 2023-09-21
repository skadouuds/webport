import React from "react";

const layout = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} w-full h-full inline-block  z-0  p-18 md:pt-0 md:p-32 bg-light dark:bg-dark`}
    >
      {children}
    </div>
  );
};

export default layout;

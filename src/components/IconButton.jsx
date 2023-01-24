import React from "react";
import { MenuSvg } from "../assets";

const IconButton = ({ href, children, className, onClick }) => {
  return (
    <button
      className={`rounded-full shrink-0 p-2 hover:bg-[#272727] ${className} flex items-center justify-center space-x-2.5`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;

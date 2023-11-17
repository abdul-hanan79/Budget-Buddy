import React from "react";

const Para = ({
  description = "",
  className = "",
  smallPara = false,
  link = false,
  lightColor=false
}: any) => {
  return (
    // className=""
    <p
      className={`${
        smallPara ? "sm:text-base text-sm" : "sm:text-xl text-lg"
      }  lg:pl-0 ${
        link ? "hover:underline hover:underline-offset-8" : ""
      } ${lightColor? "text-gray-400 ":"text-black"} ${className}`}
    >
      {description}
    </p>
  );
};

export default Para;

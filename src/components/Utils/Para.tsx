import React from "react";

const Para = ({ description = "", className = "" }: any) => {
  return (
    <p
      className={`sm:text-xl text-lg  lg:pl-0  ${className}`}
    >
      {description}
    </p>
  );
};

export default Para;

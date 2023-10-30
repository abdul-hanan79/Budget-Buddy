import React from "react";

const Heading = ({ className = "", title = "" }: any) => {
  return (
    <p
      className={`text-2xl sm:text-4xl font-bold  ${className} `}
    >
      {title}
    </p>
  );
};

export default Heading;

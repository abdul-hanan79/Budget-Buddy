import React from "react";

const Heading = ({ className = "", title = "", subHeading = false }: any) => {
  return (
    <p
      className={`${
        // sm:text-3xl text-xl
        subHeading
          ? " text-lg sm:text-xl"
          : "text-2xl sm:text-4xl  font-bold "
      }  ${className} `}
    >
      {title}
    </p>
  );
};

export default Heading;

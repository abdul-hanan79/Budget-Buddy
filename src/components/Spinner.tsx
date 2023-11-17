import React from "react";
import "./componentsStyle.css";
const Spinner = ({ width = 10, height = 10 }: any) => {
  return (
    <div>
      <div
        className={`w-${width} h-${height} border-4 border-secondary rounded-full loader`}
      ></div>
    </div>
  );
};

export default Spinner;

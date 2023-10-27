import List from "@/components/List";
import "../components/componentsStyle.css";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#bfd4a3]">
      <div className=" container columns-1 md:columns-2 mx-auto ">
        <div className=" bg-blue-900 w-full">
          <h1 className="heading text-primary">Cash Management App</h1>
          <h1 className="heading text-secondary ">For Business Growth</h1>
          <List
            listItems={[
              "Track Income & Expenses",
              "Add Your Staff To Business",
              "Set Up Multiple Business",
              "Download PDF & Excel Report",
            ]}
          />
        </div>
        <div className="bg-red-900">
          <h1 className="heading ">Cash Management App</h1>
          <h1 className="heading">For Business Growth</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import MainIcon from "./ui/MainIcon";

const Rating = ({ icon = "", value = "", heading = "" }: any) => {
  return (
    <div className="flex flex-col items-center justify-center text-primary">
      <div>{icon}</div>
      <h1 className="font-bold text-3xl mb-2 mt-4">{value}</h1>
      <p className="text-2xl">{heading}</p>
    </div>
  );
};

export default Rating;

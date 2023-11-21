import React from "react";
import Heading from "./ui/Heading";
import Button from "./Button";
import MainIcon from "./ui/MainIcon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { title } from "process";

const DivCrossHeader = ({title="",icon=faXmark,onClick={}}) => {
  return (
    <div className="flex justify-between items-center">
      <Heading title={title} subHeading className={`font-bold`} />
      <Button
        leftIcon={<MainIcon icon={icon} className="text-black" />}
        className="bg-white"
        onClick={onClick}
      />
    </div>
  );
};

export default DivCrossHeader;

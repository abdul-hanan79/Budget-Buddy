import React, { useState } from "react";
import Heading from "./ui/Heading";
import Para from "./ui/Para";
import MainIcon from "./ui/MainIcon";
import {
  faDeleteLeft,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const BookHeader = ({
  leftIcon = null,
  title = "",
  className = "",
  time = "",
  balance = "",
  lightTheme = false,
  onDeleteClick = () => {
    console.log("hello");
  },
  onEditClick = () => {},
}: any) => {
  console.log("on delte ",onDeleteClick);
  const [showIcons, setShowIcons] = useState(false);
  const onHover = () => {
    setShowIcons(true);
  };
  const onHoverOut = () => {
    setShowIcons(false);
  };
  return (
    <div
      className={`${
        lightTheme ? "bg-white text-primary" : "bg-primary text-white"
      }  flex justify-between items-center p-3 ${className}`}
      onMouseOver={onHover}
      onMouseOut={onHoverOut}
    >
      <div className={`flex justify-start items-center gap-4 rounded-md `}>
        {leftIcon && leftIcon}
        <div>
          {/* <Heading title="Add New Book" className="sm:text-xl" /> */}
          <Heading title={title} subHeading={true} />
          {time && (
            <Para description={time} smallPara={true} lightColor={true} />
          )}
        </div>
      </div>
      {balance && (
        <div
          className={`${
            showIcons ? "flex gap-4 items-center" : "inline-block"
          }`}
        >
          <Heading
            title={balance}
            className="text-green-600"
            subHeading={true}
          />
          <MainIcon
            icon={faEdit}
            className={`${!showIcons ? "hidden" : "inline-block"} `}
            onClick={onDeleteClick}
          />
          <MainIcon
            icon={faTrash}
            className={`${
              !showIcons ? "hidden" : "inline-block"
            } text-red-700 `}
            // onClick={}
          />
          {/* <MainIcon
            icon={faEdit}
            className={!showIcons ? "hidden" : "inline-block"}
          /> */}
        </div>
      )}
    </div>
  );
};

export default BookHeader;

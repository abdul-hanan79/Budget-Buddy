import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MainIcon = ({icon=null,className=null,onClick=null}:any) => {
  return <FontAwesomeIcon icon={icon} className={`${className}`} onClick={onClick}/>;
};

export default MainIcon;

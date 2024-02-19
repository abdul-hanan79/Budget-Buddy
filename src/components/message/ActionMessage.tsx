"use client";
import React, { useEffect, useState } from "react";
import MainIcon from "../ui/MainIcon";
import {
  faClose,
  faCross,
  faTicket,
  faUser,
  faWarning,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Para from "../ui/Para";
import Button from "../Button";
import useOTP from "@/customeHooks/useOTP";

const ActionMessage = ({
  messageType = "error",
  message = "Login Successfully",
}: any) => {
  // const {sendData}=useOTP()
  const icon =
    messageType == "success"
      ? faTicket
      : messageType == "error"
      ? faX
      : messageType == "warning"
      ? faWarning
      : faUser;
  const bgColor =
    messageType == "success"
      ? "bg-cashIn"
      : messageType == "error"
      ? "bg-cashOut"
      : messageType == "warning"
      ? "bg-primary"
      : "bg-secondary";
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }, []);

  return (
    <>
      {showMessage ? (
        <div
          className={`flex fixed bottom-10 left-9 w-1/4 justify-evenly items-center rounded-md p-3 border ${bgColor}`}
        >
          <MainIcon icon={icon} />
          <Para description={message} lightColor />
          {/* <MainIcon icon={faX} /> */}
          {/* <Button title="go to otp" onClick={sendData}/> */}
        </div>
      ) : null}
    </>
  );
};

export default ActionMessage;

import ActionMessage from "@/components/message/ActionMessage";
import { verifyOTP } from "@/store/authSlice";
import ROUTES from "@/utils/Routes";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
const useOTP = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const [loader, setLoader] = useState(false);
  const [actionMessage, setActionMessage] = useState({
    messageType: "",
    message: "",
  });
  const router = useRouter();
  const sendData = (data: any) => {
    console.log("data", data);
    router.push(`${ROUTES.VERIFY_OTP}?email=${"res.data.user.mobileNumber"}`);
  };
  const doVerifyOTP = async (userData: any) => {
    console.log("data", userData);
    try {
      setLoader(true);
      console.log("user details", userData);
      const action = await dispatch(verifyOTP(userData));
      console.log("the signup user is", action);
      if (action.payload.message == "successfull") {
        setActionMessage({
          messageType: "success",
          message: "otp verified successfully",
        });
        console.log("action message", actionMessage);
        router.push(`${ROUTES.LOGIN}`);
      } else {
        console.log("signupUserDetails", action.payload.message);
        setActionMessage({
          messageType: "error",
          message: "otp is not verfrified",
        });
      }
    } catch (error: any) {
      console.log("error in signupUserDetails", error.message);
      setActionMessage({
        messageType: "warning",
        message: "network error",
      });
    } finally {
      setLoader(false);
    }
  };
  return {
    sendData,
    doVerifyOTP,
    loader,
    setLoader,
    actionMessage,
  };
};

export default useOTP;

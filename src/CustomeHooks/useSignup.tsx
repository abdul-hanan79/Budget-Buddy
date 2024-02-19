import { signupUserType } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { signupUser } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import App from "next/app";
import { useState } from "react";
import ROUTES from "@/utils/Routes";
export const useSignup = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [signupMessage, setSignupMessage] = useState({
    messageType: "",
    message: "",
  });
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const doSignup = async (values: signupUserType) => {
    try {
      setLoader(true);
      console.log("values in signup", values);
      const newUser: signupUserType = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      console.log("new user is", newUser);
      const action = await dispatch(signupUser(newUser));
      console.log("the signup user is", action);
      if (action.payload.message == "successfull") {
        router.push(`${ROUTES.VERIFY_OTP}?email=${action.payload.email}`);
        setSignupMessage({
          messageType: "success",
          message: "OTP Send",
        });
      } else {
        console.log("signupUserDetails", action.payload.message);
        setSignupMessage({
          messageType: "error",
          message: "User is not signed up",
        });
      }
    } catch (error: any) {
      console.log("error in signupUserDetails", error.message);
      // <ActionMessage messageType="warning" message={`${error.message}`} />;
      setSignupMessage({
        messageType: "warning",
        message: "Network error",
      });
    } finally {
      setLoader(false);
    }
  };
  const goToSignup = () => {
    router.push("/signup");
  };
  return {
    doSignup,
    goToSignup,
    signupMessage,
    loader,
    setLoader,
  };
};

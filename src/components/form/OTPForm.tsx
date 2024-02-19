"use client";
import React from "react";
// import { loginSchema } from "@/schemas/loginSchema";
import { useFormik } from "formik";
import InputBlock from "../input/InputBlock";
import Button from "../Button";
import Link from "next/link";
import ROUTES from "@/utils/Routes";
import { signupSchema } from "@/schemas/signupSchema";
import { verifyOTPSchema } from "@/schemas/verifyOTPSchema";
import useOTP from "@/customeHooks/useOTP";
import { userOTPType } from "@/types/types";
import { useSignup } from "@/customeHooks/useSignup";
import ActionMessage from "../message/ActionMessage";

const OTPForm = ({ email = "" }: any) => {
  const initialValues = {
    otp: "",
  };
  const { actionMessage } = useOTP();
  const { doVerifyOTP, loader, setLoader } = useOTP();
  const {
    values,
    handleBlur,
    handleChange,
    isValid,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: verifyOTPSchema,
    onSubmit: async (values, action) => {
      const userDetails: userOTPType = {
        otp: values.otp,
        email: email,
      };
      console.log("userDetails", userDetails);
      doVerifyOTP(userDetails);
      action.resetForm();
    },
  });
  return (
    <>
      {actionMessage.messageType && (
        <ActionMessage
          messageType={actionMessage.messageType}
          message={actionMessage.message}
        />
      )}
      <div className=" md:w-1/2 w-full md:p-10 p-5 border-2 border-lightBg rounded-2xl ">
        <p>The code was send to this email : {email}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputBlock
            label="Enter OTP"
            type="text"
            name="otp"
            id="otp"
            placeholder="abc123"
            value={values.otp}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.otp}
            touched={touched.otp}
          />

          <Button
            type="submit"
            title="Verify OTP"
            loading={loader}
            isValid={isValid}
            className="w-full"
          />
        </form>
      </div>
    </>
  );
};

export default OTPForm;

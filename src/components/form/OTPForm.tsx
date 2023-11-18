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

const OTPForm = () => {
  const initialValues = {
    code: "",
  };
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
      console.log("values", values);
      action.resetForm();
    },
  });
  return (
    <div className=" md:w-1/2 w-full md:p-10 p-5 border-2 border-lightBg rounded-2xl ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputBlock
          label="Enter OTP"
          type="text"
          name="code"
          id="code"
          placeholder="abc123"
          value={values.code}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.code}
          touched={touched.code}
        />

        <Button
          type="submit"
          title="Verify Code"
          loading={false}
          isValid={isValid}
          className="w-full"
        />
      </form>
    </div>
  );
};

export default OTPForm;

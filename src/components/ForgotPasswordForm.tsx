"use client";
import React from "react";
import { useFormik } from "formik";
import InputBlock from "./InputBlock";
import Button from "./Button";
import Link from "next/link";
import ROUTES from "@/utils/Routes";
import { forgotPasswordSchema } from "@/schemas/forgotPasswordSchema";

const ForgotPasswordForm = () => {
  const initialValues = {
    email: "",
    code: "",
    password: "",
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
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values, action) => {
      console.log("values", values);
      action.resetForm();
    },
  });
  return (
    <div className=" md:w-1/2 w-full md:p-10 p-5 border-2 border-lightBg rounded-2xl ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputBlock
          label="Email your email address"
          type="email"
          name="email"
          id="email"
          placeholder="xyz123@gmail.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
        />
        <Button
          title="Sent Code"
          loading={false}
          isValid={isValid}
          className="w-1/2"
        />
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

        <InputBlock
          label="Enter your Password"
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          touched={touched.password}
        />
        <Button
          type="submit"
          title="Login"
          loading={false}
          isValid={isValid}
          className="w-full"
        />
      </form>
    </div>
  );
};

export default ForgotPasswordForm;

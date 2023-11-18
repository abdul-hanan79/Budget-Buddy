"use client";
import React from "react";
import { loginSchema } from "@/schemas/loginSchema";
import { useFormik } from "formik";
import InputBlock from "../input/InputBlock";
import Button from "../Button";
import Link from "next/link";
import ROUTES from "@/utils/Routes";

const LoginForm = () => {
  const initialValues = {
    email: "",
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
    validationSchema: loginSchema,
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
        <div className="">
          <p>
            Don't have account?{" "}
            <Link href={ROUTES.SIGNUP} className="text-secondary font-bold hover:underline hover:underline-offset-8">
              {" "}
              <span> Singup</span>
            </Link>
          </p>
          <Link href={ROUTES.FORGOT_PASSWORD}>
            <p className="text-secondary font-bold mt-2 hover:underline hover:underline-offset-8">Forgot Password</p>
          </Link>
        </div>
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

export default LoginForm;

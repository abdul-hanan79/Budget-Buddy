"use client";
import React from "react";
// import { loginSchema } from "@/schemas/loginSchema";
import { useFormik } from "formik";
import InputBlock from "./InputBlock";
import Button from "./Button";
import Link from "next/link";
import ROUTES from "@/utils/Routes";
import { signupSchema } from "@/schemas/signupSchema";

const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    validationSchema: signupSchema,
    onSubmit: async (values, action) => {
      console.log("values", values);
      action.resetForm();
    },
  });
  return (
    <div className=" md:w-1/2 w-full md:p-10 p-5 border-2 border-lightBg rounded-2xl ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputBlock
          label="Enter your name"
          type="text"
          name="name"
          id="name"
          placeholder="abdul hanan"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          touched={touched.name}
        />
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
        <InputBlock
          label="Renter your Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="**********"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
        />
        <div className="">
          <p>
            Already have account?{" "}
            <Link
              href={ROUTES.login}
              className="text-secondary font-bold hover:underline hover:underline-offset-8"
            >
              {" "}
              <span> login</span>
            </Link>
          </p>
        </div>
        <Button
          type="submit"
          title="Signup"
          loading={false}
          isValid={isValid}
          className="w-full"
        />
      </form>
    </div>
  );
};

export default SignupForm;

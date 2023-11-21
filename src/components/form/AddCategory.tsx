"use client";
import { useFormik } from "formik";
import React from "react";
import Button from "../Button";
import Heading from "../ui/Heading";
import MainIcon from "../ui/MainIcon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import InputBlock from "../input/InputBlock";
import Divider from "../Divider";
import DivCrossHeader from "../DivCrossHeader";

const AddCategory = () => {
  const initialValues = {
    category: "",
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
    // validationSchema: ,
    onSubmit: async (values, action) => {
      console.log("values", values);
      action.resetForm();
    },
  });
  return (
    <section className="fixed bg-white w-1/3 p-4 rounded-md z-10 border ">
      <div className="flex flex-col gap-4">
        <DivCrossHeader title="Add Category" 
        // onClick={}
        />
        <Divider />
        <form className="flex flex-col gap-4">
          <InputBlock
            smallInput
            label="Category"
            type="text"
            name="category"
            id="category"
            placeholder="Enter Category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.category}
            touched={touched.category}
          />
          <Divider />

          <Button type="Submit" title="Save" className="w-1/3 self-end" />
        </form>
      </div>
    </section>
  );
};

export default AddCategory;

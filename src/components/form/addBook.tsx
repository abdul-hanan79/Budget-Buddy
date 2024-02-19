"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "../Button";
import Heading from "../ui/Heading";
import MainIcon from "../ui/MainIcon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import InputBlock from "../input/InputBlock";
import Divider from "../Divider";
import DivCrossHeader from "../DivCrossHeader";
import { addBookSchema } from "@/schemas/addBookSchema";
import useBooks from "@/customeHooks/useBooks";
const AddBook = () => {
  // const { showForm, toogleShowForm } = useBooks();
  const [showForm, setShowForm] = useState(true);
  const toogleShowForm = () => {
    setShowForm(!showForm);
  };
  const { doSubmitBook, loader, setLoader } = useBooks();
  console.log("show form in add book", showForm);
  const initialValues = {
    name: "",
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
    validationSchema: addBookSchema,
    onSubmit: async (values, action) => {
      console.log("values", values);
      await doSubmitBook(values);
      action.resetForm();
      setShowForm(false);
    },
  });
  return (
    <>
      {showForm ? (
        <section className="fixed bg-white w-1/3 p-4 rounded-md z-10 border">
          <div className="flex flex-col gap-4">
            <DivCrossHeader title="Add Book Name" onClick={toogleShowForm} />
            <Divider />
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <InputBlock
                smallInput
                label="Book Name"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Book Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
              />
              <Divider />
              <Button
                type="submit"
                title="Save"
                className="w-1/3 self-end"
                loading={loader}
                isValid={isValid}
              />
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default AddBook;

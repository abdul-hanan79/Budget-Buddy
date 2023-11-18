"use client";
import React, { useState } from "react";
import Heading from "../ui/Heading";
import MainIcon from "../ui/MainIcon";
import Button from "../Button";

import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { addEntrySchema } from "@/schemas/addEntry";

const AddEntry = () => {
  const [showDiv, setShowDiv] = useState(true);
  const hideDiv = () => {
    setShowDiv(!showDiv);
  };
  const initialValues = {
    entryType: "",
    date: "",
    time: "",
    amount: "",
    description: "",
    category: "",
    paymentMode: "",
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
    validationSchema: addEntrySchema,
    onSubmit: async (values, action) => {
      console.log("values", values);
      action.resetForm();
    },
  });
  return (
    <div
      className={`bg-yellow-200 ${
        showDiv ? "fixed top-0 right-0 bottom-0" : "hidden"
      } w-1/3 z-10 p-4 rounded-md`}
    >
      <div className="flex justify-between items-center">
        <Heading title="Add Cash Entry" subHeading />
        <Button
          leftIcon={<MainIcon icon={faXmark} className="text-black" />}
          className="bg-white"
          onClick={hideDiv}
        />
      </div>
      <div>
        <div className="flex gap-2">
          <div className="">
            <input
              type="radio"
              name="entryType"
              id="1"
              value="cash in"
              className="peer hidden"
              checked
            />
            <label
              htmlFor="1"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-cashIn peer-checked:font-bold peer-checked:text-white border-2 border-yellow-300"
            >
              Cash In
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="entryType"
              id="2"
              value="cashOut"
              className="peer hidden"
            />
            <label
              htmlFor="2"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-cashOut peer-checked:font-bold peer-checked:text-white"
            >
              Cash Out
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;

"use client";
import React, { useState } from "react";
import Heading from "../ui/Heading";
import MainIcon from "../ui/MainIcon";
import Button from "../Button";

import { faCross, faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { addEntrySchema } from "@/schemas/addEntry";
import InputBlock from "../input/InputBlock";
import DropDown from "../input/DropDown";
import Label from "../input/Label";
import Link from "next/link";

const AddEntry = () => {
  const [showDiv, setShowDiv] = useState(true);
  const hideDiv = () => {
    setShowDiv(!showDiv);
  };
  const [entryType, setEntryType] = useState("cashIn");
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
    // bg-white text-gray-900 w-full min-h-full transform translate-x-0 opacity-100
    <div
      className={`${
        showDiv ? "block" : "hidden"
      } p-4 rounded-md  transform translate-x-0 opacity-100  overflow-x-auto`}
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-gray-50 p-3">
        <Heading
          title={
            entryType == "cashIn" ? "Add Cash In Entry" : "Add Cash Out Entry"
          }
          subHeading
          className={`${
            entryType == "cashIn" ? "text-cashIn" : "text-cashOut"
          } font-bold`}
        />
        <Button
          leftIcon={<MainIcon icon={faXmark} className="text-black" />}
          className="bg-white"
          onClick={hideDiv}
        />
      </div>

      <div className="">
        <form className="flex flex-col gap-5 py-2 ">
          <div className="flex gap-2">
            <div className="">
              <input
                type="radio"
                name="entryType"
                // id="entryType"
                value="cash in"
                className="peer hidden"
                checked
              />
              <label
                // htmlFor="entryType"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-cashIn peer-checked:font-bold peer-checked:text-white border-2"
              >
                Cash In
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="entryType"
                // id="entryType"
                value="cashOut"
                className="peer hidden"
              />
              <label
                // htmlFor="entryType"
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-cashOut peer-checked:font-bold peer-checked:text-white border-2 border-gray-200"
              >
                Cash Out
              </label>
            </div>
          </div>
          {/* date and time */}
          <div className="flex justify-between">
            <InputBlock
              smallInput
              label="Date"
              type="date"
              name="date"
              id="date"
              // placeholder="**********"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.date}
              touched={touched.date}
            />
            <InputBlock
              smallInput
              label="Time"
              type="time"
              name="time"
              id="time"
              // placeholder="**********"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.time}
              touched={touched.time}
            />
          </div>
          <InputBlock
            smallInput
            label="Amount"
            type="number"
            name="amount"
            id="amount"
            placeholder="500"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.amount}
            touched={touched.amount}
          />

          <InputBlock
            smallInput
            label="Description"
            type="text"
            name="description"
            id="description"
            placeholder="Enter remarks"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.description}
            touched={touched.description}
          />
          <div className="flex justify-between">
            <div>
              <DropDown
                title="Category"
                rightIcon={
                  <Link href={"/"}>
                    <MainIcon icon={faGear} className="text-secondary" />
                  </Link>
                }
              />
            </div>
            <div>
              <DropDown title="Payment Method" />
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end gap-1 items-center border-t-2 border-gray-50 p-3">
        <Button title="Save" smallButton bgLight />
        <Button title="Save & Add New" smallButton />
      </div>
    </div>
  );
};

export default AddEntry;

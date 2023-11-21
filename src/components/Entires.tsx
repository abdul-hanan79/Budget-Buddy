"use client";
import React, { useState } from "react";
import InputBlock from "./input/InputBlock";
import {
  faEdit,
  faMinus,
  faPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import MainIcon from "./ui/MainIcon";
import Table from "./table/Table";

const Entires = () => {
  const tableHeading = [
    "Date & Time",
    "Details",
    "Category",
    "Mode",
    "Bill",
    "Amount",
    "Balance",
  ];
  const entries = [
    {
      id:"1",
      date: "2023/20/22",
      description: "this is entry",
      category: "home",
      paymentMode: "online",
      amount: "200",
      balance: "300",
    },
    {
      id:"2",
      date: "2023/20/22",
      description: "this is entry",
      category: "home",
      paymentMode: "online",
      amount: "200",
      balance: "300",
    },
    {
      id:"3",
      date: "2023/20/22",
      description: "this is entry",
      category: "home",
      paymentMode: "online",
      amount: "200",
      balance: "300",
    },
  ];
  return (
    <div>
      <Table tableHeading={tableHeading} entries={entries} />
    </div>
  );
};

export default Entires;

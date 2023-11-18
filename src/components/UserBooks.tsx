"use client";
import React from "react";
import BookHeader from "./BookHeader";
import MainIcon from "./ui/MainIcon";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import InputBlock from "./input/InputBlock";

const UserBooks = () => {
  const booksNames = [
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
    {
      name: "November Fee Record",
      updatedAt: "time",
    },
  ];
  return (
    <div>
      <div className="w-1/2">
        <InputBlock
          type="text"
          placeholder="filter books"
          leftIcon={faSearch}
        />
      </div>
      {booksNames.map((item, index) => {
        return (
          <div key={index}>
            <BookHeader
              leftIcon={<MainIcon icon={faBook} />}
              title={item.name}
              className="border-b-2 rounded-none"
              time="updated at 21 hours age"
              balance="2000"
              lightTheme={true}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserBooks;

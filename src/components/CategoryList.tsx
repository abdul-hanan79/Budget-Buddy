"use client";
import React, { useState } from "react";
import Button from "./Button";
import MainIcon from "./ui/MainIcon";
import { faEllipsisV, faI, faPlus } from "@fortawesome/free-solid-svg-icons";
import Para from "./ui/Para";
import AddCategory from "./form/AddCategory";

const CategoryList = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const toogleShowMenu = (category: any) => {
    setShowMenu(!showMenu);
    setCategoryId(category.id);
  };
  const CategoryList = [
    {
      id: "1",
      name: "Csc b#04",
    },
    {
      id: "2",
      name: "class",
    },
  ];
  return (
    <div className="w-1/2 mx-auto border-2 border-gray-100 p-4">
      <Button
        title="Add New Category"
        leftIcon={<MainIcon icon={faPlus} />}
        bgLight
        className="w-full"
      />
      {/* category list */}
      <AddCategory/>
      <div>
        <Para
          description={`Categories from this book ${CategoryList.length}`}
          smallPara
          lightColor
        />

        <div className="">
          {CategoryList.map((category: any, index: number) => (
            <div
              key={index}
              className="border-2 border-gray-100 p-4 flex justify-between items-center mt-2 bg-white rounded-lg relative"
            >
              <span>{category.name}</span>
              <MainIcon
                icon={faEllipsisV}
                onClick={() => toogleShowMenu(category)}
              />
              {showMenu && category.id == categoryId ? (
                <div className="absolute top-10 right-3 w-auto border-2 border-gray-100 bg-white divide-y-2 rounded-md z-10">
                  <p className="hover:bg-gray-100 p-2 ">Edit</p>
                  <p className="hover:bg-gray-100  p-2">Delete</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;

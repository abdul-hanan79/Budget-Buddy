import Link from "next/link";
import React from "react";

const List = ({
  listItems = null,
  leftIcon,
  className = "",
  linkList = false,
  mainDivClassName = "",
  listClassName = "",
}: any) => {
  console.log("linkList", linkList);
  return (
    <ul className={`${mainDivClassName}`}>
      {listItems &&
        listItems.map((item: any, index: number) => (
          <div
            className={`flex gap-4 md:text-base text-sm ${
              linkList ? "hover:underline hover:underline-offset-8" : ""
            } ${className}`}
          >
            {leftIcon && <span>{leftIcon}</span>}
            <li key={index} className={`md:text-base text-sm ${listClassName}`}>
              {linkList ? (
                <Link href={item?.path}>{item?.name}</Link>
              ) : (
                <span>{item?.name}</span>
              )}
            </li>
          </div>
        ))}
    </ul>
  );
};

export default List;

import Link from "next/link";
import React from "react";

const List = ({
  listItems = null,
  leftIcon,
  className = "",
  linkList = false,
}: any) => {
  return (
    <ul>
      {linkList
        ? listItems.map((item: any, index: number) => (
            <div className={`flex gap-4 md:text-base text-sm ${className}`}>
              {leftIcon && <span>{leftIcon}</span>}
              <li key={index} className="md:text-base text-sm">
                {item}
              </li>
            </div>
          ))
        : listItems.map((item: any, index: number) => (
            <div className={`flex gap-4 md:text-base text-sm ${className}`}>
              {leftIcon && <span>{leftIcon}</span>}
              <li key={index} className="md:text-base text-sm">
                {/* <Link href={item.path}> */}
                  {item.name}
                  {/* </Link> */}
              </li>
            </div>
          ))}
    </ul>
  );
};

export default List;

import React, { useState } from "react";
import MainIcon from "../ui/MainIcon";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const DropDown = ({
  title = "drop down",
  rightIcon,
  options = [{ name: "hello" }],
}: any) => {
  return (
    <div className="mb-4">
      <div className={`${rightIcon?"flex justify-between ":""}`}>
        <label
          htmlFor="Category"
          className="block font-medium text-slate-700F sm:text-base text-sm"
        >
          {title}
        </label>
        {rightIcon && <span>{rightIcon}</span>}
      </div>
      <select
        id="category"
        name="category"
        className="w-full rounded-lg shadow-md hover:shadow-lg p-2"
        // value={values.category}
        // onChange={handleChange}
        // onBlur={handleBlur}
      >
        <option value="" label="Select an option" />
        {options.map((option: any) => (
          <option value={option.name} label={option.name} />
        ))}
        {/* <option value="clothes" label="Clothes" />
        <option value="shoes" label="Shoes" />
        <option value="accessories" label="Accessories" /> */}
      </select>
    </div>
  );
  //   const [showMenu, setShowMenu] = useState(false);
  //   const toogleShowMenu = () => {
  //     setShowMenu(!showMenu);
  //   };
  //   return (
  //     <div className="flex items-center justify-center ">
  //       <div className="relative inline-block text-left">
  //         <button
  //           id="dropdown-button"
  //           className="flex p-3 justify-center items-center gap-2 w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md"
  //           onClick={toogleShowMenu}
  //         >
  //           <span>{title}</span>
  //           <MainIcon icon={!showMenu ? faArrowDown : faArrowUp} />
  //         </button>

  //         {showMenu ? (
  //           <div
  //             id="dropdown-menu"
  //             className="origin-top-right absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-lg"
  //           >
  //             <div
  //               className="py-2 p-2"
  //               role="menu"
  //               aria-orientation="vertical"
  //               aria-labelledby="dropdown-button"
  //             >
  //               {options.map((option) => {
  //                 return <p>{option?.name}</p>;
  //               })}
  //             </div>
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   );
};

export default DropDown;

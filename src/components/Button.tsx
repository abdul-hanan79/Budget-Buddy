import React from "react";
import "../app/globals.css";
import Spinner from "./Spinner";
const Button = ({
  title = "",
  onClick = () => {},
  leftIcon = null,
  rightIcon = null,
  className = null,
  type = null,
  loading = false,
  isValid = true,
  smallButton = false,
  bgLight = false,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${
        !smallButton ? "text-base md:text-lg" : "sm:text-base text-sm"
      } ${
        !bgLight
          ? "bg-primary text-white hover:text-primary hover:bg-white hover:border-2 hover:border-gray-200"
          : "text-primary bg-white border-2 border-gray-200 hover:bg-primary hover:text-white"
      } rounded-lg font-semibold flex justify-center items-center shadow-md  gap-2 navbar-text transition ease-out delay-100  ${className}`}
      type={type}
      disabled={!isValid}
    >
      {loading ? (
        <Spinner />
      ) : (
        <span>
          {leftIcon && <span>{leftIcon}</span>}
          <span> {title} </span>
          {rightIcon && <span>{rightIcon}</span>}
        </span>
      )}
    </button>
  );
};

export default Button;

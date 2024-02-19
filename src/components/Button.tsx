import React from "react";
import "../app/globals.css";
import "./componentsStyle.css";
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
          ? "bg-primary text-white hover:text-primary hover:bg-white border"
          : "text-primary bg-white  hover:bg-primary hover:text-white border"
      } rounded-lg font-semibold flex justify-center items-center   gap-2 navbar-text transition ease-out delay-100  ${className} ${
        isValid ? "bg-primary" : "bg-lightBg"
      }`}
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

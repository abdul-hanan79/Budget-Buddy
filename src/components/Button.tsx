import React from "react";
import "../app/globals.css";
const Button = ({
  title = "",
  onClick = () => {},
  leftIcon = null,
  rightIcon = null,
  className = null,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-primary text-white rounded-lg font-semibold flex justify-center items-center  gap-2 navbar-text ${className}`}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span>{title}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;

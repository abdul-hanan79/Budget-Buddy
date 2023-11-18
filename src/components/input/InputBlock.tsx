import React from "react";
import MainIcon from "../ui/MainIcon";

const InputBlock = ({
  label = "",
  type = "text",
  name = "",
  id = "",
  className = "",
  placeholder = "",
  value = "",
  handleBlur = null,
  onChange = null,
  error = "",
  leftIcon = "",
  smallInput = false,
}: any) => {
  return (
    <div
      className={`input-block ${
        !smallInput ? "text-base md:text-lg" : "sm:text-base text-sm"
      }`}
    >
      <label
        htmlFor="description"
        className={`block font-medium text-slate-700F`}
      >
        {label}
      </label>
      <div className="relative z-0">
        <input
          type={type}
          autoComplete="off"
          name={name}
          id={id}
          // className="rounded-lg shadow-md p-1 border rounded w-full h-20 px-3 text-gray-700"
          className={`rounded-lg focus:ring-2 focus:ring-secondary  shadow-md p-3 focus:outline-4  outline-none w-full ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
        />
        {leftIcon && (
          <span className="absolute top-3 right-3 text-gray-400">
            <MainIcon icon={leftIcon} />
          </span>
        )}
      </div>
      {error ? <p className="form-error text-rose-700">{error}</p> : null}
    </div>
  );
};

export default InputBlock;

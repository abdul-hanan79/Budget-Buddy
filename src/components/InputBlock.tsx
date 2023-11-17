import React from "react";

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
}: any) => {
  return (
    <div className="input-block">
      <label
        htmlFor="description"
        className="block text-base md:text-lg font-medium text-slate-700F"
      >
        {label}
      </label>
      <div className="relative">
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
        {leftIcon && <span className="absolute top-3 right-3 text-gray-400">{leftIcon}</span>}
      </div>
      {error ? <p className="form-error text-rose-700">{error}</p> : null}
    </div>
  );
};

export default InputBlock;

import React from 'react'

const Label = ({label=""}) => {
  return (
    <label
        htmlFor="description"
        className={`block font-medium text-slate-700F sm:text-base text-sm`}
      >
        {label}
      </label>
  )
}

export default Label

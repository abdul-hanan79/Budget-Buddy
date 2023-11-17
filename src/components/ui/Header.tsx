import React from 'react'

const Header = ({title="",className=""}:any) => {
  return (
    <h1 className={`font-bold lg:text-5xl text-4xl ${className}`}
    >{title}</h1>
  )
}

export default Header

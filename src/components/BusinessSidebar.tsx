"use client";

import React from "react";
import Button from "./Button";
import Heading from "./ui/Heading";
import UserDetail from "./UserDetail";
import BookHeader from "./BookHeader";
import MainIcon from "./ui/MainIcon";
import { faBook, faGear, faPlus, } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ROUTES from "@/utils/Routes";

const BusinessSidebar = () => {
  return (
    <div className="bg-lightBg  md:flex md:flex-col md:gap-5 hidden  ">
      <div className="flex justify-center gap-4 items-center bg-primary p-2 rounded-md text-white">
        <Button rightIcon={<MainIcon icon={faPlus}/>} className="bg-white text-black" />
        <Heading title="Add New Book" className="sm:text-xl" />
      </div>
      <div className="p-7 flex flex-col gap-5">
      <UserDetail/>
      <Link href={ROUTES.BOOKS}><BookHeader title="Books" leftIcon={<MainIcon icon={faBook}/>}/></Link> 
      <Link href={ROUTES.SETTING}><BookHeader title="Setting" leftIcon={<MainIcon icon={faGear}/>}/></Link>
      </div>
    </div>
  );
};

export default BusinessSidebar;

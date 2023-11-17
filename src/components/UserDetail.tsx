import React from "react";
import MainIcon from "./ui/MainIcon";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Heading from "./ui/Heading";
const UserDetail = () => {
  return (
    <div className="flex justify-center items-center bg-secondary text-white gap-4 p-2 rounded">
      <MainIcon icon={faUser} className="w-6 h-6" />
      <div>
        <Heading title="Abdul Hanan's Business" className="sm:text-lg" />
        <p>Role:Owner. 36 Books</p>
      </div>
    </div>
  );
};

export default UserDetail;

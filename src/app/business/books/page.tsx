import BookLeftBar from "@/components/BookLeftBar";
import Button from "@/components/Button";
import UserBooks from "@/components/UserBooks";
import AddEntry from "@/components/form/AddEntry";
import Heading from "@/components/ui/Heading";
import MainIcon from "@/components/ui/MainIcon";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Main } from "next/document";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="lg:col-span-3 col-span-4">
        <Heading
          title="Abdul Hanan's Business"
          // className="sm:text-3xl text-xl"
          subHeading={true}
        />
        <UserBooks />
      </div>
      <div className="lg:inline-block hidden">
        <BookLeftBar />
      </div>
    </div>
  );
};

export default page;

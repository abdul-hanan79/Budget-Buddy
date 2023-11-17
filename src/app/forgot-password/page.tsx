import IMAGES from "@/assets/images";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      {/* <div className="w-12 h-12 bg-primary rounded-full"></div> */}
      <div className="w-1/3 bg-lightBg p-14 md:inline-block hidden">
        <Image src={IMAGES.logo} alt="logo" width={150} />
      </div>
      <div className="w-full md:p-14 p-7 flex flex-col justify-start items-center gap-5">
        <Image src={IMAGES.logo} alt="logo" width={150} />
        <Heading title="Forgot Password" />
        <ForgotPasswordForm/>
      </div>
    </div>
  );
};

export default page;

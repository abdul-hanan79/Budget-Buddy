"use client";
import IMAGES from "@/assets/images";
import OTPForm from "@/components/form/OTPForm";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const search = useSearchParams();
  const email = search.get("email");
  console.log("user details at otp", { email });
  return (
    <div className="flex">
      {/* <div className="w-12 h-12 bg-primary rounded-full"></div> */}
      <div className="w-1/3 bg-lightBg p-14 md:inline-block hidden">
        <Image src={IMAGES.logo} alt="logo" width={150} />
      </div>
      <div className="w-full md:p-14 p-7 flex flex-col justify-start items-center gap-5">
        <Image src={IMAGES.logo} alt="logo" width={150} />
        <Heading title="Verify OTP" />
        <OTPForm email={email} />
      </div>
    </div>
  );
};

export default page;

import IMAGES from "@/assets/images";
import List from "@/components/List";
import Heading from "@/components/ui/Heading";
import MainIcon from "@/components/ui/MainIcon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

const BenefitSection = () => {
  const data = [
    { name: "100% Safe and Secure" },
    { name: "Easy User Interface" },
    { name: "24x7 Customer Support" },
    { name: "Verified By Play Protect" },
  ];
  return (
    <div className="relative container md:p-28 ">
      <div className="bg-white rounded-lg md:absolute md:bottom-0 md:left-[20%] py-10 px-20 ">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10 ">
          <div className="">
            <Image src={IMAGES.heroSectionPic} alt="man smiling" width={350} />
          </div>
          <div className="flex flex-col gap-5 ">
            <Heading title="Other Benefits" />
            <List
              listItems={data}
              leftIcon={<MainIcon icon={faArrowRight} />}
            />
            <Image
              src={IMAGES.webBadge}
              alt="image"
              width={150}
              className="md:inline hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;

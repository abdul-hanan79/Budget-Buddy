import IMAGES from "@/assets/images";
import List from "@/components/List";
import Heading from "@/components/Utils/Heading";
import MainIcon from "@/components/Utils/MainIcon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

const BenefitSection = () => {
  return (
    <div className="relative container p-28">
      <div className="bg-white rounded-lg md:absolute md:bottom-0 md:left-[20%] py-10 px-20">
        <div className="flex justify-center items-center gap-10 ">
          <div className="">
            <Image src={IMAGES.heroSectionPic} alt="man smiling" width={350} />
          </div>
          <div className="flex flex-col gap-5">
            <Heading title="Other Benefits" />
            <List
              listItems={[
                "100% Safe and Secure",
                "Easy User Interface",
                "24x7 Customer Support",
                "Verified By Play Protect",
              ]}
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

import List from "@/components/List";
import "../components/componentsStyle.css";
import "../sections/sectionStyle.css";
import React from "react";
import MainIcon from "@/components/ui/MainIcon";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Para from "@/components/ui/Para";
import Image from "next/image";
import IMAGES from "@/assets/images";

const HeroSection = () => {
  const data = [
    { name: "Track Income & Expenses" },
    { name: "Add Your Staff To Business" },
    { name: "Set Up Multiple Business" },
    { name: "Download PDF & Excel Report" },
  ];
  return (
    <div className="bg-lightBg pt-14 pb-8 rounded-b-lg sectionPadding ">
      <div className="grid md:grid-cols-2  sm:grid-cols-1  ">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-5">
            <h1 className="heading text-primary ">
              Cash Management App
              <span className="text-secondary mt-3 block">
                For Business Growth
              </span>
            </h1>
            <div>
              <List
                listItems={data}
                leftIcon={
                  <MainIcon
                    icon={faArrowRightToBracket}
                    className="text-primary"
                  />
                }
              />
            </div>
            <div className="">
              <Para
                description="Get Desktop & Mobile App"
                className="font-semibold"
              />
              <div className="flex gap-3 mt-4">
                <Image src={IMAGES.googlePlayStore} alt="image" width={150} />
                <Image
                  src={IMAGES.appleStore}
                  alt="image"
                  width={150}
                  className="md:inline hidden "
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
        <div className="mx-auto">
          <div className="">
            <Image src={IMAGES.heroSectionPic} alt="man smiling" width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import IMAGES from "@/assets/images";
import Image from "next/image";
import React from "react";
import Para from "./ui/Para";
import Heading from "./ui/Heading";
import Link from "next/link";

const Card = ({
  imgSrc = "",
  title = "",
  description = "",
  callToAction = "",
  callToActionLink = "",
}: any) => {
  return (
    <div className="border-2 p-3 rounded-md">
      <Image src={imgSrc} alt="logo" width={100} />
      {/* <Para description={title} className="sm:text-base font-bold text-base" /> */}
      <Para description={title} smallPara={true} className="font-bold" />
      <Para description={description} smallPara={true} lightColor={true} />
      <Link href={callToActionLink}>
        <Para
          description={`${callToAction} >`}
          smallPara={true}
          link={true}
          className="text-secondary"
        />
      </Link>
    </div>
  );
};

export default Card;

import Rating from "@/components/Rating";
import MainIcon from "@/components/ui/MainIcon";
import '../sections/sectionStyle.css'
import { faDownload, faLanguage, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const RatingSection = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-14 ">
      <Rating
        icon={<MainIcon icon={faStar} className="w-12 h-12 text-primary" />}
        heading="Playstore Rating"
        value="4.9/5"
      />
      <Rating
        icon={<MainIcon icon={faDownload} className="w-12 h-12 text-primary" />}
        heading="Downloads"
        value="3.5 M+"
      />
      <Rating
        icon={<MainIcon icon={faLanguage} className="w-12 h-12 text-primary" />}
        heading="Languages"
        value="5+"
      />
    </div>
  );
};

export default RatingSection;

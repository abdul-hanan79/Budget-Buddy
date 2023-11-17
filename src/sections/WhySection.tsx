import IMAGES from "@/assets/images";
import Header from "@/components/ui/Header";
import Heading from "@/components/ui/Heading";
import Para from "@/components/ui/Para";
import Image from "next/image";
import React from "react";
import "../sections/sectionStyle.css";

const WhySection = () => {
  return (
    <div className="rounded-lg bg-primary md:px-32 px-5 pt-14 pb-14 md:pb-56">
      <Header
        title="Why Budget Buddy App?"
        className="text-white text-center"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        {/* first div */}
        <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
          <div>
            <Heading title="Track Income & Expenses" className="text-white" />
            <Para
              description="Easy Book-Keeping For Healthy Cashflow"
              className="text-white"
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="-mt-14 md:mt-0">
            <Image
              alt="income image"
              src={IMAGES.incomeAndExpense}
              width={448}
            />
          </div>
        </div>
        {/* second div */}
        <div className="flex justify-center mt-10 md:mt-0">
          <div className="-mt-14 md:mt-0">
            <Image
              alt="income image"
              src={IMAGES.incomeAndExpense}
              width={448}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
          <div>
            <Heading title="Track Income & Expenses" className="text-white" />
            <Para
              description="Easy Book-Keeping For Healthy Cashflow"
              className="text-white"
            />
          </div>
        </div>
        {/* third div */}
        <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
          <div>
            <Heading title="Track Income & Expenses" className="text-white" />
            <Para
              description="Easy Book-Keeping For Healthy Cashflow"
              className="text-white"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="-mt-14 md:mt-0">
            <Image
              alt="income image"
              src={IMAGES.incomeAndExpense}
              width={448}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;

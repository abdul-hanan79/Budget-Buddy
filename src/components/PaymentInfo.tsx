import React from "react";
import Para from "./ui/Para";
import Heading from "./ui/Heading";
import MainIcon from "./ui/MainIcon";

const PaymentInfo = ({
  leftIcon = "",
  paymentType = "",
  payment = "",
  iconClassName = "",
}: any) => {
  return (
    <div className="flex gap-3 p-3">
      <div className="mt-1">
        <span
          className={`rounded-full py-0 px-1 ${
            paymentType == "Cash In"
              ? "text-blue-900 bg-blue-200"
              : (paymentType == "Cash Out"
                  ? "text-red-900 bg-red-200"
                  : "text-yellow-900 bg-yellow-200")
          }`}
        >
          {<MainIcon icon={leftIcon} />}
        </span>
      </div>
      <div>
        <Para description={paymentType} smallPara />
        <Heading title={payment} subHeading={true} className="font-bold" />
      </div>
    </div>
  );
};

export default PaymentInfo;

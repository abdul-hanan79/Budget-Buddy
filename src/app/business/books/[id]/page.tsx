import Button from "@/components/Button";
import Entires from "@/components/Entires";
import EntriestHeader from "@/components/EntriestHeader";
import PaymentInfo from "@/components/PaymentInfo";
import AddEntry from "@/components/form/AddEntry";
import Heading from "@/components/ui/Heading";
import MainIcon from "@/components/ui/MainIcon";
import {
  faArrowLeft,
  faEquals,
  faMinus,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const page = ({ params }: any) => {
  const id = params.id;
  console.log("");
  return (
    <div className="flex flex-col gap-8 p-4 ">
      {/* <h1>helo {id}</h1> */}
      {/* <Button leftIcon={<MainIcon icon={faArrowLeft}/>}/> */}
      <Heading
        title="Personal Expenses"
        subHeading={true}
        className="font-bold"
      />
      <EntriestHeader />
      <div className="flex justify-evenly border-2 border-gray-2">
        <PaymentInfo leftIcon={faPlus} payment="3000" paymentType="Cash In" />
        <PaymentInfo leftIcon={faMinus} payment="3000" paymentType="Cash Out" />
        <PaymentInfo
          leftIcon={faEquals}
          payment="3000"
          paymentType="Net Balance"
        />
      </div>
      <div>
        <Entires />
      </div>
    </div>
  );
};

export default page;

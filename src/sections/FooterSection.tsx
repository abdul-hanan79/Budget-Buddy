import List from "@/components/List";
import Para from "@/components/ui/Para";
import React from "react";
import "./sectionStyle.css";
const FooterSection = () => {
  const firstList = [
    { name: "Company", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
  ];
  const secondList = [
    { name: "Legal", path: "/" },
    { name: "Privacy Policies", path: "/" },
    { name: "FAQs", path: "/" },
    { name: "Terms and Conditions", path: "/" },
    { name: "Grievance Redressal Policy", path: "/" },
  ];
  const contact = [
    { name: "Contact Me" },
    { name: "Faisalabad Punjab, Pakistan" },
    { name: "+923071842279" },
    { name: "abdulhanan3279@gmail.com" },
  ];
  return (
    <footer className="bg-primary sectionPadding">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2  ">
        {/* first list */}
        <div className="">
          <List
            listItems={firstList}
            linkList={true}
            className="text-white first:font-bold gap-14"
            mainDivClassName="flex flex-col gap-4"
            listClassName="hover:border-b-2 hover:border-white"
          />
        </div>
        {/* second list */}

        <div className="">
          <List
            listItems={secondList}
            linkList={true}
            className="text-white first:font-bold gap-14"
            mainDivClassName="flex flex-col gap-4"
            listClassName="hover:border-b-2 hover:border-white"
          />
        </div>
        {/* third list */}
        <div className="md:mt-0 mt-5 ">
          <List
            listItems={contact}
            className="text-white first:font-bold first:text-lg gap-14"
            mainDivClassName="flex flex-col gap-4"
            
          />
        </div>
        {/* fourth list */}
        <div className="md:mt-0 mt-5">
          <List
            listItems={firstList}
            linkList={true}
            className="text-white first:font-bold gap-14"
            mainDivClassName="flex flex-col gap-4"
            listClassName="hover:border-b-2 hover:border-white"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <Para
        description="© currentYear, All rights reserved"
        className="text-white text-4xl"
      />
    </footer>
  );
};

export default FooterSection;

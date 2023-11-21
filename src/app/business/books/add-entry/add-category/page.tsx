import CategoryList from "@/components/CategoryList";
import Heading from "@/components/ui/Heading";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading title="Category"/>
      <CategoryList/>
    </div>
  );
};

export default page;

import List from "@/components/List";
import React from "react";

const FooterSection = () => {
  const firstList = [
    { name: "Company", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
  ];
  return (
    <footer className="bg-primary">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {/* first list */}
        <div>
          <List
            listItems={firstList}
          />
        </div>
        {/* second list */}

        <div></div>
        {/* third list */}

        <div></div>
      </div>
    </footer>
  );
};

export default FooterSection;

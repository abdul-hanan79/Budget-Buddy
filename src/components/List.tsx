import React from "react";

const List = ({ listItems = null }: any) => {
  return (
    <ul>
      {listItems &&
        listItems.map((item: string, index: number) => <li>{item}</li>)}
    </ul>
  );
};

export default List;

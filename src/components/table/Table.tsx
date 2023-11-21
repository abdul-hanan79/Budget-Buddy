import React, { useState } from "react";
import MainIcon from "../ui/MainIcon";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ tableHeading = [], entries = [] }: any) => {
  const [showIcon, setShowIcon] = useState(false);
  const [currentItemId, setCurrentItemId] = useState("");
  // const toogleShowIcons = (itemId: string) => {
  //   setCurrentItemId(itemId);
  //   setShowIcon(!showIcon);
  // };
  const onHover = (itemId: string) => {
    setCurrentItemId(itemId);
    setShowIcon(true);
  };
  const onHoverOut = (itemId: string) => {
    setCurrentItemId(itemId);
    setShowIcon(false);
  };
  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 mx-auto">
        <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  {tableHeading.map((item: any) => {
                    return (
                      <th className="px-6 bg-gray-100 align-middle border border-solid border-gray-100 py-3 sm:text-base text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {entries.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100"
                    onMouseOver={() => onHover(item.id)}
                    onMouseOut={() => onHoverOut(item.id)}
                  >
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.date}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.description}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.category}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {item.amount}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700">
                      {item.balance}
                    </td>
                    {showIcon && item.id == currentItemId ? (
                      <td>
                        <div className="flex gap-4 justify-center items-center">
                          <MainIcon
                            icon={faTrash}
                            className="text-cashOut self-center"
                          />
                          <MainIcon icon={faEdit} className="text-cashIn" />
                        </div>
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;

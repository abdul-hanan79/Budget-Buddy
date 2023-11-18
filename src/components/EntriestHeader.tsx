"use client";
import React from "react";
import Button from "./Button";
import MainIcon from "./ui/MainIcon";
import { faMinus, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import InputBlock from "./input/InputBlock";
import { useRouter } from "next/router";
import ROUTES from "@/utils/Routes";
import Link from "next/link";

const EntriestHeader = () => {
  return (
    <header className="flex justify-between">
      <div className="w-1/2">
        <InputBlock
          type="text"
          placeholder="filter books"
          leftIcon={faSearch}
        />
      </div>
      <div className="flex gap-2">
        <Link href={ROUTES.ADD_Entry}>
          <Button
            title="Cash In"
            className="bg-cashIn"
            leftIcon={<MainIcon icon={faPlus} />}
            smallButton
          />
        </Link>

        <Link href={ROUTES.ADD_Entry}>
          <Button
            title="Cash Out"
            className="bg-cashOut"
            leftIcon={<MainIcon icon={faMinus} />}
            smallButton
          />
        </Link>
      </div>
    </header>
  );
};

export default EntriestHeader;

"use client";
import React from "react";
import Button from "./Button";
import MainIcon from "./ui/MainIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import IMAGES from "@/assets/images";

const BookLeftBar = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <Button leftIcon={<MainIcon icon={faPlus} />} title="Add new book" />
      <Card imgSrc={IMAGES.WHATSAPP_LOGO} title="Need help in business setup?" description="Our support team will help you" callToAction="Contact Us" callToActionLink="/"/>
    </div>
  );
};

export default BookLeftBar;

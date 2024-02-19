import { useState } from "react";

const useNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
  ];
  const [mobileView, setMobileView] = useState(false);
  const toggleMobileView = () => {
    setMobileView(!mobileView);
    console.log("value of mobile view", mobileView);
  };
  const toogleShowMenu = () => {
    setShowMenu(!showMenu);
    console.log("value of showMenu", showMenu);
  };
  return {
    routes,
    mobileView,
    toggleMobileView,
    showMenu,
    toogleShowMenu,
  };
};

export default useNavbar;

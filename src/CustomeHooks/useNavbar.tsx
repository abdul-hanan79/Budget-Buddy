import {useState} from "react";

const useNavbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    
  ];
  const [mobileView, setMobileView] = useState(false);
  const toggleMobileView = () => {
    setMobileView(!mobileView);
    console.log("value of mobile view", mobileView);
  };
  return {
    routes,
    mobileView,
    toggleMobileView
  };
};

export default useNavbar;

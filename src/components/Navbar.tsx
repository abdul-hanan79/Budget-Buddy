"use client";
import IMAGES from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
// import { FontAwesomeIcon } from "@fontawesome";
import {
  faArrowRight,
  faGear,
  faHome,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainIcon from "./ui/MainIcon";
import useNavbar from "@/customeHooks/useNavbar";
import { useLogin } from "@/customeHooks/useLogin";
import { useUserLogined } from "@/customeHooks/utils/useUserLogined";
import ROUTES from "@/utils/Routes";
import Para from "./ui/Para";
const Navbar = () => {
  const { routes, mobileView, toggleMobileView, showMenu, toogleShowMenu } =
    useNavbar();
  const { goToLogin } = useLogin();
  const { loginUserDetails, isUserLoggedIn } = useUserLogined();
  console.log("user details in navbar", loginUserDetails);
  return (
    <nav
      className={`flex items-center  justify-between bg-white px-5 py-6 w-full shadow-xl`}
    >
      <div>
        <Image src={IMAGES.logo} alt="logo" width={200} className="" />
      </div>

      <div className={` ${!mobileView ? "hidden" : "flex"} sm:flex`}>
        <div className="sm:flex  sm:gap-5 max-[640px]:absolute max-[640px]:top-[80%] max-[640px]:left-[0] max-[640px]:flex max-[640px]:flex-col max-[640px]:w-full max-[640px]:bg-white max-[640px]:shadow-xl max-[640px]:p-3">
          <ul
            id="drawer"
            role="menu"
            className="sm:gap-3 flex  transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150   w-auto min-h-0 dark:bg-slate-900 max-[640px]:flex-col max-[640px]:items-start max-[640px]:mb-4"
          >
            {routes.map((route, index) => {
              return (
                <li
                  key={index}
                  className="navbar-text p-3  sm:p-0 md:p-3 text-primary hover:border-b-2 hover:border-secondary flex-center"
                >
                  <Link href={`${route.path}`} className="dark:text-white">
                    {route.name}
                  </Link>
                </li>
              );
            })}
            {isUserLoggedIn && (
              <li className="navbar-text p-3  sm:p-0 md:p-3 text-primary hover:border-b-2 hover:border-secondary flex-center">
                <Link href={`${ROUTES.BOOKS}`} className="dark:text-white">
                  Books
                </Link>
              </li>
            )}
          </ul>
          {isUserLoggedIn ? (
            <div className="flex justify-center items-center gap-3">
              <div
                className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]"
                onClick={toogleShowMenu}
              >
                {showMenu ? (
                  <div className="drop-down  w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-3">
                    <ul>
                      <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                        <MainIcon icon={faGear} />
                        <span> Setting </span>
                      </li>
                      <li className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                        <MainIcon icon={faSignOut} />
                        <span> Logout </span>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
              <Para description={loginUserDetails?.name || "demo"} />
            </div>
          ) : (
            <div className="sm:flex gap-3 items-center ">
              <Button
                title="Login/Register"
                // className="sm:navbar-mobile-view"
                rightIcon={<MainIcon icon={faArrowRight} />}
                onClick={goToLogin}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className="sm:hidden cursor-pointer"
        id="mobile-toggle"
        onClick={toggleMobileView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="dark:stroke-white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import IMAGES from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
// import { FontAwesomeIcon } from "@fontawesome";
import { faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainIcon from "./ui/MainIcon";
import useNavbar from "@/customeHooks/useNavbar";
import useLogin from "@/customeHooks/useLogin";
const Navbar = () => {
  const { routes, mobileView, toggleMobileView } = useNavbar();
  const { goToLogin } = useLogin();
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
          </ul>
          <div className="sm:flex gap-3 items-center ">
            <Button
              title="Login/Register"
              // className="sm:navbar-mobile-view"
              rightIcon={<MainIcon icon={faArrowRight} />}
              onClick={goToLogin}
            />

            {/* <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]">
          <div className="drop-down  w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-3">
            <ul>
              <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span> Setting </span>
              </li>
              <li className="px-3  py-3  text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                <span> Wishlist </span>
              </li>
              <li className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <span> Logout </span>
              </li>
            </ul>
          </div>
        </div> */}
          </div>
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

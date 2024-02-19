"use client";
import React, { useEffect } from "react";
import BookHeader from "./BookHeader";
import MainIcon from "./ui/MainIcon";
import { faBook, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import InputBlock from "./input/InputBlock";
import { useUserLogined } from "@/customeHooks/utils/useUserLogined";
import Heading from "./ui/Heading";
import useBooks from "@/customeHooks/useBooks";
import Button from "./Button";
import AddBook from "./form/addBook";
import { useLogin } from "@/customeHooks/useLogin";

const UserBooks = () => {
  const { doFecthBooks, toogleShowForm, showForm, books, doDeleteBook } =
    useBooks();
  const { isUserLoggedIn } = useUserLogined();
  const { doFetchCurrentUser } = useLogin();
  useEffect(() => {
    if (isUserLoggedIn) {
      doFecthBooks();
      console.log("user is logined at books");
    } else {
      console.log("user is not logined at books");
      doFetchCurrentUser();
      doFecthBooks();
    }
  }, []);
  const { loginUserDetails } = useUserLogined();
  console.log("logined user details", loginUserDetails);

  return (
    <div>
      <Heading title={loginUserDetails.name} />
      <div className="flex justify-between">
        <InputBlock
          type="text"
          placeholder="filter books"
          leftIcon={faSearch}
        />
        <Button
          leftIcon={<MainIcon icon={faPlus} />}
          title="Add new book"
          onClick={toogleShowForm}
        />
      </div>
      {showForm && <AddBook />}
      {books?.map((item: any, index: any) => {
        return (
          <div key={index}>
            <BookHeader
              leftIcon={<MainIcon icon={faBook} />}
              title={item?.name}
              className="border-b-2 rounded-none"
              time={item?.updatedAt}
              balance="2000"
              lightTheme={true}
              onDeleteClick={() => doDeleteBook(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserBooks;

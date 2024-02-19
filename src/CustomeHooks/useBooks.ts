import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { useRouter } from "next/navigation";
import {
  fetchBooks,
  deleteBook,
  submitBook,
  updateProduct,
} from "@/store/bookSlice";
import { productItemType, productType } from "@/types/types";
// import { useUserLogined } from '@/customHooks/utils/useUserLogined';
import { useEffect, useState } from "react";
import { useUserLogined } from "./utils/useUserLogined";

const useBooks = () => {
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const allBooks = useSelector((state: any) => state.bookSlice.books);
  console.log("allBooks", allBooks);
  const router = useRouter();
  const { loginUserDetails } = useUserLogined();
  console.log("user id is", loginUserDetails.id);
  const [books, setBooks] = useState(allBooks);
  console.log("books", books);
  const [loader, setLoader] = useState(false);
  console.log("loader initil value", loader);
  useEffect(() => {
    setBooks(allBooks);
  }, [allBooks]);
  const toogleShowForm = () => {
    setShowForm(!showForm);
  };
  const doSubmitBook = async (values: any) => {
    try {
      setLoader(true);
      const bookDetails = {
        name: values.name,
        userId: loginUserDetails.id,
      };
      console.log("book with user", bookDetails);
      const action = await dispatch(submitBook(bookDetails));
      console.log("values", values);
    } catch (e: any) {
      console.log("error in upload products", e.message);
    } finally {
      setLoader(false);
    }
  };
  const doFecthBooks = async () => {
    try {
      setLoader(true);
      const userId = loginUserDetails.id;
      console.log("user id in fetch todo", userId);
      const action = await dispatch(fetchBooks());
      console.log("action", action);
      console.log("loader in fetch products  dofetch", loader);
    } catch (error: any) {
      console.log("error in fetchBooks", error.message);
    } finally {
      setLoader(false);
      console.log("loader in fetch products ", loader);
    }
  };
  const doDeleteBook = async (itemId: string) => {
    try {
      const bookId = itemId;
      console.log("bookId", bookId);
      const action = await dispatch(deleteBook(bookId));
      console.log("action", action);
    } catch (error: any) {
      console.log("error in do delete product", error.message);
    } finally {
    }
  };
  const doUpdateProduct = async (values: any, product: productItemType[]) => {
    console.log("values in do update product", values);
    console.log("values in do item product", product);
    try {
      const updateProductDetails = {
        id: product[0].id,
        name: values.name,
        description: values.description,
        category: values.category,
        price: values.price,
        image: values.image,
        color: values.color,
        size: values.size,
        stock: values.stock,
        userId: product[0].userId,
      };
      console.log("updated product details", updateProductDetails);
      // const action: any = await dispatch(updateProduct(updateProductDetails))
      // console.log("action in update product", action);
      // if (action?.payload?.message == "successfull") {
      //     console.log("item is uploaded");
      //     router.push('/dashboard')
      // }
    } catch (error: any) {
      console.log("error in update product details", error.message);
    } finally {
      setLoader(false);
    }
  };
  return {
    doSubmitBook,
    doFecthBooks,
    doDeleteBook,
    // products,
    loader,
    setLoader,
    doUpdateProduct,
    toogleShowForm,
    showForm,
    books,
  };
};

export default useBooks;

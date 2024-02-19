import { loginUserType } from "@/types/types";
import axios from "axios";
import axiosWithToken from "./axios";

// import axios from './axios'
console.log("process.en", process.env.API_URL);
const api = "http://localhost:8080";
export const loginApi = async (user: loginUserType) => {
  return axios.post(`${api}/user/login-user`, { user });
};
export const fetchCurrentUserApi = async () => {
  return axiosWithToken.get(`${api}/user/fetch-current-user`);
};
export const registerApi = async (user: any) => {
  return axios.post(`${api}/user/signup-user`, { user });
};
export const verifyOTPAPI = async (user: any) => {
  return axios.post(`${api}/user/confirm-otp`, { user });
};
export const uploadDocumentsApi = async (data: any) => {
  return axios.post("/upload-documents", data);
};

export const getUserApi = async () => {
  return axios.get("/get-user");
};

export const forgetPasswordApi = async (data: any) => {
  return axios.post("/forget-password", data);
};

export const resetPasswordApi = async (data: any) => {
  return axios.post("/reset-password", data);
};

export const confirmOTPApi = async (data: any) => {
  return axios.post("/confirm-otp", data);
};

export const becomeSellerApi = async () => {
  return axios.post("/become-seller");
};
export const verifySellerApi = async () => {
  return axios.post("/verfiy-seller");
};

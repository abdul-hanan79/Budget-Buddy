// Import the "use client" directive from next/client
import * as Yup from "yup";

export const verifyOTPSchema = Yup.object({
  otp: Yup.string().required("Please enter OTP"),
});

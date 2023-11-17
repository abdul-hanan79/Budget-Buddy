// Import the "use client" directive from next/client
import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
    code: Yup.string().required("Please enter OTP"),
});
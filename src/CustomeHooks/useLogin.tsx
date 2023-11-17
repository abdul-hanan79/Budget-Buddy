import { useRouter } from "next/navigation";
import React from "react";

const useLogin = () => {
  const router = useRouter();
  const goToLogin = () => {
    router.push("/login");
  };
  return {
    goToLogin,
  };
};

export default useLogin;

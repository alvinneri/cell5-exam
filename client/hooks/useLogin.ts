import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import authService from "../services/auth";
import Cookies from "js-cookie";
import Router from "next/router";

const useLogin = () => {
  return useMutation((newData) => authService.login(newData), {
    onSuccess: async (updatedData) => {
      if (updatedData?.data?.success) {
        Cookies.set("token", updatedData.data.token);
        Router.push("/");
        message.success(updatedData?.data.message);
      }
    },
    onError: (error) => {
      /* temporary */
      message.error("ERROR");
    },
  });
};

export default useLogin;

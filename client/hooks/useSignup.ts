import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import authService from "../services/auth";
import Router from "next/router";

const useSignup = () => {
  return useMutation((newData) => authService.signUp(newData), {
    onSuccess: async (updatedData) => {
      message.success("User Signup Successfully");
      Router.push("/login");
    },
    onError: (error) => {
      /* temporary */
      message.error("ERROR");
    },
  });
};

export default useSignup;

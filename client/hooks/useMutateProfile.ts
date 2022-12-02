import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import usersService from "../services/user";

const useMutateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation((newData) => usersService.updateMe(newData), {
    onSuccess: async (updatedData) => {
      queryClient.setQueryData(["get-me"], () => updatedData);
      message.success("User Information Changed");
    },
    onError: (error) => {
      /* temporary */
      message.error("ERROR");
    },
  });
};

export default useMutateProfile;

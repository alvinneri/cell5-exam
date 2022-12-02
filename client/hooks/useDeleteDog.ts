import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import dogService from "../services/dog";

const useDeleteDog = (keyword: string) => {
  const queryClient = useQueryClient();
  return useMutation((newData) => dogService.deleteDog(newData), {
    onSuccess: async (updatedData) => {
      queryClient.setQueryData(["get-dogs", keyword], () => updatedData);
      message.success("Dog deleted to your list.");
    },
    onError: (error) => {
      /* temporary */
      message.error("ERROR");
    },
  });
};

export default useDeleteDog;

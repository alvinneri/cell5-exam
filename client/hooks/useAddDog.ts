import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import dogService from "../services/dog";

const useAddDog = () => {
  return useMutation((newData) => dogService.addDog(newData), {
    onSuccess: async () => {
      message.success("Dog added to your list.");
    },
    onError: (error) => {
      /* temporary */
      message.error("ERROR");
    },
  });
};

export default useAddDog;

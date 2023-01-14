import * as api from "api/cart_charter";
import { useQuery, useMutation, queryCache } from "react-query";

export const useGetBanks = () => {
  return useQuery("banks", api.getBanks);
};

export const useAddCharter = () => {
    return useMutation(api.addCharter, {
      onMutate: (data) => {
        queryCache.setQueryData("addCharter", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("addCharter", variables);
      },
      onError: (err, variables, rollback) => {
       console.log("error")
      },
    });
  };
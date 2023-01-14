import * as api from "api/smsLogin";
import { useMutation, queryCache } from "react-query";

export const useSmsCheckmobile = () => {
  return useMutation(api.smsCheckmobile, {
    onMutate: (data) => {
      queryCache.setQueryData("smsCheckmobile", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("smsCheckmobile", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};
export const UserSmsBase = () => {
  return useMutation(api.userSmsBase, {
    onMutate: (data) => {
      queryCache.setQueryData("userSmsBase", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("userSmsBase", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

import * as api from "api/login";
import { useMutation, queryCache } from "react-query";

export const useLogin = () => {
  return useMutation(api.login, {
    onMutate: (data) => {
      queryCache.setQueryData("login", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("login", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useResetPassword = () => {
  return useMutation(api.login, {
    onMutate: (data) => {
      queryCache.setQueryData("resetPassword", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("resetPassword", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useCheckmobile = () => {
  return useMutation(api.login, {
    onMutate: (data) => {
      queryCache.setQueryData("checkmobile", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("checkmobile", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

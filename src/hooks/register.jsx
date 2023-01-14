import * as api from "api/register";
import { useMutation, queryCache } from "react-query";

export const usePlace = () => {
  return useMutation(api.getPlace, {
    onMutate: (data) => {
      queryCache.setQueryData("place", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("place", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useRegister = () => {
  return useMutation(api.register, {
    onMutate: (data) => {
      queryCache.setQueryData("register", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("register", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useVerificationCode = () => {
  return useMutation(api.getVerificationCode, {
    onMutate: (data) => {
      queryCache.setQueryData("verificationCode", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("verificationCode", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useCheckmobile = () => {
  return useMutation(api.checkmobile, {
    onMutate: (data) => {
      queryCache.setQueryData("checkMobile", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("checkMobile", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

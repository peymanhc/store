import * as api from "api/profile";
import { useMutation, queryCache } from "react-query";

export const useProfile = () => {
    return useMutation(api.profile, {
      onMutate: (data) => {
        queryCache.setQueryData("profile", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("profile", variables);
      },
      onError: (err, variables, rollback) => {
        console.log("error");
      },
    });
  };

  export const useEditProfile = () => {
    return useMutation(api.editProfile, {
      onMutate: (data) => {
        queryCache.setQueryData("editProfile", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("editProfile", variables);
      },
      onError: (err, variables, rollback) => {
        console.log("error");
      },
    });
  };
  
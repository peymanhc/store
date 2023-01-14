import * as api from "api/searchList";
import { useMutation, queryCache } from "react-query";

export const useSearchList = () => {
    return useMutation(api.searchList, {
      onMutate: (data) => {
        queryCache.setQueryData("searchList", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("searchList", variables);
      },
      onError: (err, variables, rollback) => {
       console.log("error")
      },
    });
  };

export const useSearchAdd = () => {
    return useMutation(api.searchAdd, {
      onMutate: (data) => {
        queryCache.setQueryData("searchAdd", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("searchAdd", variables);
      },
      onError: (err, variables, rollback) => {
       console.log("error")
      },
    });
  };

export const useSearchEdit = () => {
    return useMutation(api.searchEdit, {
      onMutate: (data) => {
        queryCache.setQueryData("searchEdit", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("searchEdit", variables);
      },
      onError: (err, variables, rollback) => {
       console.log("error")
      },
    });
  };

export const useSearchDelete = () => {
    return useMutation(api.searchDelete, {
      onMutate: (data) => {
        queryCache.setQueryData("searchDelete", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("searchDelete", variables);
      },
      onError: (err, variables, rollback) => {
       console.log("error")
      },
    });
  };
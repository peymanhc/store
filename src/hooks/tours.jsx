import * as api from "api/tours";
import { useMutation, queryCache } from "react-query";

export const useTours = () => {
  return useMutation(api.tours, {
    onMutate: (data) => {
      queryCache.setQueryData("tours", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("tours", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useToursShow = () => {
  return useMutation(api.toursShow, {
    onMutate: (data) => {
      queryCache.setQueryData("toursShow", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("toursShow", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useToursCity = () => {
  return useMutation(api.toursCity, {
    onMutate: (data) => {
      queryCache.setQueryData("toursCity", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("toursCity", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

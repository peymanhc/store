import * as api from "api/order";
import { useMutation, queryCache } from "react-query";

export const useOrders = () => {
  return useMutation(api.orders, {
    onMutate: (data) => {
      queryCache.setQueryData("orders", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("orders", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useOrdersShow = () => {
  return useMutation(api.ordersShow, {
    onMutate: (data) => {
      queryCache.setQueryData("ordersShow", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("ordersShow", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

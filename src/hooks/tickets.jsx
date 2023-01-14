import * as api from "api/ticket";
import { useMutation, queryCache } from "react-query";

export const useTickets = () => {
  return useMutation(api.tickets, {
    onMutate: (data) => {
      queryCache.setQueryData("tickets", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("tickets", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useTicketsShow = () => {
  return useMutation(api.ticketsShow, {
    onMutate: (data) => {
      queryCache.setQueryData("ticketsShow", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("ticketsShow", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useTicketsAdd = () => {
  return useMutation(api.ticketsAdd, {
    onMutate: (data) => {
      queryCache.setQueryData("ticketsAdd", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("ticketsAdd", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

export const useTicketsReplay = () => {
  return useMutation(api.ticketsReplay, {
    onMutate: (data) => {
      queryCache.setQueryData("ticketsReplay", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("ticketsReplay", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

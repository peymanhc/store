import * as api from "api/products";
import { useQuery, useMutation, queryCache } from "react-query";

export const useProductList = (catId, word) => {
  return useQuery(["productList", ""], () => api.productList(catId, word));
};
export const useProductShow = (Id) => {
  return useQuery(["productShow", ""], () => api.productShow(Id));
};
export const useProductTreecategory = () => {
  return useQuery("productTreecategory", api.productTreecategory);
};

export const useProductAddcomment = () => {
  return useMutation(api.productAddcomment, {
    onMutate: (data) => {
      queryCache.setQueryData("productAddcomment", data);
    },
    onSuccess: (data, variables) => {
      queryCache.setQueryData("productAddcomment", variables);
    },
    onError: (err, variables, rollback) => {
      console.log("error");
    },
  });
};

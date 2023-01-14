import * as api from "api/blog";

import { useQuery, useMutation, queryCache } from "react-query";

export const UseBlogList = (catId,word) => {
  return useQuery(["blogList", ""], () => api.blogList(catId,word));
}; 
export const UseblogShowItem = (Id) => {
  return useQuery(["blogShow", ""], () =>  api.blogShow(Id));
};

export const UseblogAddcomment = () => {
    return useMutation(api.blogAddcomment, {
      onMutate: (data) => {
        queryCache.setQueryData("blogAddcomment", data);
      },
      onSuccess: (data, variables) => {
        queryCache.setQueryData("blogAddcomment", variables);
      },
      onError: (err, variables, rollback) => {
       console.log("error")
      },
    });
  };
  
  export const BlogCategory = () => {
    return useQuery("blogCategory", api.blogCategory);
  };
  export const UseblogShow = () => {
    return useQuery("blogTreecategory", api.blogTreecategory);
  };
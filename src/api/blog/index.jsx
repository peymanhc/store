import axios from "shared/axios-shared";

export const blogList = async (catId, word) => {
  const { data } = await axios.get(`blog?catId=${catId}&word=${word}`);
  return data;
}; 
export const blogShow = async (bId) => {
  const { data } = await axios.get(`blog/show?bId=${bId}`);
  return data;
};

export const blogAddcomment = async ({
  token,
  bId,
  name,
  email,
  cell,
  message,
}) => {
  const result = {
    token,
    bId,
    name,
    email,
    cell,
    message,
  };
  const { data } = await axios.post(`blog/addcomment`, result);
  return data;
};

export const blogCategory = async (pId) => {
  const { data } = await axios.get(`blog/category?pId=${pId}`);
  return data;
};

export const blogTreecategory = async () => {
  const { data } = await axios.get(`blog/treecategory`);
  return data;
};

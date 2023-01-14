import axios from "shared/axios-shared";

export const productList = async (catId,word) => {
    const { data } = await axios.get(`products?catId=${catId}&word=${word}`);
    return data;
  };
   
export const productShow = async (proId) => {
    const { data } = await axios.get(`products/show?proId=${proId}`);
    return data;
  };
export const productTreecategory = async () => {
    const { data } = await axios.get(`products/treecategory`);
    return data;
  };
  
export const productAddcomment = async ({ token, bId,name,email,cell,message }) => {
    const result = { token, bId,name,email,cell,message };
    const { data } = await axios.post(`products/addcomment`, result);
    return data;
  };
   
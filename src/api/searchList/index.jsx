import axios from "shared/axios-shared";

export const searchList = async ({ token }) => {
  const { data } = await axios.post(`searchlist`, token);
  return data;
};

export const searchAdd = async ({ title, pId, token }) => {
  const { data } = await axios.post(
    `searchlist/add?title=${title}&pId=${pId}$token=${token}`
  );
  return data;
};

export const searchEdit = async ({ token, title, pId, itemId }) => {
  const result = { token, title, pId, itemId };
  const { data } = await axios.post(`searchlist/edit`, result);
  return data;
};

export const searchDelete = async ({ token, itemId }) => {
  const result = { token, itemId };
  const { data } = await axios.post(`searchlist/delete`, result);
  return data;
};

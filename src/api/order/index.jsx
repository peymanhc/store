import axios from "shared/axios-shared";

export const orders = async ({ token }) => {
  const { data } = await axios.post(`orders`, token);
  return data;
};

export const ordersShow = async ({ token, orderId }) => {
  const result = {
    token,
    orderId,
  };
  const { data } = await axios.post(`orders/show`, result);
  return data;
};

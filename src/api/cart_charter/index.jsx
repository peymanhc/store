import axios from "shared/axios-shared";

export const getBanks = async () => {
  const { data } = await axios.get(`cart/banks`);
  return data;
};

export const addCharter = async ({ token, course_id }) => {
  const result = {
    token,
    course_id,
  };
  const { data } = await axios.post(`cart/add`, result);
  return data;
};

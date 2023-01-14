import axios from "shared/axios-shared";

export const getSlider = async () => {
  const { data } = await axios.get(`slider`);
  return data;
};

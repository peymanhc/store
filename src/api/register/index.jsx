import axios from "shared/axios-shared";

export const getPlace = async (ostan) => {
  const { data } = await axios.get(`user/getplace?ostan=${ostan}`);
  return data;
};

export const register = async ({
  name,
  // family,
  mobile,
  email,
  // code,
  pass,
  // verification_token,
  // ostan,
  // city,
  // sysApp,
}) => {
  const result = {
    name,
    // family,
    mobile,
    email,
    // code,
    pass,
    // verification_token,
    // ostan,
    // city,
    // sysApp,
  };
  const { data } = await axios.post(`user/register`, result);
  return data;
};

export const getVerificationCode = async ({ mobile, resetPass }) => {
  const result = {
    mobile,
    resetPass,
  };
  const { data } = await axios.post(`user/getVerificationCode`, result);
  return data;
};

export const checkmobile = async ({ mobile }) => {
  const { data } = await axios.post(`user/checkmobile`, mobile);
  return data;
};

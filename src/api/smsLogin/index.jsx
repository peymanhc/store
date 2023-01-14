import axios from "shared/axios-shared";

export const smsCheckmobile = async ({ mobile }) => {
  const { data } = await axios.post(`usersmsbase/checkmobile`, mobile);
  return data;
};

export const userSmsBase = async ({
  mobile,
  code,
  verification_token,
  sysApp,
}) => {
  const result = { mobile, code, verification_token, sysApp };
  const { data } = await axios.post(`usersmsbase/login`, result);
  return data;
};

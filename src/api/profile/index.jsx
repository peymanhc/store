import axios from "shared/axios-shared";

export const profile = async ({ token }) => {
  const { data } = await axios.post(`profile`, token);
  return data;
};

export const editProfile = async ({
  token,
  name,
  family,
  tell,
  cell,
  email,
  address,
  pic,
  ostan,
  city,
}) => {
  const result = {
    token,
    name,
    family,
    tell,
    cell,
    email,
    address,
    pic,
    ostan,
    city,
  };
  const { data } = await axios.post(`profile/edit`, result);
  return data;
};

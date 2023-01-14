import axios from "shared/axios-shared";

export const login = async ({ mobile,password }) => {
    const { data } = await axios.post(`user/login`, mobile,password);
    return data;
  };

  export const resetPassword = async ({ mobile, code,pass,verification_token }) => {
    const result = { mobile, code,pass,verification_token };
    const { data } = await axios.post(`user/comfirm`, result);
    return data;
  };
  
export const checkmobile = async ({ token,oldPass,newPass,confirmPass }) => {
    const result = { token,oldPass,newPass,confirmPass };
    const { data } = await axios.post(`user/changepass`, result);
    return data;
  };
  
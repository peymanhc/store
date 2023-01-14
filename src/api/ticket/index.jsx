import axios from "shared/axios-shared";

export const tickets = async ({ token }) => {
  const { data } = await axios.post(`tickets`, token);
  return data;
};
export const ticketsShow = async ({ token, ticketId }) => {
  const { data } = await axios.post(`tickets/show`, token, ticketId);
  return data;
};

export const ticketsAdd = async ({ token, subject,message,pic }) => {
    const result = { token, subject,message,pic  };
    const { data } = await axios.post(`tickets/add`, result);
    return data;
  };
   
export const ticketsReplay = async ({ token, subject,message,pic }) => {
    const result = { token, subject,message,pic  };
    const { data } = await axios.post(`tickets/replay`, result);
    return data;
  };
   
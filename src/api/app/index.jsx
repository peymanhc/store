import axios from "shared/axios-shared";

export const update = async () => {
    const { data } = await axios.get(`app/update`);
    return data;
  };
   
export const config = async () => {
    const { data } = await axios.get(`app/config`);
    return data;
  };
   
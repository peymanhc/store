import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecukit.com/api/",
});

export default instance;

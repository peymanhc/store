import * as api from "api/app";

import { useQuery} from "react-query";

export const useAppUpdate = () => {
  return useQuery("appUpdate", api.update);
};
export const useAppConfig = () => {
  return useQuery("appConfig", api.config);
};
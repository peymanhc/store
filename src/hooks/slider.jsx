import * as api from "api/slider";

import { useQuery} from "react-query";

export const useSlider = () => {
  return useQuery("slider", api.getSlider);
};
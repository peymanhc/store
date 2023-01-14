import * as api from "api/gallery";

import { useQuery} from "react-query";

export const useGallery = () => {
  return useQuery("gallery", api.getGallery);
};
export const useAppConfig = () => {
  return useQuery("treecategoryGallery", api.getTreecategoryGallery);
};
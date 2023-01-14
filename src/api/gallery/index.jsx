import axios from "shared/axios-shared";

export const getGallery = async () => {
  const { data } = await axios.get(`gallery`);
  return data;
};

export const getTreecategoryGallery = async () => {
  const { data } = await axios.get(`gallery/treecategory`);
  return data;
};

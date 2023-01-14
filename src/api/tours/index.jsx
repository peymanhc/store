import axios from "shared/axios-shared";

export const tours = async ({
  source,
  destination,
  date,
  accommodation,
  vehicl,
  tour_type,
  special,
  foreign,
  order,
  sort,
}) => {
  const result = {
    source,
    destination,
    date,
    accommodation,
    vehicl,
    tour_type,
    special,
    foreign,
    order,
    sort,
  };
  const { data } = await axios.post(`tours`, result);
  return data;
};

export const toursShow = async ({ tourId }) => {
  const { data } = await axios.post(`tours/show`, tourId);
  return data;
};

export const toursCity = async ({ source }) => {
  const { data } = await axios.post(`tours/city`, source);
  return data;
};

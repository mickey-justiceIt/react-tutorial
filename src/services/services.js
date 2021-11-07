import { axiosApi } from "../axios/axios";
import { urlRequests } from "./urls";

export const userRegistration = (data) => {
  const url = urlRequests.register;
  return axiosApi({
    method: "POST",
    url,
    data,
  });
};

export const userLogin = (data) => {
  const url = urlRequests.login;
  return axiosApi({
    method: "POST",
    url,
    data,
  });
};
export const getProducts = (data) => {
  const url = urlRequests.products;
  return axiosApi({
    method: "GET",
    url,
    data,
  });
};

export const createProduct = (data) => {
  const url = urlRequests.products;
  return axiosApi({
    method: "POST",
    url,
    data,
  });
};

export const editProduct = (data) => {
  const url = urlRequests.products;
  return axiosApi({
    method: "PATCH",
    url,
    data,
  });
};

export const removeProduct = (data) => {
  const url = urlRequests.products;
  return axiosApi({
    method: "DELETE",
    url,
    data
  });
};

export const saleProduct = (data) => {
  const url = urlRequests.sales;
  return axiosApi({
    method: "POST",
    url,
    data,
  });
};

export const getUserDate = (data) => {
  const url = urlRequests.user;
  return axiosApi({
    method: "GET",
    url,
    data
  });
};

export const updateUser = (data) => {
  const url = urlRequests.user;
  return axiosApi({
    method: "PATCH",
    url,
    data
  });
};



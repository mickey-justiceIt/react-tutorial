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

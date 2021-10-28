import axios from "axios";

export const axiosApi = (params) => {
  const userToken = localStorage.getItem("CURRENT USER");
  let defaultHeaders = {
    "Content-type": "application/json",
    Authorization: userToken,
  };
  const headers = {
    ...defaultHeaders,
    ...params.headers,
  };
  return axios({
    headers,
    method: params.method,
    url: params.url,
    data: params.data,
  });
};

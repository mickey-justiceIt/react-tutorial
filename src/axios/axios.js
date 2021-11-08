import axios from "axios";

export const axiosApi = (params) => {
  let headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    ...params.headers,
  };

  return axios({
    headers,
    method: params.method,
    url: params.url,
    data: params.data,
  });
};

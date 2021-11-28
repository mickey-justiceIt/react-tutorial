const baseURL = "http://localhost:5000/api/";

export const urlRequests = {
  user: `${baseURL}auth`,
  login: `${baseURL}auth/login`,
  register: `${baseURL}auth/register`,
  products: `${baseURL}products`,
  sales: `${baseURL}sales`,
};

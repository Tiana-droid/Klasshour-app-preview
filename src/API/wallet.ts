import axios from "axios";

const api = axios.create({
  baseURL: "https://api.paystack.co",
});

api.interceptors.request.use(
  (request) => {
    request.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECRET}`,
    };
    return request;
  },
  (error) => {
    console.log("App can't make a request");
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  console.log("response received");
  if (response?.data?.token) {
    // console.log(getStoredAuthToken());
  }
  return response.data;
});

export default api;
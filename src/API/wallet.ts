import axios from "axios";

const api = axios.create({
  baseURL: "https://api.paystack.co",
});

api.interceptors.request.use(
  (request) => {
    request.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer sk_test_e988ca86bb754d1b3b8f5bf50ad578ca089ddf22`,
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
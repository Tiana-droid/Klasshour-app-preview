import axios from "axios";
import { getStoredAuthToken, removeStoredAuthToken } from "../utils/LS";

// const baseurl = "https://api.klasshour.com";

const baseurl = "http://localhost:4000";

const api = axios.create({
  baseURL: `${baseurl}/KH/api/v1/client`,
});

api.interceptors.request.use(
  (request) => {
    request.headers = {
      "Content-Type": "application/json",
      Authorization: getStoredAuthToken()
        ? `Bearer ${getStoredAuthToken()}`
        : "",
    };
    return request;
  },
  (error) => {
    console.log("App can't make a request");
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // console.log("response received");
    if (response?.data?.token) {
      // console.log(getStoredAuthToken());
    }
    return response.data;
  },
  (error) => {
    if (error?.response?.data?.authStatus === 403) {
      removeStoredAuthToken();
      window.location.assign("/login");
    }
    return Promise.reject(error);
  }
);

export default api;

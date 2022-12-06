import api from "../API";
import { storeAuthToken, storeClientUser } from "../utils/LS";

class USER {
  //login user
  user_login = async (data: any) => {
    try {
      const response: any = await api.post("/user/login", data);
      if (response?.status && response?.payload?.data) {
        storeAuthToken(response.token);
        storeClientUser(response?.payload?.data);
        return response;
      } else {
        return response;
      }
    } catch (error) {
      // console.log("error", error);
      return error;
    }
  };
  //signup new user
  user_signup = async (data: any) => {
    try {
      const response = await api.post("/user/signup", data);
      return response;
    } catch (error) {
      return error;
    }
  };
  user_reset = async (data: any) => {
    try {
      const response = await api.post("/user/reset-password", data);
      return response;
    } catch (error) {
      return error;
    }
  };
  user_change_password = async (data: any, token: any) => {
    try {
      const response = await api.put(
        `/user/reset-password?token=${token}`,
        data
      );
      return response;
    } catch (error) {
      return error;
    }
  };
  user_verify_account = async (data: any) => {
    try {
      const response = await api.post(`/user/verify-account`, data);
      return response;
    } catch (error) {
      return error;
    }
  };

  user_requests = async (id: any, page: number) => {
    try {
      const response = await api.post(`/student/my-requests?page=${page}`, id);
      if (response?.status) return response;
    } catch (error) {
      return error;
    }
  };

  all_requests = async (page:any) => {
    try {
      const response = await api.get(`/student/requests?page=${page}`);
      if (response?.status) return response;
    } catch (error) {
      return error;
    }
  };

  tutor_apply_request = async (payload: any,id:string) => {
    try {
      const response = await api.post(`/apply/request/${id}`, payload, {  headers: {
    "content-Type": "multipart/form-data",
  }, })
      if (response?.status) { return response } else {
        throw response
      };
    } catch (error) {
      return error;
    }
  };
}



const userOBJ = new USER();
export default userOBJ;

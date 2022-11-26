/* eslint-disable eqeqeq */
import api from "../API";

class USER {
  //login user
  user_login = async (data: any) => {
    try {
      const response = await api.post("/user/login", data);
      return response;
    } catch (error) {
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
}

const userOBJ = new USER();
export default userOBJ;

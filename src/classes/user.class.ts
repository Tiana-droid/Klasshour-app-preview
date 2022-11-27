import api from "../API";
import { storeAuthToken, storeClientUser } from "../utils/LS";

class USER {
  //login user
  user_login = async (data: any) => {
    try {
      const response: any = await api.post("/user/login", data);
      console.log(response, "response");
      if (response?.status && response?.payload?.data) {
        storeAuthToken(response.token);
        storeClientUser(response?.payload?.data);
        return response;
      }
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
}

const userOBJ = new USER();
export default userOBJ;

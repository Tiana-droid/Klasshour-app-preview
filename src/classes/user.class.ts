/* eslint-disable eqeqeq */
import api from "../API";
import { toast } from "react-toastify";
class USER {
  //login user
  user_login = async (data: any) => {
    try {
      const response = await api.post("/user/login", data);
      if (response) {
        if (response?.status == true) {
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      } else {
        toast.error(response?.message);
      }
      console.log("response from login", response);
    } catch (error) {
      console.log("error in login", error);
    }
  };
  //signup new user
  user_signup = async (data: any) => {
    try {
      const response = await api.post("/user/signup", data);
      if (response) {
        if (response?.status == true) {
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      } else {
        toast.error(response?.message);
      }

      console.log(response, "from register");
    } catch (error) {
      console.log("error in Registration", error);
    }
  };
}

const userOBJ = new USER();
export default userOBJ;

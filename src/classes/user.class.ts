import api from "../API";

class USER {
  user_login = async (data: any) => {
    try {
      const response = await api.post("/user/login", data);
      console.log("response from login", response);
    } catch (error) {
      console.log("error in login", error);
    }
  };
}

const userOBJ = new USER();
export default userOBJ;

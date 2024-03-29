import api from "../API";
import { storeAuthToken, storeClientUser,getStoredClientUser } from "../utils/LS";

const { merithubUserID, userID } = getStoredClientUser()

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
      const response = await api.get(`/tutor/requests?page=${page}`);
      if (response?.status) return response;
    } catch (error) {
      return error;
    }
  };
  tutor_apply_request = async (payload: any,requestID:string) => {
    try {
      const response = await api.post(`/apply/request/${requestID}`, payload, {  headers: {
    
  }, })
      if (response?.status) { return response } else {
        throw response
      };
    } catch (error) {
      return error;
    }
  };

   tutor_schedule_class = async (payload: any) => {
    try {
      const response = await api.post(`/schedule-class/${merithubUserID}`, payload)
      if (response?.status) { return response } else {
        throw response
      };
    } catch (error) {
      return error;
    }
   };
  
  tutor_all_class = async (merithubTutorID: string, page: number,past?:boolean) => {
     try {
   const response = await api.get(`/tutor-class/${merithubTutorID}?page=${page}&${past?past:false}`);
    return response;
    } catch (error) {
      return error
    }
  }
  tutor_applications = async ( page: number) => {
     try {
   const response = await api.get(`/get-application/${userID}?page=${page}`);
    return response;
    } catch (error) {
      return error
    }
  }
   //get all bank
  get_user_balance = async (userId: string) => {
    try {
      const response = await api.get(`/user/account/${userId}`);
      return response;
    } catch (error) {
      return error;
    }
  };
  get_user_activity = async(page:any)=>{
    try {
      const response = await api.get(`/user/my-activity/${merithubUserID}/?page=${page}`);
      return response;
    } catch (error) {
      return error;
    }
  }

  get_user_account = async () => {
    try {
      const response = await api.get(`/user/account/${userID}`);
      return response;
    } catch (error) {
      return error;
    }
  }

  update_user_profile = async (payload:any) => {
     try {
       const response = await api.post(`/user/update-profile`, payload, {headers:{"content-type":"multipart/form-data"}},
       );
      return response;
    } catch (error) {
      return error;
    }
  }

  get_change_password_code = async (payload:any) => {
     try {
       const response = await api.post(`/user/code/update-password`, payload, {headers:{"content-type":"multipart/form-data"}},
       );
      return response;
    } catch (error) {
      return error;
    }
  }

   change_password_code = async (payload:any) => {
     try {
       const response = await api.post(`/user/update-password`, payload, {headers:{"content-type":"multipart/form-data"}},
       );
      return response;
    } catch (error) {
      return error;
    }
  }
}



const userOBJ = new USER();
export default userOBJ;

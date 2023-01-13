import api from "../API";

class Student {
  // post request
  post_request = async (data: any) => {
    try {
      const response = await api.post(`student/request`, data);
      return response;
    } catch (error) {
      return error;
    }
  };
  get_tutors_applications = async (id: any,page:number) => {
  try {
     const response = await api.get(`/student/get-requests/${id}/?page=${page}`);
    return response;
  } catch (error) {
    console.log("BE-Error",error)
      return error
  }
  }
  all_requests = async (page:any,id:string) => {
    try {
      const response = await api.get(`/student/requests/${id}?page=${page}`);
      if (response?.status) return response;
    } catch (error) {
      return error;
    }
  };
  accept_tutor_request = async (data: any)=>{
    try {
   const response = await api.post(`/request/?action=accept`, data);
    return response;
    } catch (error) {
      return error
    }
  }
  getTutorapplication = async (data: any) => {
    try {
   const response = await api.get(`/tutor/profile/${data.fullName}`);
    return response;
    } catch (error) {
      return error
    }
  }
  student_join_class = async (request:any) => {
    try {
      const response = await api.post(`/join-class`, request);
    return response;
    } catch (error) {
      return error
    }
  }
  student_all_classes = async (merithubStudentID: string,page:number,past?:boolean) => {
     try {
   const response = await api.get(`/class/${merithubStudentID}?page=${page}&past=${past?past:false}`);
    return response;
    } catch (error) {
      return error
    }
  }

}

const StudentOBJ = new Student();
export default StudentOBJ;

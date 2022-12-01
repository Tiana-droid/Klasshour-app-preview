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
}

const StudentOBJ = new Student();
export default StudentOBJ;
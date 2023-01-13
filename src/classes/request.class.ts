import api from "../API";
import { storeAuthToken } from "../utils/LS";

class REQUESTS {
    //Student post request
    make_request = async (data: any) => {
        try {
            const response: any = await api.post("/student/request", data);
            if (response?.status && response?.payload?.data) {
                storeAuthToken(response.token);
                return response;
            }
        } catch (error) {
            return error;
        }
    };

    //Student get All requests
    get_all_request = async (params: any) => {
        try {
            const response: any = await api.get(`/student/get-pending-requests/${params}`);
            if (response?.status && response?.payload) {
                // storeAuthToken(response.token);
                return response;
            }
        } catch (error) {
            return error;
        }
    };

    get_all_tutor_request = async (params: any) => {
        try {
            const response: any = await api.get(`/student/get-requests/${params}/?page=${1}`);
            if (response?.status && response?.payload) {
                // storeAuthToken(response.token);
                return response;
            }
        } catch (error) {
            return error;
        } 
    }
}

const studentRequest = new REQUESTS();
export default studentRequest;

import Api from '../NetworkLib/api';
import { SERVICE_URL } from '../service/ServiceConstants';

export const userService = {
    login,
};

// login Services
function login(params) {
    // alert(JSON.stringify(params))
    return Api.postRequest(SERVICE_URL.LOGIN_URL, params, (result) => {
        return result;
    });
}




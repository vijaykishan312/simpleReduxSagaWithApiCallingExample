import Api from '../NetworkLib/api';
import { SERVICE_URL } from '../service/ServiceConstants';

export const userService = {
    login,
    getSingleEmployeeData
};

function login(params) {
    return Api.postRequest(SERVICE_URL.LOGIN_URL, params, (result) => {
        return result;
    });
}

function getSingleEmployeeData(params) {
    alert(JSON.stringify(params))
    return Api.getRequest(SERVICE_URL.employeeData+ params.ID, (result) => {
        return result;
    });
}






import * as types from '../../Redux/Action/ActionConstants';

export const loginRequest = data => ({ type: types.LOGIN_REQUEST,data });
export const getSingleEmployeeData = data => ({ type: types.GET_SINGLE_EMPLOYEE_DATA_REQUEST,data });
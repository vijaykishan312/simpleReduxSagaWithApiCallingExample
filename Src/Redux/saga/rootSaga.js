import { takeLatest } from 'redux-saga/effects';

import * as types from '../Action/ActionConstants';
import * as userSaga from '../saga/userSaga';

export default function* rootSaga() {

    yield takeLatest(types.LOGIN_REQUEST, userSaga.loginRequest);
    yield takeLatest(types.GET_SINGLE_EMPLOYEE_DATA_REQUEST, userSaga.getSingleEmployeeData);

}  
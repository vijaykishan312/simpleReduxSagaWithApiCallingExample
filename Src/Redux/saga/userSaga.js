import { call, put } from 'redux-saga/effects';
import { userService } from '../service/index';
import * as types from '../Action/ActionConstants';

// Log in service saga
export function* loginRequest(action) {
    try {
        yield put({ type: types.SHOW_LOADING, FormLoading: true });
        const data = yield call(userService.login, action.data);
        yield put({type:types.LOGIN_RESPONSE, data})
        console.log(" user saga "+JSON.stringify(data));
        
        yield put({ type: types.SHOW_LOADING, FormLoading: false });
    } catch (error) {
        console.log(" this is user loggin error in saga file . "+JSON.stringify(error))
        yield put({ type: types.SHOW_LOADING, FormLoading: false });
    }
}


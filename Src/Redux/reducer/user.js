import * as types from '../Action/ActionConstants';
import createReducer from '../NetworkLib/createReducer';

export const login = createReducer({}, {
    [types.LOGIN_RESPONSE](state, action) {
        console.log(" this is suer reduser response data:=  "+JSON.stringify(action))
        return ({ ...state, UserData: action.data, FormLoading:false });
    },     
})
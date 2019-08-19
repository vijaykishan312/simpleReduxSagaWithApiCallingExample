import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-native-session';
import * as userReducer from './user';

export default combineReducers(Object.assign(
    { session: sessionReducer },
    userReducer,
));
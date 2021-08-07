import * as actions from './actionTypes';

export const loginUser = () => {
    return {
        type: actions.LOGIN_USER
    };
} 

export const logoutUser = () => {
    return {
        type: actions.LOGOUT_USER
    };
}
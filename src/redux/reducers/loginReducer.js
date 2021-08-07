import * as actions from '../actionTypes';

const initialState = {
    isLoggedIn: false
}

const loginReducer = (state=initialState, action) => {
    console.log(action);
    switch(action.type) {
        case actions.LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true
            }
        case actions.LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }
}

export default loginReducer;
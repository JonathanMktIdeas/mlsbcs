import {
    ON_LOGIN,
    ON_LOGOUT,
    ON_MYSELF,
    ON_LOGIN_FAILURE,
    ON_PASSOWRD_UPDATED,
} from './types';

const token = localStorage.getItem('t');

const initialState = {
    loguedIn: !!token,
    token: token,
    data: null,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ON_LOGIN:
        return {
            ...state,
            loguedIn: true,
            token: action.payload.token,
            data: action.payload.data,
            error: null,
        }
    case ON_PASSOWRD_UPDATED:
        return {
            ...state,
            data: {
                ...state.data,
                password_updated: true,
            }
        }
    case ON_LOGIN_FAILURE:
        return {
            ...state,
            token: null,
            loguedIn: false,
            error: action.payload,
        };
    case ON_LOGOUT:
        return {
            ...state,
            token: null,
            loguedIn: false,
            error: null,
        }
    case ON_MYSELF:
        return {
            ...state,
            data: action.payload.data,
            error: null,
        }
    default:
        return state
  }
}

export default reducer;

import {
    ON_LOGIN,
    ON_LOGOUT,
    ON_MYSELF,
    ON_LOGIN_FAILURE,
    ON_PASSOWRD_UPDATED,
} from './types';
import service from '@utils/service';

export const login = (email, passwd) => dispatch => new Promise((res, rej) => {
    const body = { email, passwd };
    return service('member/auth/login', null, body, 'post')
        .then(({data}) => {
            dispatch({ type: ON_LOGIN, payload: { data }});
            res(data);
        })
        .catch(err => {
            rej(err);
        })
});

export const passwordUpdated = () => dispatch => {
    dispatch({ type: ON_PASSOWRD_UPDATED });
}

export const myself = (token) => {
    return dispatch => {
        service('member/me', null, null, 'get')
            .then(({ data }) => {
                dispatch({ type: ON_MYSELF, payload: { data }});
            })
            .catch(err => {
                localStorage.removeItem('t');
                dispatch({ type: ON_LOGIN_FAILURE, payload: err });
            })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('t');
        dispatch({ type: ON_LOGOUT });
    }
}

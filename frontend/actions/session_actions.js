import * as SeshApi from '../util/session_api_util';
import { createServer } from './servers_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const CLEAR_STATE = "CLEAR_STATE";

// thunk action creators
// err.responseJSON returns an object
// formatted {email:['error'], user:['error']...}
// action['errors']: above object
export const signup = (user) => test => (
    SeshApi.signup(user)
        .then((userInfo) => {
            return test(receiveCurrentUser(userInfo));
        },
            (err) => {
                return test(receiveSessionErrors(err.responseJSON))
            })
);

export const login = (user) => (dispatch, getState) => {
    return SeshApi.login(user)
        .then(
            (userInfo) => {
                dispatch(receiveCurrentUser(userInfo));
            },
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
        );
};

// export const login = (user) => dispatch => {
//     return SeshApi.login(user)
//         .then(
//             (userInfo) => {
//                 dispatch(receiveCurrentUser(userInfo));
//             },
//             (err) => dispatch(receiveSessionErrors(err.responseJSON))
//         );
// };

export const logout = () => dispatch => (
    SeshApi.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .then(() => dispatch(clearState()))
);

export const receiveCurrentUser = (currentUserInfo) => {
// export const receiveCurrentUser = ({ user, home, channel}) => {
// can reference as action.user or action.home    
// need to test probably currentUserInfo: user, home, channel
// ... that's the same thing as what's already there

    return {
        type: RECEIVE_CURRENT_USER,
        currentUserInfo: currentUserInfo
    };
};

const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    };
};

export const clearSessionErrors = () => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: []
    };
};

export const clearState = () => {
    return {
        type: CLEAR_STATE,
        cleared: {}
    };
};

const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER,
        currentUserInfo: {
            user: {},
            server: {},
            channel: {}
        }
    }
);

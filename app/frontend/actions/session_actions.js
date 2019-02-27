import * as SeshApi from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

// thunk action creators
export const signup = (user) => dispatch => (
    SeshApi.signup(user)
        .then(
            (user) => (dispatch(receiveCurrentUser(user))),
            // (newUser) => (dispatch(login(newUser))),
            // (newUser) => (SeshApi.login(newUser)
            //                 .then((loggedUser) => dispatch(receiveCurrentUser(loggedUser))),
            (err) => (dispatch(receiveSessionErrors(err.responseJSON)))
            )
);

export const login = (user) => dispatch => {
    return SeshApi.login(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
            // (err) => dispatch(receiveSessionErrors(err.responseJSON))
            );
};

export const logout = () => dispatch => (
    SeshApi.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

// action creators
export const receiveCurrentUser = (currentUser) => (
    {
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    }
);

const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    };
};

const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
);
import * as SeshApi from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const signup = (user) => dispatch => (
    SeshApi.signup(user)
        .then(
            (user) => (dispatch(receiveCurrentUser(user))),
            (err) => (dispatch(receiveSessionErrors(err.responseJSON)))
            )
);

export const login = (user) => dispatch => (
    SeshApi.login(user)
        .then(
            (user) => (dispatch(receiveCurrentUser(user))),
            (err) => (dispatch(receiveSessionErrors(err.responseJSON)))
            )
);

export const logout = () => dispatch => (
    SeshApi.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

const receiveCurrentUser = (currentUser) => (
    {
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    }
);

const receiveSessionErrors = (errors) => (
    {
        type: RECEIVE_CURRENT_USER,
        errors: errors
    }
);

const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
);
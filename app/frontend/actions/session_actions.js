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
export const signup = (user) => dispatch => (
    SeshApi.signup(user)
        .then((userInfo) => {
            // debugger
            return dispatch(receiveCurrentUser(userInfo));
        },
            (err) => {
                return dispatch(receiveSessionErrors(err.responseJSON))
            })
        // .then(({ currentUser }) => {
        //     dispatch(createServer({owner_id: currentUser.id, server_name: `${currentUser.id}_@me_home`}))})
        // .then((server) => {
        //     debugger
        //     return "";
        // })
);

export const login = (user) => dispatch => {
    return SeshApi.login(user)
        .then(
            (userInfo) => (dispatch(receiveCurrentUser(userInfo))),
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
        )
        .then(
            (defaultInfo) => {
                const defServerId = defaultInfo.currentUserInfo.home.id;
                const defChannelId = defaultInfo.currentUserInfo.channel.id;
                this.props.history.push(`/channels/${defServerId}/${defChannelId}`);
            }
        );
};

export const logout = () => dispatch => (
    SeshApi.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .then(() => dispatch(clearState()))
);

// action creators
// export const receiveCurrentUser = (currentUser) => (
//     {
//         type: RECEIVE_CURRENT_USER,
//         currentUser: currentUser // ADD IN SERVER & CHANNEL HERE
//     }
// );
export const receiveCurrentUser = (currentUserInfo) => {
// export const receiveCurrentUser = ({ user, home, channel}) => {
// can reference as action.user or action.home    
// need to test probably currentUserInfo: user, home, channel
// ... that's the same thing as what's already there
    // debugger
    return {
        type: RECEIVE_CURRENT_USER,
        currentUserInfo: currentUserInfo // ADD IN SERVER & CHANNEL HERE
        // user,
        // home,
        // channel
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
            home: {}
        }
    }
);
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { CLEAR_STATE } from '../actions/session_actions';

// export const usersReducer = (oldState = {
//                     currentUserInfo: {
//                         user: { id: undefined, email: undefined, username: undefined },
//                         home: { id: undefined, server_name: undefined, owner_id: undefined }
//                     }}, action) => {
export const usersReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    // debugger
    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // newState[action.currentUser.id] = action.currentUser;
            // debugger
            // newState[action.currentUserInfo.id] = action.currentUserInfo;
            // return {currentUserInfo: action.currentUserInfo};
            return Object.assign({}, oldState, { [action.currentUserInfo.user.id]: action.currentUserInfo.user });
            // return newState;
        case CLEAR_STATE:
            return {};
        default:
            return oldState;
    }
};

export default usersReducer;
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { CLEAR_STATE } from '../actions/session_actions';

export const usersReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    
    switch(action.type) {
        // can add receive all users later for search
        // case RECEIVE_CURRENT_USER:
        //     // newState[action.currentUser.id] = action.currentUser;
        //     
        //     // newState[action.currentUserInfo.id] = action.currentUserInfo;
        //     // return {currentUserInfo: action.currentUserInfo};
        //     newState[action.currentUserInfo.user.id] = action.currentUserInfo.user;
        //     return newState;
        case CLEAR_STATE:
            return {};
        default:
            return oldState;
    }
};

export default usersReducer;
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions.js';

export const sessionReducer = (oldState={ 
                        currentUserInfo: {
                            user: {id: undefined, email: undefined, username: undefined},
                            home: {id: undefined, server_name: undefined, owner_id: undefined}
                        }}, action) => {
    // debugger
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // newState.id = action.currentUser.id;
            // debugger
            return {currentUserInfo: action.currentUserInfo};
        case LOGOUT_CURRENT_USER:
            return {currentUserInfo: action.currentUserInfo};
        default:
            return oldState;
    }
};

export default sessionReducer;
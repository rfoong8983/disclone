import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions.js';
import { RECEIVE_CURRENT_SERVER_ID } from '../actions/ui_actions';

export const sessionReducer = (oldState={ 
                            user: {id: undefined, email: undefined, username: undefined},
                            server: {id: undefined, server_name: undefined, owner_id: undefined},
                            channel: {id: undefined, channel_name: undefined, server_id: undefined}
                        }, action) => {
    // debugger
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // newState.id = action.currentUser.id;
            // debugger
            return action.currentUserInfo;
        case RECEIVE_CURRENT_SERVER_ID:
            newState['server'] = action.server;
            return newState;
        case LOGOUT_CURRENT_USER:
            return action.currentUserInfo;
        default:
            return oldState;
    }
};

export default sessionReducer;
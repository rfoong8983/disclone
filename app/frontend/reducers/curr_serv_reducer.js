import { RECEIVE_CURRENT_SERVER_ID } from '../actions/ui_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

//removed @me from oldState
const currentServerReducer = (oldState={ serverInfo: {serverId: "", alias: "" } }, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_SERVER_ID:
            // return action.serverId;
            return action.serverInfo;
        case RECEIVE_CURRENT_USER:
            return action.currentUserInfo.home;
        case CLEAR_STATE:
            return {};
        default:
            return oldState;
    }
};

export default currentServerReducer;
import { RECEIVE_CURRENT_SERVER_ID } from '../actions/ui_actions';

//removed @me from oldState
const currentServerReducer = (oldState={ serverInfo: {serverId: "", alias: "" } }, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_SERVER_ID:
            // return action.serverId;
            return action.serverInfo;
        default:
            return oldState;
    }
};

export default currentServerReducer;
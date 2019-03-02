import { RECEIVE_CURRENT_SERVER_ID } from '../actions/ui_actions';

const currentServerReducer = (oldState={serverId: "@me"}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CURRENT_SERVER_ID:
            return action.serverId;
        default:
            return oldState;
    }
};

export default currentServerReducer;
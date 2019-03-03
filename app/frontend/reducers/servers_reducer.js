import {
    RECEIVE_ALL_SERVERS,
    RECEIVE_SERVER,
    REMOVE_SERVER
} from '../actions/servers_actions';

const serversReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    // console.log("oldState: ", oldState);
    // console.log("newState: ", newState);
    // console.log("action: ", action);
    switch(action.type) {
        case RECEIVE_ALL_SERVERS:
            return Object.assign({}, newState, action.servers);
        case RECEIVE_SERVER:
            // console.log(newState);
            // console.log(action.server);
            newState[action.server.id] = action.server;
            return newState;
        case REMOVE_SERVER:
            delete newState[action.serverId];
            return newState;
        default:
            return oldState;
    }
};

export default serversReducer;
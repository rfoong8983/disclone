import {
    RECEIVE_ALL_SERVERS,
    RECEIVE_SERVER,
    REMOVE_SERVER
} from '../actions/servers_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLEAR_STATE } from '../actions/session_actions';

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
            // debugger
            // MIGHT BE BREAKING CREATE SERVER
            newState[action.server.id] = action.server;
            newState[action.server.server.id] = action.server.server;
            return newState;
        // case RECEIVE_CURRENT_USER:
        //     // if (action.currentUserInfo.server) {
        //     //     newState[action.currentUserInfo.server.id] = action.currentUserInfo.server;
        //     //     return newState;
        //     // }
            
        //     newState[action.currentUserInfo.server.id] = action.currentUserInfo.server;
        //     return newState;
            

            // return oldState;
        case REMOVE_SERVER:
            delete newState[action.serverId];
            return newState;
        case CLEAR_STATE:
            return {};
        default:
            return oldState;
    }
};

export default serversReducer;
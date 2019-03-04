import { 
    RECEIVE_SERVER_ERRORS,
    
} from '../actions/servers_actions';

const serversErrorsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SERVER_ERRORS:
        // only keeping track of one set of errors
        // line below => return most recent errors
            return action.errors;
        default:
            return oldState;
    }
};

export default serversErrorsReducer;
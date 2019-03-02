import { RECEIVE_SERVER_ERRORS } from '../actions/servers_actions';

const serversErrorsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SERVER_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
};

export default serversErrorsReducer;
import { 
    RECEIVE_CHANNEL_ERRORS
} from '../actions/channel_actions';

const channelsErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CHANNEL_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
};

export default channelsErrorsReducer;
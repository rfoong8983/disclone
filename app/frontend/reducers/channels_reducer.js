import { 
    RECEIVE_ALL_CHANNELS,
    RECEIVE_ONE_CHANNEL,
    REMOVE_ONE_CHANNEL
} from '../actions/channel_actions';


const channelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_ALL_CHANNELS:
        // might need to fix this when creating a channel??? probably not though
            return action.channels;
        case RECEIVE_ONE_CHANNEL:
            newState[action.channel.id] = action.channel;
            return newState;
        case REMOVE_ONE_CHANNEL:
            delete newState[action.channelId];
            return newState;
        default:
            return oldState;
    }
};

export default channelsReducer;
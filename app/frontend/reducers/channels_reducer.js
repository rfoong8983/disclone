import { 
    RECEIVE_ALL_CHANNELS,
    RECEIVE_ONE_CHANNEL,
    REMOVE_ONE_CHANNEL
} from '../actions/channel_actions';
// receive current user has default channel
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER } from '../actions/servers_actions';
import { CLEAR_STATE } from '../actions/session_actions';


const channelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    // debugger
    switch(action.type) {
        case RECEIVE_ALL_CHANNELS:
        // might need to fix this when creating a channel??? probably not though
            return action.channels;
        case RECEIVE_ONE_CHANNEL:
            newState[action.channel.id] = action.channel;
            return newState;
        case RECEIVE_SERVER:
            newState[action.server.channel.id] = action.server.channel;
            return newState;
        case RECEIVE_CURRENT_USER:
            if (action.currentUserInfo.channel) {
                newState[action.currentUserInfo.channel.id] = action.currentUserInfo.channel;
                return newState;
            }
            
            return oldState;
        case CLEAR_STATE:
            return {};
        case REMOVE_ONE_CHANNEL:
            delete newState[action.channelId];
            return newState;
        default:
            return oldState;
    }
};

export default channelsReducer;
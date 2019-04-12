import { RECEIVE_CURRENT_CHANNEL_ID } from '../actions/ui_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER } from '../actions/servers_actions';
import { RECEIVE_ONE_CHANNEL } from '../actions/channel_actions';

const currentChannelReducer = (oldState={ channel: {
                                            id: undefined, channel_name: undefined
                                        }
                            }, action) => {

    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CURRENT_CHANNEL_ID:
            return action.channel;
        case RECEIVE_SERVER:
            return action.serverAndDefChan.channel;
        case RECEIVE_ONE_CHANNEL:
            return action.channel;
        case RECEIVE_CURRENT_USER:
            return action.currentUserInfo.channel;
        case CLEAR_STATE:
            return {};
        default:
            return oldState;
    }
};

export default currentChannelReducer;
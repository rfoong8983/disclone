import { RECEIVE_CURRENT_CHANNEL_ID } from '../actions/ui_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const currentChannelReducer = (oldState={channelId:undefined, channelAlias: undefined}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_CHANNEL_ID:
            return action.channelInfo;
        case RECEIVE_CURRENT_USER:
            return action.currentUserInfo.channel;
        case CLEAR_STATE:
            return {};
        default:
            return oldState;
    }
};

export default currentChannelReducer;
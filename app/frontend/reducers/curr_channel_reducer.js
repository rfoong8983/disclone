import { RECEIVE_CURRENT_CHANNEL_ID } from '../actions/ui_actions';

const currentChannelReducer = (oldState={channelId:undefined, channelAlias: undefined}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_CHANNEL_ID:
            return action.channelInfo;
        default:
            return oldState;
    }
};

export default currentChannelReducer;
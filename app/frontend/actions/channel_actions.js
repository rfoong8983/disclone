import * as ChannelApi from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_ONE_CHANNEL = "RECEIVE_ONE_CHANNEL";
export const REMOVE_ONE_CHANNEL = "REMOVE_ONE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";

export const fetchChannels = (serverId) => dispatch => {
    ChannelApi.fetchChannels(serverId)
        .then((channels => {
            debugger
            dispatch(receiveAllChannels(channels));
        })
    );
};

export const createChannel = (channel) => dispatch => {
    ChannelApi.createChannel(channel)
        .then(
            (channel) => dispatch(receiveOneChannel(channel)),
            (err) => {
                console.log(err);
                dispatch(receiveChannelErrors(err.responseJSON));
            }
        );
};

export const destroyChannel = (channelId) => dispatch => {
    ChannelApi.destroyChannel(channelId)
        .then(
            () => dispatch(removeChannel(channelId)),
            (err) => {
                console.log(err);
                dispatch(removeChannelErrors(err.responseJSON));
            }
        );
};

const receiveAllChannels = function (channels) {
    return {
        type: RECEIVE_ALL_CHANNELS,
        channels
    };
};

const receiveOneChannel = function (channel) {
    return {
        type: RECEIVE_ONE_CHANNEL,
        channel
    };
};

export const receiveChannelErrors = function (errors) {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    };
};

export const removeChannelErrors = function () {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors: {}
    };
};

const removeChannel = function (channelId) {
    return {
        type: REMOVE_ONE_CHANNEL,
        channelId
    };
};
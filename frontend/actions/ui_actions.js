export const RECEIVE_CURRENT_SERVER_ID = "RECEIVE_CURRENT_SERVER_ID";
export const RECEIVE_CURRENT_CHANNEL_ID = "RECEIVE_CURRENT_CHANNEL_ID";

export const receiveCurrentServerId = (serverId, name) => {
    return {
        type: RECEIVE_CURRENT_SERVER_ID,
        server: {
            id: serverId,
            server_name: name
        }
    };
};

export const receiveCurrentChannelId = (channelId, name) => {
    return {
        type: RECEIVE_CURRENT_CHANNEL_ID,
        channel: {
            id: channelId,
            channel_name: name
        }
    };
};
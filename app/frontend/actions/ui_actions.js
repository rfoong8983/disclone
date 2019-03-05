export const RECEIVE_CURRENT_SERVER_ID = "RECEIVE_CURRENT_SERVER_ID";
export const RECEIVE_CURRENT_CHANNEL_ID = "RECEIVE_CURRENT_CHANNEL_ID";

export const receiveCurrentServerId = (serverId, alias) => {
    // debugger
    return {
        type: RECEIVE_CURRENT_SERVER_ID,
        serverInfo: {
            serverId: serverId,
            serverAlias: alias
        }
        // serverId: serverId,
        // alias: alias
    };
};

export const receiveCurrentChannelId = (channelId, alias) => {
    return {
        type: RECEIVE_CURRENT_CHANNEL_ID,
        channelInfo: {
            channelId: channelId,
            channelAlias: alias
        }
    };
};
export const RECEIVE_CURRENT_SERVER_ID = "RECEIVE_CURRENT_SERVER_ID";
export const RECEIVE_CURRENT_CHANNEL_ID = "RECEIVE_CURRENT_CHANNEL_ID";

export const receiveCurrentServerId = (serverId, alias) => {
    // debugger
    return {
        type: RECEIVE_CURRENT_SERVER_ID,
        serverInfo: {
            serverId: serverId,
            alias: alias
        }
        // serverId: serverId,
        // alias: alias
    };
};
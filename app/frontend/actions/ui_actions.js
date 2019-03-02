export const RECEIVE_CURRENT_SERVER_ID = "RECEIVE_CURRENT_SERVER_ID";
export const RECEIVE_CURRENT_CHANNEL_ID = "RECEIVE_CURRENT_CHANNEL_ID";

export const receiveCurrentServerId = (serverId) => {
    return {
        type: RECEIVE_CURRENT_SERVER_ID,
        serverId: serverId
    };
};
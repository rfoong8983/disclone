export const createChannel = (channel) => (
    $.ajax({
        method: "POST",
        url: `/api/channels`,
        data: { channel }
    })
);

export const destroyChannel = (channelId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/channels/${channelId}`
    })
);

export const fetchChannels = (serverId) => (
    $.ajax({
        method: "GET",
        url: `/api/channels`,
        data: {server_id: serverId}
    })
);
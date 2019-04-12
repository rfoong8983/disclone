export const createServer = (server) => (
    $.ajax({
        method: "POST",
        url: `/api/servers`,
        data: { server }
    })
);

export const destroyServer = (serverId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/servers/${serverId}`
    })
);

export const fetchServers = () => (
    $.ajax({
        method: "GET",
        url: `/api/servers`
    })
);

// export const fetchUserServers = (currentUserId) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/servers/${currentUserId}`
//     })
// );
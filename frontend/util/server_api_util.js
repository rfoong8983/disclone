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

export const fetchServers = (all) => {
    if (all === undefined) all = false;
    // debugger
    return $.ajax({
        method: "GET",
        url: `/api/servers`,
        data: { 'server': { 'all': all }}
    });
};

export const fetchSubs = () => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `/api/server_subs`
    });
};

export const newSub = (sub) => {
    return $.ajax({
        method: "POST",
        url: `/api/server_subs`,
        data: { sub }
    })
}

// export const fetchUserServers = (currentUserId) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/servers/${currentUserId}`
//     })
// );
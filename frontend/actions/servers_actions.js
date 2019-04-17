import * as ServerApi from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER = "REMOVE_SERVER";

export const fetchServers = (all) => dispatch => {
    debugger
    return ServerApi.fetchServers(all)
        .then((servers) => dispatch(receiveAllServers(servers)));
};

// export const fetchServersByName = () => dispatch => {
//     return ServerApi.fetchServers()
//         .then((servers) => {
//             const serversByName = {};
//             const vals = Object.values(servers);
//             for (let i=0; i < vals.length; i++) {
//                 serversByName[vals[i].server_name] = vals[i];
//             }
//             return serversByName;
//         });
// };

export const createServer = (server) => dispatch => {
    return ServerApi.createServer(server)
        .then(
            (serverAndDefChan) => dispatch(receiveServer(serverAndDefChan)),
            (err) => dispatch(receiveServerErrors(err.responseJSON))
        );
};

export const destroyServer = (serverId) => dispatch => {
    return ServerApi.destroyServer(serverId)
        .then(
            () => dispatch(removeServer(serverId)),
            (err) => dispatch(receiveServerErrors(err.responseJSON))
        );
};

// export const fetchUserServers = (currentUserId) => dispatch => {
//     return ServerApi.fetchServers()
//         .then((servers) => dispatch())
// };

const receiveAllServers = (servers) => {
    return {
        type: RECEIVE_ALL_SERVERS,
        servers: servers
    };
};

// export const receiveServer = (server) => {
export const receiveServer = (serverAndDefChan) => {
    return {
        type: RECEIVE_SERVER,
        serverAndDefChan: serverAndDefChan
    };
};

const removeServer = (serverId) => {
    return {
        type: REMOVE_SERVER,
        serverId: serverId
    };
};

export const receiveServerErrors = (errors) => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors: errors
    };
};

export const clearServerErrors = () => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors: []
    };
};

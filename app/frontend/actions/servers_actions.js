import * as ServerApi from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER = "REMOVE_SERVER";

export const fetchServers = () => dispatch => {
    return ServerApi.fetchServers()
        .then((servers) => dispatch(receiveAllServers(servers)));
};

export const createServer = (server) => dispatch => {
    return ServerApi.createServer(server)
        .then(
            (server) => dispatch(receiveServer(server)),
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

const receiveServer = (server) => {
    return {
        type: RECEIVE_SERVER,
        server: server
    };
};

const removeServer = () => {
    return {
        type: REMOVE_SERVER,
        serverId: serverId
    };
};

const receiveServerErrors = (errors) => {
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

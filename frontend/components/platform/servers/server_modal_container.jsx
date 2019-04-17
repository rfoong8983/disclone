import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ServerModal from './server_modal';
import { 
    createServer, 
    clearServerErrors,
    fetchServers,
    fetchServersByName,
    receiveServer,
    receiveServerErrors,
} from '../../../actions/servers_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import { closeModal } from '../../../actions/modal_actions';
import * as serverApi from '../../../util/server_api_util';

const msp = ({ session, entities, errors: { servers } }) => (
    {
        // currentUser: entities.users[session.id],
        currentUser: session.user,
        errors: servers,
        servers: entities.servers
    }
);

const mdp = (dispatch) => (
    {
        createServer: (server) => dispatch(createServer(server)),
        closeModal: () => dispatch(closeModal()),
        clearServerErrors: () => dispatch(clearServerErrors()),
        receiveServerErrors: (errors) => dispatch(receiveServerErrors(errors)),
        fetchServers: (all) => dispatch(fetchServers(all)),
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
        apiServers: (all) => serverApi.fetchServers(all)
        // findServer: (name) => dispatch(fetchServersByName())
        //     .then((servers) => {
        //         const found = servers[`${name}`];
        //         if (found === undefined) {
        //             dispatch(receiveServerErrors([' - Server does not exist']));
        //         }
        //     })
    }
);
// server component itself handles the 
// updating of currentServerId in ui slice of state

export default withRouter(connect(msp, mdp)(ServerModal));
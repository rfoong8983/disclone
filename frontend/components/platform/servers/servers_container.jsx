import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchServers, fetchSubs } from '../../../actions/servers_actions';
import { receiveCurrentServerId } from '../../../actions/ui_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import Servers from './servers';

const msp = ({ session, entities: { servers } }) => {
    return {
        currentUser: session.user,
        servers: servers,
        currentServerId: session.server.id,
        currentServerName: session.server.server_name
    };
};

const mdp = (dispatch) => (
    {
        fetchServers: (arr) => dispatch(fetchServers(arr)),
        fetchSubs: () => dispatch(fetchSubs()),
        closeModal: () => dispatch(closeModal()),
        receiveCurrentServerId: (serverId, alias) => dispatch(receiveCurrentServerId(serverId, alias)),
        createServer: (server) => dispatch(createServer(server)),
        otherForm: (
            <button
                onClick={() => dispatch(openModal('createServer'))}
                className="servCo_AddServerButton lightFont"
            >
                <span className="servCo_AddServerText">+</span>
            </button>
        )
    }
);
// server component itself handles the 
// updating of currentServerId in ui slice of state

export default withRouter(connect(msp, mdp)(Servers));
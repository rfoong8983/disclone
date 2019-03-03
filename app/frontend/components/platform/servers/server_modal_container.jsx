import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ServerModal from './server_modal';
import { createServer, clearServerErrors } from '../../../actions/servers_actions';
import { closeModal } from '../../../actions/modal_actions';

const msp = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
);

const mdp = (dispatch) => (
    {
        createServer: (server) => dispatch(createServer(server)),
        closeModal: () => dispatch(closeModal()),
        clearServerErrors: () => dispatch(clearServerErrors())
    }
);
// server component itself handles the 
// updating of currentServerId in ui slice of state

export default withRouter(connect(msp, mdp)(ServerModal));
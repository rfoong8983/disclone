import React from 'react';
import { connect } from 'react-redux';
// can grab currentServer from state or url; or import receiveCurrentServerId from serveractions
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../../actions/modal_actions';
import Channels from './channels';

const msp = ({ session, entities: { users, channels }}) => (
    {
        currentUser: users[session.id],
        channels: channels
    }
);

const mdp = (dispatch) => (
    {
        closeModal: () => dispatch(closeModal())
    }
);

export default withRouter(connect(msp, mdp)(Channels));
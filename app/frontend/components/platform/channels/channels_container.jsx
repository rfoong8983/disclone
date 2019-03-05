import React from 'react';
import { connect } from 'react-redux';
// can grab currentServer from state or url; or import receiveCurrentServerId from serveractions
import { withRouter } from 'react-router-dom';
import { fetchChannels } from '../../../actions/channel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import Channels from './channels';

const msp = ({ session, entities: { users, channels }, ui: { currServerInfo: { currentServerId, currentServerName } } }) => (
    {
        currentUser: users[session.id],
        // PASS CHANNELS FROM SERVER??
        channels: channels,
        currentServerId: currentServerId,
        currentServerName: currentServerName
    }
);

const mdp = (dispatch) => (
    {
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
        closeModal: () => dispatch(closeModal())
    }
);

export default withRouter(connect(msp, mdp)(Channels));
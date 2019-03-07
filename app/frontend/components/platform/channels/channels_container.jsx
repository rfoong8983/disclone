import React from 'react';
import { connect } from 'react-redux';
// can grab currentServer from state or url; or import receiveCurrentServerId from serveractions
import { withRouter } from 'react-router-dom';
import { fetchChannels } from '../../../actions/channel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { receiveCurrentChannelId } from '../../../actions/ui_actions';
import { logout } from '../../../actions/session_actions';
import Channels from './channels';

const msp = ({ session, entities: { users, channels }, ui: { currServerInfo, currChannelInfo } }) => {
    let userId;
    if (session.currentUserInfo) {
        userId = session.currentUserInfo.user.id;

    } else {
        userId = null;
    }

    debugger

    return {
        // currentUser: users[session.id],
        currentUser: session.user,
        // PASS CHANNELS FROM SERVER??
        channels: channels,
        currentServerId: currServerInfo.id,
        currentServerName: currServerInfo.server_name,
        currentChannelId: currChannelInfo.id,
        currentChannelName: currChannelInfo.channel_name
    };
};

const mdp = (dispatch) => (
    {
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
        closeModal: () => dispatch(closeModal()),
        receiveCurrentChannelId: (channelId, alias) => dispatch(receiveCurrentChannelId(channelId, alias)),
        logout: () => dispatch(logout())
    }
);

export default withRouter(connect(msp, mdp)(Channels));
import React from 'react';
import { connect } from 'react-redux';
// can grab currentServer from state or url; or import receiveCurrentServerId from serveractions
import { withRouter } from 'react-router-dom';
import { fetchChannels } from '../../../actions/channel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { receiveCurrentChannelId } from '../../../actions/ui_actions';
import { logout } from '../../../actions/session_actions';
import Channels from './channels';

const msp = ({ session, entities: { users, channels }, ui }) => {
    let userId;
    if (session.currentUserInfo) {
        userId = session.currentUserInfo.user.id;

    } else {
        userId = null;
    }

    return {
        // currentUser: users[session.id],
        currentUser: session.user,
        // PASS CHANNELS FROM SERVER??
        channels: channels,
        defaultServerId: session.server.id,
        currentServer: ui.currServerInfo,
        currentServerId: ui.currServerInfo.id,
        currentServerName: ui.currServerInfo.server_name,
        currentChannel: ui.currChannelInfo,
        currentChannelId: ui.currChannelInfo.id,
        currentChannelName: ui.currChannelInfo.channel_name
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
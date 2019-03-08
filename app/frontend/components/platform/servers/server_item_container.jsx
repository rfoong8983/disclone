import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { receiveCurrentServerId } from '../../../actions/ui_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import { receiveCurrentUser } from '../../../actions/session_actions';
import ServerItem from './server_item';

const msp = ({ entities, session: { user, channel, server } }) => {

    return {
        currentUser: user,
        channels: entities.channels,
        defaultChannel: channel,
        defaultServer: server
        // currChannelInfo: currChannelInfo
    };
};

const mdp = (dispatch) => (
    {
        receiveCurrentServerId: (serverId, alias) => dispatch(receiveCurrentServerId(serverId, alias)),
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
        receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
    }
);

export default withRouter(connect(msp, mdp)(ServerItem));
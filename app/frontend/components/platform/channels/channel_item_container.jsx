import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { receiveCurrentChannelId } from '../../../actions/ui_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelItem from './channel_item';

const msp = ({ session, entities: { users }, ui}) => {
    // debugger
    return {
        // currentUser: users[session.id]
        currentUser: session.user,
        currentServer: session.server,
        // channel: session.channel,
        channel: ui.currChannelInfo,
        currentChannelId: ui.currChannelInfo.id,
        currentChannelName: ui.currChannelInfo.channel_name
    };
};

const mdp = (dispatch) => (
    {
        receiveCurrentChannelId: (channelId, alias) => dispatch(receiveCurrentChannelId(channelId, alias)),
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
    }
);


export default withRouter(connect(msp, mdp)(ChannelItem));
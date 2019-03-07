import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { receiveCurrentChannelId } from '../../../actions/ui_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelItem from './channel_item';

const msp = ({ session, entities: { users } }) => {

    return {
        // currentUser: users[session.id]
        currentUser: session.user,
        channel: session.channel,
        currentChannelId: session.channel.id,
        currentChannelName: session.channel.channel_name
    };
};

const mdp = (dispatch) => (
    {
        receiveCurrentChannelId: (channelId, alias) => dispatch(receiveCurrentChannelId(channelId, alias)),
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
    }
);


export default withRouter(connect(msp, mdp)(ChannelItem));
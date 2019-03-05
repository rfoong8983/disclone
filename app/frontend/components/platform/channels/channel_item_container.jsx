import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { receiveCurrentChannelId } from '../../../actions/ui_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelItem from './channel_item';

const msp = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
);

const mdp = (dispatch) => (
    {
        receiveCurrentChannelId: (serverId, alias) => dispatch(receiveCurrentChannelId(serverId, alias)),
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
    }
);


export default withRouter(connect(msp, mdp)(ChannelItem));
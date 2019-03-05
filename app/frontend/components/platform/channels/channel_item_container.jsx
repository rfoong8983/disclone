import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { receiveCurrentChannelId } from '../../../actions/ui_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import ChannelItem from './channel_item';

const msp = ({ session, entities: { users } }) => {
    let userId;
    if (session.currentUserInfo) {
        userId = session.currentUserInfo.user.id;

    } else {
        userId = null;
    }

    return {
        // currentUser: users[session.id]
        currentUser: users[userId]
    }
};

const mdp = (dispatch) => (
    {
        receiveCurrentChannelId: (serverId, alias) => dispatch(receiveCurrentChannelId(serverId, alias)),
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
    }
);


export default withRouter(connect(msp, mdp)(ChannelItem));
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { closeModal } from '../../../actions/modal_actions';
import { createChannel } from '../../../actions/channel_actions';
import ChannelModal from './channel_modal';

const msp = (state) => {
    return {
        
    };
};

const mdp = (dispatch) => (
    {
        closeModal: () => dispatch(closeModal()),
        createChannel: (channel) => dispatch(createChannel(channel))
    }
);

export default withRouter(connect(msp, mdp)(ChannelModal));
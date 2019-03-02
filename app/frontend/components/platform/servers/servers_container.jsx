import { connect } from 'react-redux';
import { fetchServers } from '../../../actions/servers_actions';
import Servers from './servers';

const msp = ({ session, entities: { users, servers } }) => (
    {
        currentUser: users[session.id],
        servers: servers
    }
);

const mdp = (dispatch, ownProps) => (
    {
        fetchServers: () => dispatch(fetchServers())
    }
);

export default connect(msp, mdp)(Servers);
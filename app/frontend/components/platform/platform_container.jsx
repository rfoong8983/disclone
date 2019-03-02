import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Platform from './platform';

const msp = ({ session, entities: { users, servers } }) => (
    {
        currentUser: users[session.id]
    }
);

const mdp = (dispatch, ownProps) => (
    {
        logout: () => dispatch(logout())
            .then(() => ownProps.history.push("/login"))
    }
);

export default connect(msp, mdp)(Platform);
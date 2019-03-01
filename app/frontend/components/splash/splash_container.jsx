import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

// argument destructuring, pulls keys (session, users)
// will give me access to keys... session => {id: 1}
const msp = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
);

// const { something } = this.props
// => const something = this.props.something

// const anything = "hi"
// { anything }
// => { anything: "hi" }

const mdp = (dispatch, ownProps) => (
    {
        logout: () => dispatch(logout())
            .then(() => ownProps.history.push("/login"))
    }
);

export default connect(msp, mdp)(Splash);
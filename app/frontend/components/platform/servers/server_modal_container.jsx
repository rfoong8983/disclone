import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ServerModal from './server_modal';
import Servers from './servers';
import { openModal, closeModal } from '../../../actions/modal_actions';

// const msp = ({ session, entities: { users, servers } }) => (
//     {
//         currentUser: users[session.id],
//         servers: servers
//     }
// );

const mdp = (dispatch) => (
    {
        createServer: (server) => dispatch(createServer(server)),
        // otherForm: (
        //     <button 
        //         onClick={() => dispatch(openModal('createServer'))}
        //         className="servCo_AddServerButton lightFont"
        //     >
        //         <span className="servCo_AddServerText">+</span>
        //     </button>
        // )
    }
);
// server component itself handles the 
// updating of currentServerId in ui slice of state

export default withRouter(connect(null, mdp)(ServerModal));
import React from 'react';
import { connect } from "react-redux";
import { closeModal } from '../../../actions/modal_actions';
import ServerModalContainer from '../servers/server_modal_container';


function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'createServer':
            component = <ServerModalContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modalBackground" onClick={closeModal}>
            <div className="modalChild" onClick={e => e.stopPropagation()}>
            {/* <div className="modalChild"> */}
                { component }
            </div>
        </div>
    )
}

const msp = state => (
    {
        modal: state.ui.modal
    }
);

const mdp = dispatch => (
    {
        closeModal: () => dispatch(closeModal())
    }
);

export default connect(msp, mdp)(Modal);
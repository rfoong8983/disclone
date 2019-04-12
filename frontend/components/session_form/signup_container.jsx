import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => (
    {
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to='/login'>Login</Link>
    }
);

const mdp = (dispatch, ownProps) => (
    {
        processForm: (newUser) => dispatch(signup(newUser)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        closeModal: () => dispatch(closeModal())
    }
);

export default connect(msp, mdp)(SessionForm);
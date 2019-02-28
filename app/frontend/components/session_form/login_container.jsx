import React from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const msp = (state, ownProps) => (
    {
        errors: state.errors.session,
        formType: "login",
        navLink: <Link to="/signup">Continue</Link>
    }
);

const mdp = (dispatch, ownProps) => (
    {
        processForm: (user) => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
);

export default connect(msp, mdp)(SessionForm);
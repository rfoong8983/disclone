// utility files
// do they only pertain to routing or 
//   making calls to the server?
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (<Component {...props}/>) : (<Redirect to="/channels"/>)
    )}/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />)
    )} />
);

const msp = state => {
    // debugger
    return {loggedIn: Boolean(state.session.id)}
};

export const AuthRoute = withRouter(connect(msp)(Auth));
// export const ProtectedRoute = withRouter(connect(msp(Protected)));
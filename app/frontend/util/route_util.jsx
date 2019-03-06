import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, homeServerId, exact}) => (
    <Route path={path} exact={exact} render={(props) => {
        return !loggedIn ? (<Component {...props}/>) : (<Redirect to={`/channels/${homeServerId}`}/>)
    }}/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />)
    )} />
);

const msp = state => {
    // debugger
    let userId;
    let hId;
    if (state.session.currentUserInfo.user.id !== undefined) {
        userId = state.session.currentUserInfo.user.id;
        hId = state.session.currentUserInfo.home.id
    } else {
        userId = null;
        hId = null;
    }
    return {
        loggedIn: Boolean(userId),
        homeServerId: hId
    }
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, homeServerId, homeChannelId, exact}) => (
    <Route path={path} exact={exact} render={(props) => {
        return !loggedIn ? (<Component {...props}/>) : (<Redirect to={`/channels/${homeServerId}/${homeChannelId}`}/>)
    }}/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />)
    )} />
);

const msp = (state, ownProps) => {
    
    const session = state.session;
    
    const uId = session.user.id;
    const sId = session.server.id;
    const cId = session.channel.id;
    
    return {
        loggedIn: Boolean(uId),
        homeServerId: sId,
        homeChannelId: cId
    }
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
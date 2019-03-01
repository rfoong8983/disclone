import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import PageNotFound from './404/page_not_found';
import SplashContainer from './splash/splash_container';
import LogInContainer from './session_form/login_container';
import SignUpContainer from './session_form/signup_container';

const App = () => (
    <div>
        {/* <GreetingContainer /> */}
        <Switch>
            <AuthRoute exact path="/login" component={LogInContainer} />
            <AuthRoute exact path="/signup" component={SignUpContainer} />
            <Route exact path="/" component={SplashContainer} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
);

export default App;
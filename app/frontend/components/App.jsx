import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LogInContainer from './session_form/login_container';
import SignUpContainer from './session_form/signup_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        {/* <GreetingContainer /> */}
        <Switch>
            <AuthRoute exact path="/login" component={LogInContainer} />
            <AuthRoute exact path="/signup" component={SignUpContainer} />
            <Route exact path="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;
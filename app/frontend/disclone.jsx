import React from 'react';
import ReactDOM from 'react-dom';
import * as SeshApi from './util/session_api_util';
import { signup } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    // window.signup = SeshApi.signup;
    window.login = SeshApi.login;
    window.logout = SeshApi.logout;
    window.signup = signup;
    const store = configureStore();
    window.store = store;
    const root = document.getElementById("root");
    ReactDOM.render(<h3>React is rendering root.html.erb</h3>, root);
});
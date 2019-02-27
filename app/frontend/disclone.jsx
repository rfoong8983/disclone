import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
// import * as SeshApi from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: { 
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };

        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});

// start of tests
    // window.signup = SeshApi.signup;
    // window.login = login;

    // window.logout = logout;
    // window.signup = signup;
    // window.store = store;
    // window.receiveCurrentUser = receiveCurrentUser;
    // end of tests
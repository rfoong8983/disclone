import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
import * as ChannelApi from './util/channel_api_util';
import {
    fetchServers, 
    createServer, 
    destroyServer 
} from './actions/servers_actions';
import {
    fetchChannels,
    createChannel,
    destroyChannel,
    receiveChannelErrors,
    removeChannelErrors
} from './actions/channel_actions';

import { receiveCurrentServerId } from './actions/ui_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            // entities: { 
            //     users: { [window.currentUser.user.id]: window.currentUser.user }
            // },
            session: { 
                user: window.currentUser.user,
                server: window.currentUser.server,
                channel: window.currentUser.channel
            }
        };

        

        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // window.store = store; // access to state & dispatch
    // window.createChannel = createChannel;
    // window.destroyChannel = destroyChannel;
    // window.fetchChannels = fetchChannels;
    // window.receiveChannelErrors = receiveChannelErrors;
    // window.removeChannelErrors = removeChannelErrors;
    // window.receiveCurrentServerId = receiveCurrentServerId;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});

    // window.store = store; // access to state & dispatch
    // // window.createServer = ServerApi.createServer;
    // // window.destroyServer = ServerApi.destroyServer;
    // // window.fetchServers = ServerApi.fetchServers;
    // window.createServer = createServer;
    // window.destroyServer = destroyServer;
    // window.fetchServers = fetchServers;
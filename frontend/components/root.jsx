import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../constants/constants';
import App from './App';

const Root = ({ store }) => (
    <ActionCableProvider url={API_WS_ROOT}>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </ActionCableProvider>
);

export default Root;
import { combineReducers } from 'redux';
import currentServerReducer from './curr_serv_reducer';
import currentChannelReducer from './curr_channel_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
    currServerInfo: currentServerReducer,
    currChannelInfo: currentChannelReducer,
    modal: modalReducer
});
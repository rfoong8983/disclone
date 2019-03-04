import { combineReducers } from 'redux';
import currentServerReducer from './curr_serv_reducer.js';
import modalReducer from './modal_reducer';

export default combineReducers({
    currServerInfo: currentServerReducer,
    modal: modalReducer
});
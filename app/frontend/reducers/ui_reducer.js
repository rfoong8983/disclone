import { combineReducers } from 'redux';
import currentServerReducer from './curr_serv_reducer.js';
import modalReducer from './modal_reducer';

export default combineReducers({
    currServerId: currentServerReducer,
    modal: modalReducer
});
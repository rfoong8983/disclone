import { combineReducers } from 'redux';
import currentServerReducer from './curr_serv_reducer.js';

export default combineReducers({
    currServerId: currentServerReducer
});
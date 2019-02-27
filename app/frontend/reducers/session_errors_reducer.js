import { 
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
 } from '../actions/session_actions.js';

export const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        case RECEIVE_SESSION_ERRORS:
            return newState;
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;
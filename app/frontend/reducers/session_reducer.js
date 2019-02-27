import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions.js';

export const sessionReducer = (oldState={id: null}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState.session = action.currentUser.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState.session = null;
            return newState;
        default:
            return oldState;
    }
};

export default sessionReducer;
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

export const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        default:
            return oldState;
    }
};

export default usersReducer;
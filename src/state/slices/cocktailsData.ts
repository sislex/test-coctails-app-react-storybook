import { combineReducers } from '@reduxjs/toolkit';

const counter = (
    state = 4,
    action: { type: string }) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;

import { combineReducers } from 'redux';
import * as actions from '../actions/serviceB';

// Canonical data; maintain origianal data as arrived from source as point of truth.

const laps = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_LAPS_SUCCESS:
            return [...action.laps];
        case actions.FETCH_LAPS_STARTED:
            return [];
        case actions.FETCH_LAPS_FAILED:
            return [];
        default:
            return state;
    }
}

export const selectLaps = (state) => {
    return state.serviceB.laps;
}

const serviceB = combineReducers({ laps });

export default serviceB;
import * as actionTypes from '../actions/actionTypes';

import { serviceName as nameA } from '../actions/serviceA';
import { serviceName as nameB } from '../actions/serviceB';
import { serviceName as nameC } from '../actions/serviceC';

import * as serviceA from './serviceA';
import * as serviceB from './serviceB';
import * as serviceC from './serviceC';

import createViewModels from './viewModelFactory';

const laps = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_LAPS_SUCCESS:
            return [...action.laps];
        case actionTypes.FETCH_LAPS_STARTED:
            return [];
        case actionTypes.FETCH_LAPS_FAILED:
            return [];
        default:
            return state;
    }
}

// 1. Create ViewModels on the fly
export const selectLaps = (state, service) => {
    var data = [];

    if (service === nameA) {
        data = serviceA.selectLaps(state);
    } else if (service === nameB) {
        data = serviceB.selectLaps(state);
    } else if (service === nameC) {
        data = serviceC.selectLaps(state);
    }

    return createViewModels(service, data);
}

// 2. Create ViewModels one off and keep them in the store
// export const selectLaps = (state, service) => {
//     var data = [];

//     if (service === nameA) {
//         data = serviceA.selectLaps(state);
//     } else if (service === nameB) {
//         data = serviceB.selectLaps(state);
//     } else if (service === nameC) {
//         data = serviceC.selectLaps(state);
//     }

//     return createViewModels(service, data);
// }

export default laps;
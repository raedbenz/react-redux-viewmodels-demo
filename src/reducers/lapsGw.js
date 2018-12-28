import * as actionA from '../actions/serviceA';
import * as actionB from '../actions/serviceB';
import * as actionC from '../actions/serviceC';

import createViewModels from './viewModelFactory';

const laps = (state = [], action) => {
    switch (action.type) {
        case actionA.FETCH_LAPS_SUCCESS:
            return createViewModels(actionA.serviceName, action.laps);
        case actionB.FETCH_LAPS_SUCCESS:
            return createViewModels(actionB.serviceName, action.laps);
        case actionC.FETCH_LAPS_SUCCESS:
            return createViewModels(actionC.serviceName, action.laps);
        default:
            return state;
    }
}

// 2. Create ViewModels one off and keep them in the store
export const selectLaps = (state) => {
    return state.laps;
}

export default laps;
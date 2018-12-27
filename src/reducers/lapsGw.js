import { serviceName as nameA } from '../actions/serviceA';
import { serviceName as nameB } from '../actions/serviceB';
import { serviceName as nameC } from '../actions/serviceC';

import * as serviceA from './serviceA';
import * as serviceB from './serviceB';
import * as serviceC from './serviceC';

import createViewModels from './viewModelFactory';

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
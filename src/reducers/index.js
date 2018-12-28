import { combineReducers } from 'redux';

import serviceA from './serviceA';
import serviceB from './serviceB';
import serviceC from './serviceC';

import laps from './lapsGw';

export default combineReducers({
    serviceA,
    serviceB,
    serviceC,
    laps
});

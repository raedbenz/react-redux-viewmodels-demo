import { combineReducers } from 'redux';

import serviceA from './serviceA';
import serviceB from './serviceB';
import serviceC from './serviceC';

export default combineReducers({
    serviceA,
    serviceB,
    serviceC
});

import * as actionTypes from './actionTypes';
import * as serviceA from './serviceA';
import * as serviceB from './serviceB';
import * as serviceC from './serviceC';

export const fetchLaps = (service) => (dispatch) => {

    if (service === serviceA.serviceName) {
        dispatch(serviceA.fetchLaps());
    } else if (service === serviceB.serviceName) {
        dispatch(serviceB.fetchLaps());
    } else if (service === serviceC.serviceName) {
        dispatch(serviceC.fetchLaps());
    }
}
import * as api from '../api';

export const serviceName = 'C';

export const FETCH_LAPS_SUCCESS = "C/FETCH_LAPS_SUCCESS";
export const FETCH_LAPS_STARTED = "C/FETCH_LAPS_STARTED";
export const FETCH_LAPS_FAILED = "C/FETCH_LAPS_FAILED";

const fetchLapsSuccess = (laps) => ({
    type: FETCH_LAPS_SUCCESS,
    laps
})

export const fetchLaps = () => (dispatch) => {
    api.fetchLaps(serviceName)
        .then(laps => dispatch(fetchLapsSuccess(laps)));
}
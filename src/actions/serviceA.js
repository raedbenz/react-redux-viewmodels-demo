import * as api from '../api';

export const serviceName = 'A';

export const FETCH_LAPS_SUCCESS = "A/FETCH_LAPS_SUCCESS";
export const FETCH_LAPS_STARTED = "A/FETCH_LAPS_STARTED";
export const FETCH_LAPS_FAILED = "A/FETCH_LAPS_FAILED";

const fetchLapsSuccess = (laps) => ({
    type: FETCH_LAPS_SUCCESS,
    laps
})

export const fetchLaps = () => (dispatch) => {
    api.fetchLaps(serviceName)
        .then(laps => dispatch(fetchLapsSuccess(laps)));
}
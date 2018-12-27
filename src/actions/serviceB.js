import * as api from '../api';

export const serviceName = 'B';

export const FETCH_LAPS_SUCCESS = "B/FETCH_LAPS_SUCCESS";
export const FETCH_LAPS_STARTED = "B/FETCH_LAPS_STARTED";
export const FETCH_LAPS_FAILED = "B/FETCH_LAPS_FAILED";

const fetchLapsSuccess = (laps) => ({
    type: FETCH_LAPS_SUCCESS,
    laps
})

export const fetchLaps = () => (dispatch) => {
    api.fetchLaps(serviceName)
        .then(laps => dispatch(fetchLapsSuccess(laps)));
}
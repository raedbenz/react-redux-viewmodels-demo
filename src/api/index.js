import * as fakeDb from './fakeDb';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchLaps = (service) =>
    delay(500).then(() => {
        switch (service) {
            case 'A':
                return fakeDb.SourceALaps;
            case 'B':
                return fakeDb.SourceBLaps;
            case 'C':
                return fakeDb.SourceCLaps;
            default:
                throw new Error(`Unknown source: ${service}`);
        }
    });
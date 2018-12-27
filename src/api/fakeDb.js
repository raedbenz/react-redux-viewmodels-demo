// Same data but different canonical formats.
// Times are in epoch milliseconds
// startTime : 1546344000000 (Tuesday, 1 January 2019 12:00:00)
// https://www.epochconverter.com/

export const SourceALaps = [
    {
        "number": 1,
        "startTime": 1546344000000,    // Tuesday, 1 January 2019 12:00:00
        "duration": 120000,            // 2 minutes = 120 seconds
        "type": "OutLap"
    },
    {
        "number": 2,
        "startTime": 1546344120000,
        "duration": 60000,
        "type": "HotLap"
    },
    {
        "number": 3,
        "startTime": 1546344180000,
        "duration": 90000,
        "type": "HotLap"
    },
    {
        "number": 4,
        "startTime": 1546344270000,
        "duration": 80000,
        "type": "HotLap"
    },
    {
        "number": 5,
        "startTime": 1546344350000,
        "duration": 100000,
        "type": "InLap"
    }
];

export const SourceBLaps = [
    {
        "number": 1,
        "startTime": 1546344000000,    // Tuesday, 1 January 2019 12:00:00
        "endTime": 1546344120000,
        "type": "OutLap"
    },
    {
        "number": 2,
        "startTime": 1546344120000,
        "endTime": 1546344180000,
        "type": "HotLap"
    },
    {
        "number": 3,
        "startTime": 1546344180000,
        "endTime": 1546344270000,
        "type": "HotLap"
    },
    {
        "number": 4,
        "startTime": 1546344270000,
        "endTime": 1546344350000,
        "type": "HotLap"
    },
    {
        "number": 5,
        "startTime": 1546344350000,
        "endTime": 1546344450000,
        "type": "InLap"
    }
];

export const SourceCLaps = [
    {
        "id": 1,
        "startTime": 1546344000000,    // Tuesday, 1 January 2019 12:00:00
        "duration": 120000,            // 2 minutes = 120 seconds
        "type": "OutLap"
    },
    {
        "id": 2,
        "startTime": 1546344120000,
        "duration": 60000,
        "type": "HotLap"
    },
    {
        "id": 3,
        "startTime": 1546344180000,
        "duration": 90000,
        "type": "HotLap"
    },
    {
        "id": 4,
        "startTime": 1546344270000,
        "duration": 80000,
        "type": "HotLap"
    },
    {
        "id": 5,
        "startTime": 1546344350000,
        "duration": 100000,
        "type": "InLap"
    }
];

export const SourceDLaps = {
    "1": {
        "startTime": 1546344000000,    // Tuesday, 1 January 2019 12:00:00
        "duration": 120000,            // 2 minutes = 120 seconds
        "type": "OutLap"
    },
    "2": {
        "startTime": 1546344120000,
        "duration": 60000,
        "type": "HotLap"
    },
    "3": {
        "startTime": 1546344180000,
        "duration": 90000,
        "type": "HotLap"
    },
    "4": {
        "startTime": 1546344270000,
        "duration": 80000,
        "type": "HotLap"
    },
    "5": {
        "startTime": 1546344350000,
        "duration": 100000,
        "type": "InLap"
    }
};
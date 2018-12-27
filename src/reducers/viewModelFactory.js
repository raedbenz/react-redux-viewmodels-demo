
// Produce unified format to be consumed by UI
// {
//     "number": 1,
//     "startTime": 2,
//     "duration": 3,
//     "type": "boxbox"
// }

function createViewModels(service, laps) {
    if (!laps) {
        return [];
    }

    if (service === "A") {
        return laps;
    } else if (service === "B") {
        return laps.map(lap => {
            return {
                number: lap.number,
                startTime: lap.startTime,
                duration: lap.endTime - lap.startTime,
                type: lap.type,
            }
        });
    } else if (service === "C") {
        return laps.map(lap => {
            return {
                number: lap.id,
                startTime: lap.startTime,
                duration: lap.duration,
                type: lap.type,
            }
        });
    }

    // Add future data providers...
}

export default createViewModels;
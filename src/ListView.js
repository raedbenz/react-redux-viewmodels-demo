import React from 'react';
import moment from 'moment';

const ListView = ({ laps }) => {

    const listRows = laps ? laps.map(lap => {
        return (
            <div className="card" style={{ backgroundColor: '#7975b2', margin: '5px', color: '#FFFFFF' }}>
                <div className="card-body">
                    <p>Number: {lap.number}</p>
                    <p>Duration: {moment.utc(moment(lap.duration)).format('HH:mm:ss.SSS')}</p>
                    <p>Type: {lap.type}</p>
                </div>
            </div>
        )
    }) : [];

    return (
        <div>{listRows}</div>
    );
}

export default ListView;
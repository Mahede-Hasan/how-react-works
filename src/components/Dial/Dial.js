import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '5px'}}>
            <h1>Dial Steps: {props.steps}</h1>
        </div>
    );
};

export default Dial;
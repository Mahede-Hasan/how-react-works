import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: '2px solid green', margin: '5px'}}>
            <h2>Display Steps: {props.steps}</h2>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;
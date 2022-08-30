import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const stepsCount = () => {
        const newStep = steps + 1;
        setSteps(newStep);
    }
    return (
        <div style={{ border: '2px solid black', margin: '5px' }}>
            <h1>Steps : {steps}</h1>
            <button onClick={stepsCount}>Count Step</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;
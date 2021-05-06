import React, { useState, useEffect } from 'react';

import './Calculator.css';

const Calculator = () => {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(60);
    const [bmi, setBMI] = useState((parseInt(weight) / Math.pow(parseFloat(height/100), 2)).toFixed(2));
    const [comment, setComment] = useState({com: 'normal', color: 'black'});

    useEffect(() => {
        setBMI((parseInt(weight) / Math.pow(parseFloat(height/100), 2)).toFixed(2));
        switch (true) {
            case (bmi < 18):
                setComment({com: 'underweight', color: 'blue'});
                break;
            case bmi < 23:
                setComment({com: 'normal', color: 'green'});
                break;
            case bmi < 27:
                setComment({com: 'overweight', color: 'yellow'});
                break;
            case bmi < 32:
                setComment({com: 'obesity lvl. 1', color: 'orange'});
                break;
            case bmi < 37:
                setComment({com: 'obesity lvl. 2', color: 'red'});
                break;
            default:
                setComment({com: 'obesity lvl. 3', color: 'magenta'});
                break;
        }
        console.log(bmi < 18, comment);
    }, [weight, height]);

    return (
        <div class="calculator">
            <h1>BMI Calculator</h1>
            <input type="range" min="100" max="250" className="slider" id="height" value={height} onChange={e => setHeight(e.target.value)} />
            <label htmlFor="height">{height}</label>
            <br />
            <input type="range" min="30" max="500" className="slider" id="weight" value={weight} onChange={e => setWeight(e.target.value)} />
            <label htmlFor="weight">{weight}</label>
            <p>{`BMI: weight/height^2 = ${bmi}`}</p>
            <h3 style={{color: comment.color}}>{comment.com.toUpperCase()}</h3>
        </div>
    );
}

export default Calculator;
import React, { useState, useEffect } from 'react';
import './Options.css';

const Options = () => {
    // data with current currency rates //
    const [data, setData] = useState({});

    // initial currency values //
    const [fromText, setFromText] = useState(0);
    const [toText, setToText] = useState(0); // this one'll be calculated

    // initial currency //
    const [fromValue, setFromValue] = useState('PLN');
    const [toValue, setToValue] = useState('USD');

    // getting currency rates (after opening the page) //
    useEffect(() => {
        const APP_KEY = ':p';
        const query = `http://api.exchangeratesapi.io/v1/latest?access_key=${APP_KEY}`;
        fetch (query).then (r => r.json()).then(res => setData(res.rates));
    }, []);

    // calculating value to the desired currency, after changing the currency or initial value //
    useEffect(() => {
        const result = parseFloat(fromText) * data[toValue] / data[fromValue];
        setToText(result.toFixed(2).toString());
    }, [fromText, fromValue, toValue]);
    
    // swapping the currency (not values, just rates) //
    const swap = () => {
        const fromCopy = fromValue;
        setFromValue(toValue);
        setToValue(fromCopy);
    }

    return (
        <div className="components">
            <h1>Currency Converter</h1>
            <input type="number" id="from" value={fromText} onChange={e => setFromText(e.target.value)}/>
            <select value={fromValue} onChange={e => setFromValue(e.target.value)}>
            {Object.keys(data).map(k => (
                <option key={k}>{k}</option>
            ))}
            </select>

            <p id="swap" onClick={swap}>↑↓</p>

            <input type="number" id="to" value={toText} disabled={true} />
            <select value={toValue} onChange={e => setToValue(e.target.value)}>
            {Object.keys(data).map(k => (
                <option key={k}>{k}</option>
            ))}
            </select>
        </div>
    );
}

export default Options;
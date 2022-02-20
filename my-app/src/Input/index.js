import React from 'react';    
import '../App.css';

export const Input = () => {
    const currentDate = new Date().toDateString();

    const handleOnChange = (e) => {
        console.log('e');
    }

    const handleOnClick = (value) => () => {

    }

    return (
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange}/>
            <button className="Button" onClick={handleOnClick(currentDate)}>+</button>
        </div>
    );
};

import React from 'react';    
import '../App.css';

export const Input = () => {
    const handleOnChange = (e) => {
        console.log('e');
    }
    return (
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange}/>
            <button className="Button">+</button>
        </div>
    );
};

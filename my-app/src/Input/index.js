import React, { useState } from 'react';
import '../App.css';

export const InputTag = () => {
    const [inputValue, setinputValue] = useState('empty');
    const handleOnChange = (e) => {setinputValue(e.target.value)};
    
    return (
            <input className="Input" onChange={handleOnChange} value={inputValue} />
    );
};

export const Input = () => (
    <div className="InputWrap">
        <InputTag />
        <Button />
    </div>
)

const Button = () => (<button className="Button" >+</button>)
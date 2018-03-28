import React from 'react';
import './RomanNumberButton.css';

const RomanNumberButton = ({ text, value, onClick }) => {
    return (
        <button 
            onClick={() => onClick({ text, value }) } 
            className='roman-number-btn'
        >
            <span>{text}</span>
        </button>
    );

}

RomanNumberButton.defaultProps = {
    text: "V",
    value: 5,
    onClick: ({ text, value }) => {}
};

export default RomanNumberButton;
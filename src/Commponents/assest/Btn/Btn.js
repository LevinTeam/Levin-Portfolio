import React from 'react';
import './Btn.css';

const Btn = ({ text, backgroundColor, textColor, onClick }) => {
    return (
        <button 
            className="custom-button" 
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Btn;
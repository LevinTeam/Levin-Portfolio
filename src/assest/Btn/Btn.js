import React from 'react';
import './Btn.css';

const Btn = ({ text, backgroundColor, textColor, border , onClick }) => {
    return (
        <button 
            className="custom-button" 
            style={{ backgroundColor: backgroundColor, color: textColor , border : border}}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Btn;
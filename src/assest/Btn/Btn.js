import React from 'react';
import './Btn.css';
import { Link } from 'react-router-dom'; 

const Btn = ({ text, backgroundColor, textColor, border , to , onClick}) => {

    return (
        <Link 
            className="custom-button" 
            style={{ backgroundColor: backgroundColor, color: textColor , border : border}}
            to={to}
            onClick={onClick}
        >
            {text}
        </Link>
    );
};

export default Btn;
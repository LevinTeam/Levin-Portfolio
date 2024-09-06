import React from 'react';
import './Btn.css';
import { Link, replace } from 'react-router-dom'; 

const Btn = ({ text, backgroundColor, textColor, border , to , onClick , replace}) => {

    return (
        <Link 
            className="custom-button" 
            style={{ backgroundColor: backgroundColor, color: textColor , border : border}}
            to={to}
            onClick={onClick}
            replace={replace}
        >
            {text}
        </Link>
    );
};

export default Btn;
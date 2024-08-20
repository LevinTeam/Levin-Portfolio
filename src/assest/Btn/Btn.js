import React from 'react';
import './Btn.css';
import { Link } from 'react-router-dom'; 
import scrollTop from '../../utils';

const Btn = ({ text, backgroundColor, textColor, border , to}) => {

    return (
        <Link 
            className="custom-button" 
            style={{ backgroundColor: backgroundColor, color: textColor , border : border}}
            to={to}
            onClick={scrollTop}
        >
            {text}
        </Link>
    );
};

export default Btn;
import React from 'react';
import './Ninjalink.css'; 
import { Link } from 'react-router-dom';
import scrollTop from '../../utils';

const Ninjalink = ({ url, topText, bottomText }) => {
  return (
    
      <Link
        to={url}
        className="ninja-link link"
        target= '_self'
        rel= "noreferrer"
        onClick={scrollTop}
      >
        <span className="ninja-link--top">{topText}</span>
        <span className="ninja-link--bottom">{bottomText}</span>
      </Link>
    
  );
};

export default Ninjalink;

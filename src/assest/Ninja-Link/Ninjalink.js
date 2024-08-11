import React from 'react';
import './Ninjalink.css'; 

const Ninjalink = ({ url, topText, bottomText }) => {
  return (
    
      <a 
        className="ninja-link link"
        target="_blank"
        rel="noreferrer"
        href={url}
      >
        <span className="ninja-link--top">{topText}</span>
        <span className="ninja-link--bottom">{bottomText}</span>
      </a>
    
  );
};

export default Ninjalink;

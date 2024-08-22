import React from 'react'
import './PoPup.css'

const PoPup = ({ show, onClose , data }) => {
    if (!show) return null;
  
    return (
<>     
      <div className='over-layer'>
        <div className='modal-container'>
        <span className='close-icon' onClick={onClose}>
        <i class='bx bx-x'></i>
        </span>

        <div className='modal-content'>
          <h2>{data.title}</h2>
          <p>{data.paragraph}</p>
        </div>

        </div>  
      </div>
</>
    );
  };
  
  export default PoPup;

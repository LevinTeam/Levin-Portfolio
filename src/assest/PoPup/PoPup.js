import React from 'react'
import './PoPup.css'

const PoPup = ({ show, onClose , data }) => {
    if (!show) return null;
  
    return (
<>     
      <div className='over-layer'>
        <div className='modal-container'>
          <div className='modal-header'>
            <button className='close-btn' onClick={onClose}> ✖ </button>
            <h2 className='modal-title'>{data.title}</h2>
          </div>
          <div className='modal-content'>
            <p> {data.paragraph} </p>
          </div>
        </div>  
      </div>
</>
    );
  };
  
  export default PoPup;

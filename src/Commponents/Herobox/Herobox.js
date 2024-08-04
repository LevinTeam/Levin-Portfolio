import React from 'react'
import './Herobox.css'
import Btn from '../assest/Btn/Btn'

export default function Herobox() {
  return (
    <div className='hero-box'>
        <div className='hero-box-text'>
            <h1>نینجا ها برای خدمت به شما آماده اند...</h1>
            <p>هوشمندانه ترین روش ها اینجا توسط لوبن در حال آموزش و استفاده است از دستش ندی...</p> 
    
<div>
                <Btn 
                text="استخدام نینجا" 
                backgroundColor="#DD226D" 
                textColor="#ffffff"
                />
</div>
        </div>        

        <img src="Images/Baners/Group 50.png" alt="" />
    </div>
  )
}

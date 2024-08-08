import React from 'react'
import './Index.css'
import Header from '../../Components/Header/Header'
import Btn from '../../assest/Btn/Btn'
import Levinteam from '../../assest/Neon/Levinteam'

export default function Index() {
  return (
    <>
    <Header />

    <div className='hero-box'>
        <div className='hero-box-text'>
            <h1>نینجا ها برای خدمت به شما آماده اند...</h1>
            <p>هوشمندانه ترین روش ها اینجا توسط لوین در حال آموزش و استفاده است از دستش ندی...</p> 
        <div>
            <Btn 
            text="استخدام نینجا" 
            backgroundColor="#DD226D" 
            textColor="#fff"
            />
        </div>
        </div>        

        <div className='mt-5'> <Levinteam/> </div>
    </div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

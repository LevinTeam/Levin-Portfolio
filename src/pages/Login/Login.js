import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {

  const [isActive, setIsActive] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const active = () => {
    setIsActive(true)
  }
  const deactive = () => {
    setIsActive(false)
  }

  {
    isActive ? document.documentElement.style.setProperty( '--p' , 'absolute' ) : document.documentElement.style.setProperty( '--p' , '' )
  }

  return (
    <section className='form-container'>
      <div className={isActive ? 'wrapper active' : 'wrapper'}>
        
        <span className='bg-animate'></span>
        <span className='bg-animate2'></span>

        <div className='form-box login'>
          <h2 className='animation' style={{ '--i': 0 , '--j': 21}}> ورود </h2>
          <form action="#">
            <div className='input-box animation' style={{ '--i': 1 , '--j': 22}}>
              <input 
                type="number" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                required
              />
              <label> شماره تلفن </label>
              <i className='bx bxs-phone'></i>
            </div>
            <div className='input-box animation' style={{ '--i': 2 }}>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
              <label> رمز عبور </label>
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type='submit' className='sub-btn animation' style={{ '--i': 3 , '--j': 20}}> ورود </button>
            <div className='logreg-link animation' style={{ '--i': 4 , '--j': 21}}>
              <p> تا به حال اکانت نداشته‌اید؟ <a href="#" className='register-link' onClick={active} > ثبت نام </a> </p>
            </div>
          </form>
        </div>
        
        <div className='info-text login'>
          <h2 className='animation' style={{ '--i': 0 }}> خوش برگشتید </h2>
          <p className='animation' style={{ '--i': 1 }}> مشتاق دیدار دوباره با شما بودیم :) </p>
        </div>

        <div className='form-box register'>
          <h2 className='animation' style={{ '--i': 17 , '--j': 0}}> ثبت نام </h2>
          <form action="#">
            <div className='input-box animation' style={{ '--i': 18 , '--j': 1}}>
              <input 
                type="number" 
                value={registerPhoneNumber} 
                onChange={(e) => setRegisterPhoneNumber(e.target.value)} 
                required
              />
              <label> شماره تلفن </label>
              <i className='bx bxs-phone'></i>
            </div>
            <div className='input-box animation' style={{ '--i': 19 , '--j': 2}}>
              <input 
                type="password" 
                value={registerPassword} 
                onChange={(e) => setRegisterPassword(e.target.value)} 
                required
              />
              <label> رمز عبور </label>
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className='input-box animation' style={{ '--i': 20 , '--j': 3}}>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required
              />
              <label> تکرار رمز عبور  </label>
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type='submit' className='sub-btn animation' style={{ '--i': 21 , '--j': 4}}> ثبت نام </button>
            <div className='logreg-link animation' style={{ '--i': 22 , '--j': 5}}>
              <p> از قبل اکانت دارید؟ <a href="#" className='login-link' onClick={deactive}> ورود </a> </p>
            </div>
          </form>
        </div>

        <div className='info-text register'>
          <h2 className='animation' style={{ '--i': 17 , '--j': 0 }}> خوش آمدید </h2>
          <p className='animation' style={{ '--i': 18 , '--j': 1 }}> تیم لوین آماده برای ارائه خدمات برنامه نویسی به شما! </p>
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {

const [isActive , setIsActive] = useState(false)

const active = () => {
  setIsActive(true)
}
const deactive = () => {
  setIsActive(false)  
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
              <input type="number" required/>
              <label> شماره تلفن </label>
              <i class='bx bxs-phone'></i>
            </div>
            <div className='input-box animation' style={{ '--i': 2 }}>
              <input type="password" required/>
              <label> رمز عبور </label>
              <i class='bx bxs-lock-alt'></i>
            </div>
            <button type='submit' className='sub-btn animation' style={{ '--i': 3 , '--j': 20}}> ورود </button>
          <div className='logreg-link animation' style={{ '--i': 4 , '--j': 21}}>
            <p> تا به حال اکانت نداشته‌اید؟ <a href="#" className='register-link' onClick={active} > ثبت نام </a> </p>
          </div>
          </form>
        </div>
        
          <div className='info-text login'>
            <h2 className='animation' style={{ '--i': 0 }}> خوش برگشتید </h2>
            <p className='animation' style={{ '--i': 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

      <div className='form-box register'>
          <h2 className='animation' style={{ '--i': 17 , '--j': 0}}> ثبت نام </h2>
          <form action="#">
            <div className='input-box animation' style={{ '--i': 18 , '--j': 1}}>
              <input type="number" required/>
              <label> شماره تلفن </label>
              <i class='bx bxs-phone'></i>
            </div>
            <div className='input-box animation' style={{ '--i': 19 , '--j': 2}}>
              <input type="password" required/>
              <label> رمز عبور </label>
              <i class='bx bxs-lock-alt'></i>
            </div>
            <div className='input-box animation' style={{ '--i': 20 , '--j': 3}}>
              <input type="password" required/>
              <label> تکرار رمز عبور  </label>
              <i class='bx bxs-lock-alt'></i>
            </div>
            <button type='submit' className='sub-btn animation' style={{ '--i': 21 , '--j': 4}}> ثبت نام </button>
          <div className='logreg-link animation' style={{ '--i': 22 , '--j': 5}}>
            <p> از قبل اکانت دارید؟ <a href="#" className='login-link' onClick={deactive}> ورود </a> </p>
          </div>
          </form>
        </div>

          <div className='info-text register'>
            <h2 className='animation' style={{ '--i': 17 , '--j': 0 }}> خوش برگشتید </h2>
            <p className='animation' style={{ '--i': 18 , '--j': 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

      </div>

</section>
  )
}

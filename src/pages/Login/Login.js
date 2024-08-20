import React from 'react'
import './Login.css'

export default function Login() {
  return (
<section className='form-container'>
      <div className='wrapper'>
        <div className='form-box login'>
          <h2> ورود </h2>
          <form action="#">
            <div className='input-box'>
              <input type="number" required/>
              <label> شماره تلفن </label>
              <i class='bx bxs-phone'></i>
            </div>
            <div className='input-box'>
              <input type="password" required/>
              <label> رمز عبور </label>
              <i class='bx bxs-lock-alt'></i>
            </div>
            <button type='submit' className='sub-btn'> ارسال </button>
          </form>
          <div className='.logreg-link'>
            <p> تا به حال اکانت نداشته‌اید؟ <a href="#" className='register-link'> ثبت نام </a> </p>
          </div>
        </div>
      </div>
</section>
  )
}

import React, { useState } from 'react';
import './UserInfo.css'

export default function UserInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // اینجا منطق ارسال اطلاعات به سرور یا ذخیره‌سازی آنها را اضافه کنید.
    console.log({
      firstName,
      lastName,
      email,
      gender
    });

    // مثال: پس از ارسال موفق، یوزر به صفحه دیگری هدایت شود.
    // history.push('/nextPage');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>نام</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label>نام خانوادگی</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label>ایمیل</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          مرد
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          زن
        </label>
      </div>

      <button type="submit">ثبت</button>
    </form>
  );
};
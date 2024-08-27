import React, { useState } from 'react';

export default function UserInfo() {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    dateOfBirth: '',
    gender: ''
  });

  const handleChangeUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='userinfo-container'>
      <div className='userinfo-overview'>
      </div>
      <div className='userinfo-box'>

        <div className='userinfo-input'>
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChangeUserInfo}
          />
        </div>

        <div className='userinfo-input'>
          <input
            type="text"
            name="lastName" 
            value={userInfo.lastName}
            onChange={handleChangeUserInfo}
          />
        </div>

        <div className='userinfo-input'>
          <input
            type="text"
            name="dateOfBirth" 
            value={userInfo.lastName}
            onChange={handleChangeUserInfo}
          />
        </div>

      </div>
    </div>
  );
}

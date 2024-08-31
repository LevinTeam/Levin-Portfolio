import React from 'react'
import './ContactUs.css'
import Btn from './../../assest/Btn/Btn'
import { useState } from 'react'
import scrollTop from '../../utils';
import Configs from '../../Private/Configs/Configs'
import axios from 'axios';

function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    SubmitForm({
      Name: formData.name,
      PhoneNumber: formData.phone,
      Email: formData.email,
      CommentSubject: formData.subject,
      CommentMessage: formData.message
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  }

    const aboutCompany = [
        {
            id: 1,
            icon: <i class='bx bx-phone'></i> ,
            text: '09927953352' ,
            url:'tel:+989123456789' 
        },
        {
            id: 2,
            icon: <i class='bx bx-envelope'></i> ,
            text: 'levinteamoffice@gmail.com' ,
            url:'mailto:levinteamoffice@gmail.com' 
        }
    ]

    return (
        <div className='contactUs-container' >
            <div className='comment-form' >
            <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>ارسال دیدگاه</h2>
      
        <div className="form-group">
          <label htmlFor="name">نام:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='duo'>
        <div className="form-group">
          <label htmlFor="email">ایمیل:</label>
          <input

            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">شماره تلفن:</label>
          <input

            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">موضوع:</label>
        <input

          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">نظر:</label>
        <textarea
          id="message"
          className='comment-box'
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Btn 
      text={'ارسال'}
      textColor={'var(--bg-btn-color)'}
      backgroundColor={'var(--primary)'}
      onClick={handleSubmit}
      />
    </form>
            </div>





            <div className="counseling">
            <section>
                <h2>برای مشاوره رایگان تماس بگیرید</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                <Btn 
                text='مشاوره' 
                textColor="var(--bg-btn-color)"  
                backgroundColor="var(--primary)" 
                onClick={scrollTop}
                />
            </section>
                <div className="contactUs-links">
                    {aboutCompany.map(item => (
                      <div key={item.id} className='contactus-box'>
                        {item.icon} 
                        <a href={item.url}> <p>{item.text}</p> </a>
                      </div>
                        ))}
                </div>
            </div>            
        </div>
    )
}

const SubmitForm = async ({Name: Name, Email: Email, PhoneNumber: PhoneNumber, CommentSubject: CommentSubject, CommentMessage: CommentMessage}) => {
  axios.post(`${Configs.API_URL}:${Configs.API_PORT}/api/v${Configs.API_VERSION}/${Configs.API_ROUTE.USER}/create-comment`, {
    ApiKey: Configs.API_KEY,
    Name: Name,
    Email: Email,
    PhoneNumber: PhoneNumber,
    Subject: CommentSubject,
    CommentMessage: CommentMessage
  }).then(async response => {
    switch (response.status) {
      case 201:
        if (response.data.Data === "Comment Created") {
          console.log(`Comment Created with ID: #${response.data.CommentData.CommentID}`)
          return {
            Data: response.data.CommentData
          }
        }
      break;

      default:break;
    }
  }).catch(async error => {
    switch (error.response.status) {
      case 404:
        console.log(`Error -> ContactUs => ${error.response.data.Data}`)
        return {
          Data: error.response.data.Data
        }
      break;

      case 500:
        console.log(`Error -> ContactUs => ${error.response.data.Data}`)
        return {
          Data: error.response.data.Data
        }
      break;

      default:break;
    }
  })
}

export default ContactUs ;
import React from 'react'
import './ContactUs.css'
import Btn from './../../assest/Btn/Btn'
import { useState } from 'react'
// import FeedbackForm from './../../Components/CommentForm/CommentForm'

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
                backgroundColor="var(--primary)" />
            </section>
                <div className="contactUs-links">
                    {aboutCompany.map(item => (
                      <div key={item.id} className='contactus-box'>
                        {item.icon} 
                        <a href={item.url}> {item.text} </a>
                      </div>
                        ))}
                </div>
            </div>            
        </div>
    )
}

export default ContactUs ;
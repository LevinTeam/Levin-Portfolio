import React from 'react'
import './ContactUs.css'
import Btn from './../../assest/Btn/Btn'
import { useState } from 'react'
// import scrollTop from '../../utils';
import Configs from '../../Private/Configs/Configs'
import axios from 'axios';
import { Helmet } from "react-helmet";

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
            text: '0902-209-2996' ,
            url:'tel:09022092996' 
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
          <Helmet>
          <title>درباره ما | شرکت لوین - پیشرو در طراحی وب‌سایت و سئو با رویکردی نوآورانه</title>
          <meta name="description" content="شرکت لوین با تیمی متعهد و تخصصی در زمینه طراحی وب‌سایت، سئو، امنیت و توسعه ربات‌های تلگرام و دیسکورد، تلاش می‌کند تا بهترین راهکارها را برای رشد آنلاین کسب‌وکارها ارائه دهد. با ما در این مسیر موفقیت همراه شوید."></meta>
          <meta name="keywords" content="درباره ما, شرکت لوین, طراحی وب‌سایت, خدمات سئو, تیم تخصصی, امنیت وب‌سایت, ربات تلگرام, ربات دیسکورد, نوآوری در وب"></meta>
            <link rel="canonical" href="https://levinteam.ir"></link>
            <meta property="og:title" content="درباره ما | شرکت لوین - پیشرو در طراحی وب‌سایت و سئو با رویکردی نوآورانه"></meta>
            <meta property="og:description" content="با تیم تخصصی شرکت لوین آشنا شوید؛ ارائه‌دهنده خدمات طراحی وب‌سایت، سئو و امنیت وب با رویکردی نوآورانه. هدف ما، رشد و موفقیت آنلاین کسب‌وکار شماست."></meta>
            <meta property="og:image" content="Images/Icon/favIcon.svg"></meta>
            <meta property="og:url" content="https://levinteam.ir/"></meta>
            </Helmet>
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
                <p>برای مشاوره رایگان  و همکاری میتوانید  از راه های زیر با ما ارتباط بگیرید</p>
                {/* <Btn 
                text='مشاوره' 
                textColor="var(--bg-btn-color)"  
                backgroundColor="var(--primary)" 
                onClick={scrollTop}
                /> */}
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
  axios.post(`${Configs.API_URL}/api/v${Configs.API_VERSION}/${Configs.API_ROUTE.USER}/create-comment`, {
    // ApiKey: Configs.API_KEY,
    Name: Name,
    Email: Email,
    PhoneNumber: PhoneNumber,
    Subject: CommentSubject,
    CommentMessage: CommentMessage
  }, {
    headers: {
      authorization: Configs.API_KEY
    }
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
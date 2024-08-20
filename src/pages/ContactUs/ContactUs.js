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
            svg: <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5593 19.6788L24.2053 19.0371L22.705 17.5297L22.0619 18.1715L23.5593 19.6788ZM26.3714 18.7679L29.0786 20.2398L30.0915 18.3727L27.3857 16.9022L26.3714 18.7679ZM29.5985 23.1638L27.5869 25.1656L29.0843 26.6715L31.096 24.6712L29.5985 23.1638ZM26.36 25.8087C24.3059 26.0014 18.9934 25.83 13.2389 20.1095L11.74 21.6154C18.0187 27.8587 23.9956 28.1647 26.5584 27.9252L26.36 25.8087ZM13.2389 20.1095C7.75496 14.6553 6.84546 10.0696 6.73213 8.07915L4.60996 8.19957C4.75163 10.7042 5.87788 15.7872 11.74 21.6154L13.2389 20.1095ZM15.1868 11.3545L15.5934 10.9493L14.0974 9.4434L13.6908 9.84715L15.1868 11.3545ZM15.9164 5.79974L14.1314 3.41407L12.43 4.68907L14.215 7.07332L15.9164 5.79974ZM8.1233 2.89415L5.89913 5.10415L7.39796 6.61149L9.62071 4.40149L8.1233 2.89415ZM14.4388 10.6008C13.688 9.84715 13.688 9.84715 13.688 9.84999H13.6851L13.6809 9.85565C13.6136 9.92353 13.5533 9.99805 13.501 10.0781C13.4245 10.1914 13.3409 10.3402 13.27 10.5286C13.0976 11.0149 13.0546 11.5378 13.1454 12.0458C13.3352 13.2712 14.1795 14.8905 16.3414 17.041L17.8402 15.5337C15.8158 13.522 15.3341 12.298 15.2449 11.72C15.2024 11.4452 15.2463 11.3092 15.259 11.278C15.2675 11.2591 15.2675 11.2563 15.259 11.2695C15.2464 11.289 15.2322 11.3075 15.2165 11.3247L15.2024 11.3389L15.1882 11.3517L14.4388 10.6008ZM16.3414 17.041C18.5046 19.1915 20.1324 20.0302 21.3592 20.2172C21.9868 20.3135 22.4925 20.237 22.8765 20.0939C23.0915 20.0152 23.2924 19.9023 23.4715 19.7596L23.5423 19.6958L23.5522 19.6873L23.5565 19.6831L23.5579 19.6802C23.5579 19.6802 23.5593 19.6788 22.8099 18.9252C22.059 18.1715 22.0633 18.1701 22.0633 18.1701L22.0661 18.1672L22.069 18.1644L22.0775 18.1573L22.0916 18.1432L22.1455 18.1007C22.1587 18.0922 22.1554 18.0931 22.1355 18.1035C22.1001 18.1162 21.9613 18.1602 21.6822 18.1177C21.0957 18.027 19.8632 17.5453 17.8402 15.5337L16.3414 17.041ZM14.1314 3.41265C12.6864 1.48599 9.84738 1.17999 8.1233 2.89415L9.62071 4.40149C10.3744 3.65207 11.7117 3.72999 12.43 4.68907L14.1314 3.41265ZM6.73355 8.08057C6.70521 7.5904 6.93046 7.07757 7.39796 6.6129L5.89771 5.10557C5.13696 5.86207 4.53771 6.93307 4.60996 8.19957L6.73355 8.08057ZM27.5869 25.1656C27.1987 25.5537 26.7794 25.7719 26.3615 25.8102L26.5584 27.9252C27.5996 27.8275 28.451 27.3033 29.0857 26.6729L27.5869 25.1656ZM15.5934 10.9493C16.9888 9.5624 17.0922 7.37082 15.9178 5.80115L14.2164 7.07474C14.7873 7.83832 14.7023 8.8399 14.096 9.44482L15.5934 10.9493ZM29.08 20.2412C30.2375 20.8702 30.4174 22.3521 29.6 23.1652L31.0988 24.6712C32.9971 22.7827 32.412 19.6335 30.093 18.3741L29.08 20.2412ZM24.2053 19.0385C24.7493 18.4973 25.6248 18.3642 26.3728 18.7693L27.3871 16.9036C25.8515 16.0677 23.9475 16.2987 22.7065 17.5312L24.2053 19.0385Z" fill="var(--text)"/>
            </svg>,
            text: '09927953352'
        },
        {
            id: 2,
            svg: <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.83203 16.9993C2.83203 11.6571 2.83203 8.98527 4.49236 7.32635C6.1527 5.66743 8.82312 5.66602 14.1654 5.66602H19.832C25.1743 5.66602 27.8461 5.66602 29.505 7.32635C31.1639 8.98668 31.1654 11.6571 31.1654 16.9993C31.1654 22.3416 31.1654 25.0134 29.505 26.6723C27.8447 28.3313 25.1743 28.3327 19.832 28.3327H14.1654C8.82312 28.3327 6.15128 28.3327 4.49236 26.6723C2.83345 25.012 2.83203 22.3416 2.83203 16.9993Z" stroke="var(--text)" stroke-width="1.5"/>
            <path d="M8.5 11.332L11.5586 13.882C14.161 16.0495 15.4615 17.1333 17 17.1333C18.5385 17.1333 19.8404 16.0495 22.4414 13.8806L25.5 11.332" stroke="var(--text)" stroke-width="1.5" stroke-linecap="round"/>
            </svg>,
            text: 'levinteamoffice@gmail.com'
        }
    ]

    return (
        <div className='contactUs-container' >
            <div className='coment-form' >
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
                        <div className="link-contactUs" key={item.id}>
                            <figure>{item.svg}</figure>
                            <p>{item.text}</p>
                        </div>
                        ))}
                </div>
            </div>            
        </div>
    )
}

export default ContactUs ;
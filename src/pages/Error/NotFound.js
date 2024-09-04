import React from 'react'
import './NotFound.css'
import Btn from '../../assest/Btn/Btn'
import scrollTop from '../../utils';
import { Helmet } from "react-helmet";


export default function NotFound() {
  
  return (
    
    <>
            <Helmet>
            <title>صفحه مورد نظر پیدا نشد | شرکت لوین - بازگشت به مسیر درست</title>
            <meta name="description" content="متاسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد. می‌توانید به صفحه اصلی بازگردید یا از منوی سایت برای یافتن محتوای مورد نظرتان استفاده کنید. شرکت لوین در کنار شماست تا به سرعت به مسیر درست بازگردید."></meta>
            <meta name="keywords" content=" صفحه پیدا نشد, 404, ارور 404, مسیر درست, بازگشت به صفحه اصلی, شرکت لوین"></meta>
            <link rel="canonical" href="https://levinteam.ir"></link>
            <meta property="og:title" content="صفحه مورد نظر پیدا نشد | شرکت لوین - بازگشت به مسیر درست"></meta>
            <meta property="og:description" content=" متاسفانه صفحه‌ای که به دنبال آن بودید وجود ندارد. با کمک لینک‌های زیر می‌توانید به صفحات دیگر بازگردید."></meta>
            <meta property="og:image" content="Images/Icon/favIcon.svg"></meta>
            <meta property="og:url" content="https://levinteam.ir/"></meta>
            </Helmet>
    <div className='err-404'>
        <svg width="803" height="283" viewBox="0 0 803 283" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2415 234.149V177.388L123.509 7.10342H175.014V82.7852H145.582L87.2443 175.285V177.388H247.017V234.149H15.2415ZM146.108 276.194V216.805L147.685 192.103V7.10342H216.009V276.194H146.108Z" fill="var(--text)"/>
        <rect x="460.694" y="7.12109" width="25.7166" height="68.2212" rx="12.8583" transform="rotate(8.28448 460.694 7.12109)" fill="var(--ninja)"/>
        <rect x="510.87" y="29.0898" width="25.7166" height="68.2212" rx="12.8583" transform="rotate(84.0476 510.87 29.0898)" fill="var(--ninja)"/>
        <circle cx="401.194" cy="141.194" r="122.922" transform="rotate(-9.31302 401.194 141.194)" fill="var(--ninja)"/>
        <rect x="303.102" y="121.284" width="187.154" height="71.0415" rx="4" transform="rotate(-9.31302 303.102 121.284)" fill="var(--primary)"/>
        <rect x="375.554" y="135.499" width="19.0238" height="39.6943" rx="9.51189" transform="rotate(82.69 375.554 135.499)" fill="var(--ninja)"/>
        <rect x="462.639" y="121.362" width="19.0238" height="39.6943" rx="9.51189" transform="rotate(77.5486 462.639 121.362)" fill="var(--ninja)"/>
        <path d="M557.63 234.149V177.388L665.897 7.10342H717.402V82.7852H687.971L629.633 175.285V177.388H789.405V234.149H557.63ZM688.496 276.194V216.805L690.073 192.103V7.10342H758.397V276.194H688.496Z" fill="var(--text)"/>
        </svg>
    
    <p className='paragraph' > 
        صفحه مورد نظر یافت نشد !
    </p>
    
      <Btn 
        text={'بازگشت به خانه'}
        textColor={'var(--bg-btn-color)'}
        backgroundColor={'var(--primary)'}
        to={'/'}
        onClick={scrollTop}
        />

    </div>
    </>
  )
}

import React from 'react'
import './Index.css'
import Header from '../../Components/Header/Header'
import Btn from '../../assest/Btn/Btn'
import Levinteam from '../../assest/Neon/Levinteam'

export default function Index() {

  // About Company Icon List =>
  const iconList = [
    {id:1 , src: "Images/company-icon/Project.svg", title: "Projects", count: "+10" },
    {id:2 , src: "Images/company-icon/Clients.svg", title: "Clients", count: "+10" },
    {id:3 , src: "Images/company-icon/Experience.svg", title: "Experience", count: "+1 years" },
    {id:4 , src: "Images/company-icon/Company.svg", title: "Company", count: "+1" },
  ];

  // Smart Management Text Box =>

    const smTextBox = [
      {id:1 , src: "Images/Logo/Checkbox-Done.svg" , text: "افزایش فروش و بهره‌وری"} ,
      {id:2 , src: "Images/Logo/Checkbox-Done.svg" , text: "سیستم نوبت‌دهی آنلاین یکپارچه"} ,
      {id:3 , src: "Images/Logo/Checkbox-Done.svg" , text: "ایجاد گالری اختصاصی برای نمایش محصولات"} ,
      {id:4 , src: "Images/Logo/Checkbox-Done.svg" , text: "پرداخت‌های امن و مطمئن"} ,
      {id:5 , src: "Images/Logo/Checkbox-Done.svg" , text: "مدیریت ساده و کاربرپسند"} ,
      {id:6 , src: "Images/Logo/Checkbox-Done.svg" , text: "طراحی اختصاصی و متناسب با نیازهای شما"} ,
    ]


  return (
    <>
    <Header /> <h1 style={{display:"none"}}>لوین تیمSEO</h1> {/* This section should go to the external CSS file after SEO */}

    {/* Hero box => */}
    <div className='hero-box'>
        <div className='hero-box-text'>
            <h2>نینجا ها برای خدمت به شما آماده اند...</h2>
            <p>در لوین، با استفاده از جدیدترین روش‌های طراحی وب‌سایت، پروژه‌های منحصربه‌فردی خلق می‌کنیم. با ما همراه شوید تا تجربه‌ای حرفه‌ای و بی‌نظیر را در طراحی وب‌سایت به دست آورید.</p>
        <div>
            <Btn 
            text="استخدام نینجا" 
            backgroundColor="var(--primary-blue)" 
            textColor="var(--white)"
            />
        </div>
        </div>        

        <div className='levin-team'> <Levinteam/> </div>
    </div>

    {/* About Company => */}

    <div className='about-company'>
      <section>
        <div className='text-company'>
          <div className='heading-company'>
            <img src="Images/Logo/Ninja-Mask.svg" alt="" />
    
            <h6> به سایت خودت فکر کردی؟ </h6>
          </div>
          <h2> تیم درستی رو انتخاب کردی! </h2>
          <p>
          تیم لوین اینجاست تا به کارآفرین‌ها کمک کنه ایده‌هاشون رو به محصول تبدیل کنن و با موفقیت وارد بازار کنن. ما به شرکت‌هایی که در حال رشد هستن کمک می‌کنیم تا با پیدا کردن تیم‌های توسعه‌ی حرفه‌ای و آماده، کار ساخت و راه‌اندازی رو با سرعت و کیفیت شروع کنن. اگر شما هم دنبال یه تیم متخصص برای پیشبرد پروژه‌هاتون هستید، ما کنارتونیم!
          </p>
        </div>
      </section>

      <figure className='icon-container'>
        <ul>
            {iconList.map((icon) => (
              <li className="icon-list" key={icon.id}>
                <img src={icon.src} alt={icon.title} />
                <p>{icon.title}</p>
                <p>{icon.count}</p>
              </li>
            ))}
        </ul>
      </figure>
    </div>

  {/* Smart Management => */}

    <div className='sm-container'>

      <section className='sm-textbox'>
        <h2> زمانت را هوشمندانه مدیریت کن! </h2>
        <h6> درآمدت را با بهره‌وری بیشتر افزایش بده. </h6>
        <ul>
          {smTextBox.map((textBox) => (
              <li className="sm-textbox-list" key={textBox.id}>
                <img src={textBox.src} />
                <p>{textBox.text}</p>
              </li>
          ))}
        </ul>
      </section>
      
      <figure className='sm-Baner'>
        <img src="Images/Baners/sm-Baner.svg" alt="" />
      </figure>

    </div>


    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

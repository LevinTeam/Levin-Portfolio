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

    const cardData = [
      { id: 1, src: '#' , name: ' فرانت اند ', description: 'طراحی رابط کاربری مدرن و واکنش‌گرا برای تجربه‌ای جذاب.' },
      { id: 2, src: '#' , name: ' بک اند ', description: 'پیاده‌سازی منطق قدرتمند و امن برای پشت‌صحنه اپلیکیشن‌ها.' },
      { id: 3, src: '#' , name: ' سئو ', description: 'بهینه‌سازی سایت برای بهبود رتبه در موتورهای جستجو.' },
      { id: 4, src: '#' , name: ' دیزاین ', description: 'خلق طراحی‌های گرافیکی منحصربه‌فرد و کاربرپسند.' },
      { id: 5, src: '#' , name: ' ربات تلگرام ', description: 'توسعه ربات‌های تلگرام برای خدمات خودکار و سریع.' },
      { id: 6, src: '#' , name: ' ربات دیسکورد ', description: 'ساخت ربات‌های دیسکورد برای بهبود مدیریت و تعامل.' },
      { id: 7, src: '#' , name: ' امنیت ', description: 'افزایش امنیت با شناسایی و رفع آسیب‌پذیری‌ها.' },
      { id: 8, src: '#' , name: ' ریدیزاین ', description: 'بازطراحی مدرن برای بهبود تجربه کاربری و برند.' }
    ];


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

{/* Card List =>  */}

    <div className='card-list'>
      <div className='card-animation'>
      <ul> 

        {/* Desctop */}
      {cardData.map((data) => (
        <li key={data.id}>
          <div className='card'>
              <a href={data.src}><span className='model-name'>
                {data.name}  </span>
              <span> {data.description} </span>
            </a>
          </div>
        </li>
        ))}

      </ul>
    <div className='last-circle'></div>
	  <div className='second-circle'></div>
	  <div className='mask'></div>
	  </div>

        <div className='regular-card-animation'>
          <ul>
{/* Mobile */}
      {cardData.map((data) => (
        <li key={data.id}>
          <div className='regular-card'>
              <a href={data.src}><span className='model-name'>
                {data.name}  </span>
              <span> {data.description} </span>
            </a>
          </div>
        </li>
        ))}
          </ul>
        </div>

	  <div className='center-circle'>
      <img loading='lazy' src="Images/Baners/Card-List-Ninja.svg" alt="" />
    </div>
      </div>











    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

import React from 'react'
import './Index.css'
import Header from '../../Components/Header/Header'
import Btn from '../../assest/Btn/Btn'
import Levinteam from '../../assest/Neon/Levinteam'
import TiltCard from '../../Components/Header/TiltCard/TiltCard'
import UXbox from '../../Components/UXbox/UXbox'

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

    // Card List =>

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

    // CEO Card Info

    const CEO = [
      {id: 1 , name:'Shervin Fatahi' , profile:'Images/Baners/Card-List-Ninja.svg' , job: 'FRONT' , about: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , portfolio: '#' },
      {id: 2 , name:'Pouya Alijany' , profile:'Images/Baners/Card-List-Ninja.svg' , job: 'SEO' , about: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , portfolio: '#' },
      {id: 3 , name:'Arman Mohebrad' , profile:'Images/Baners/Card-List-Ninja.svg' , job: 'BACK' , about: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ' , portfolio: '#' },
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
            backgroundColor="var(--primary)" 
            textColor="var(--bg-btn-color)"
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
            {/* SVG ninja file for About Company => */}
          <svg width="160" height="55" viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="158.688" height="54.4893" rx="4" fill="var(--primary)"/>
          <ellipse cx="42.0192" cy="29.7447" rx="11.5831" ry="13.7546" fill="#121632"/>
          <ellipse cx="117.669" cy="29.7447" rx="11.5831" ry="13.7546" fill="#121632"/>
          </svg>

            <h6> به سایت خودت فکر کردی؟ </h6>
          </div>

          <h2> تیم درستی رو انتخاب کردی! </h2>
          <p>
          تیم لوین اینجاست تا به کارآفرین‌ها کمک کنه ایده‌هاشون رو به محصول تبدیل کنن و با موفقیت وارد بازار کنن. ما به شرکت‌هایی که در حال رشد هستن کمک می‌کنیم تا با پیدا کردن تیم‌های توسعه‌ی حرفه‌ای و آماده، کار ساخت و راه‌اندازی رو با سرعت و کیفیت شروع کنن. اگر شما هم دنبال یه تیم متخصص برای پیشبرد پروژه‌هاتون هستید، ما کنارتونیم!
          </p>
        </div>
      </section>

      <figure >
        <ul className='icon-container'>
            {iconList.map((icon) => (
              <li className="icon-list" key={icon.id}>
                <div className='img-company' >
                <img src={icon.src} alt={icon.title} />
                </div>
                <p>{icon.title}</p>
                <p>{icon.count}</p>
              </li>
            ))}
        </ul>
      </figure>
    </div>

{/* Card List =>  */}

    <div className='card-list'>
      <div className='card-animation'>
      <ul> 

        {/* Desctop */}
      {cardData.map((data) => (
        <li key={data.id} style={{background: 'none'}}>
          <div className='card'>
              <a href={data.src}>
                <span className='model-name'>
                {data.name}  
                </span>
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
        {/* SVG ninja file for Cart List => */}
      <svg width="165" height="165" viewBox="0 0 314 314" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="223.16" y="7.91786" width="28.5954" height="75.8582" rx="14.2977" transform="rotate(8.28448 223.16 7.91786)" fill="var(--ninja)"/>
      <rect x="278.953" y="32.3466" width="28.5954" height="75.8582" rx="14.2977" transform="rotate(84.0476 278.953 32.3466)" fill="var(--ninja)"/>
      <circle cx="157" cy="157" r="136.183" transform="rotate(-9.31302 157 157)" fill="var(--ninja)" stroke="#818181"/>
      <rect x="48.5011" y="135.273" width="207.105" height="77.9942" rx="3.5" transform="rotate(-9.31302 48.5011 135.273)" fill="var(--primary)"/>
      <path d="M91.8673 183.121L89.9409 171.37C88.3237 161.505 95.0097 152.197 104.875 150.58V150.58C114.739 148.962 124.047 155.648 125.665 165.513L127.591 177.264" stroke="#121632" stroke-width="16" stroke-linecap="round"/>
      <path d="M191.364 165.386L189.438 153.635C187.821 143.77 194.507 134.462 204.372 132.845V132.845C214.236 131.228 223.544 137.914 225.162 147.778L227.088 159.53" stroke="#121632" stroke-width="16" stroke-linecap="round"/>
      </svg>
    </div>
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


{/* CEO card */} 


<div className='tiltcard'>
            {CEO.map( (info) => (
              <TiltCard 
              key={info.id}
              job={info.job}
              name={info.name}
              profile={info.profile}
              about={info.about}
              portfolio={info.portfolio}
              />
            ))}
</div>






    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <UXbox></UXbox>

    </>
  )
}

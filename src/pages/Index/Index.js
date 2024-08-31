import React from 'react'
import { useState }  from 'react'
import './Index.css'
import Btn from '../../assest/Btn/Btn'
import Levinteam from '../../assest/Neon/Levinteam'
import PoPup from '../../assest/PoPup/PoPup'
import scrollTop from '../../utils';

export default function Index() {

  // Smart Management Text Box =>

    const smTextBox = [
      {id:1 , src: "Images/Icon/Checkbox-Done.svg" , text: "افزایش فروش و بهره‌وری"} ,
      {id:2 , src: "Images/Icon/Checkbox-Done.svg" , text: "سیستم نوبت‌دهی آنلاین یکپارچه"} ,
      {id:3 , src: "Images/Icon/Checkbox-Done.svg" , text: "ایجاد گالری اختصاصی برای نمایش محصولات"} ,
      {id:4 , src: "Images/Icon/Checkbox-Done.svg" , text: "پرداخت‌های امن و مطمئن"} ,
      {id:5 , src: "Images/Icon/Checkbox-Done.svg" , text: "مدیریت ساده و کاربرپسند"} ,
      {id:6 , src: "Images/Icon/Checkbox-Done.svg" , text: "طراحی اختصاصی و متناسب با نیازهای شما"} ,
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

      const [showModal, setShowModal] = useState(false);
      const [foundData, setFoundData] = useState(null);
    
      const toggleModal = (event) => {
        setShowModal(!showModal);
        if (!showModal) {
          document.body.classList.add('modal-open');
    
          const modalTarget = parseInt(event.currentTarget.value, 10);
          const services = [
            { id: 1, title: 'فرانت اند', paragraph: 'ما با استفاده از تکنولوژی‌های روز مانند React، Bootstrap، Tailwind و وانیلا جاوااسکریپت، رابط‌های کاربری خیره‌کننده، واکنش‌گرا و کاربرپسند می‌سازیم. تجربه‌ای بی‌نقص و لذت‌بخش را برای کاربران فراهم می‌کنیم.' },
            { id: 2, title: 'بک اند', paragraph: 'با تسلط بر Django، Node.js، Express و دیتابیس‌های MySQL و MongoDB، زیرساخت‌هایی قدرتمند، امن و مقیاس‌پذیر برای پروژه‌های شما ایجاد می‌کنیم. تمرکز ما بر ارائه خدمات با اطمینان کامل به شماست.' },
            { id: 3, title: 'سئو', paragraph: 'ما با استفاده از تکنیک‌های حرفه‌ای سئو، رتبه سایت شما را در موتورهای جستجو بهبود می‌بخشیم. همه جوانب، از تحقیق کلمات کلیدی تا بهینه‌سازی محتوا و لینک‌سازی، تحت پوشش قرار می‌گیرد تا ترافیک وبسایت شما به طور چشمگیری افزایش یابد.' },
            { id: 4, title: 'دیزاین', paragraph: 'با خلق طراحی‌های گرافیکی منحصربه‌فرد و کاربرپسند، وبسایت‌هایی می‌سازیم که هم زیبا و هم کارا هستند. طراحی‌های ما کاربران را به تعامل بیشتر و مشارکت دعوت می‌کند.' },
            { id: 5, title: 'ربات تلگرام', paragraph: 'ما ربات‌های تلگرامی را با استفاده از Node.js و جاوااسکریپت توسعه می‌دهیم که به شما امکان ارائه خدمات خودکار و سریع را می‌دهند. این ربات‌ها می‌توانند وظایف متنوعی را انجام دهند.' },
            { id: 6, title: 'ربات دیسکورد', paragraph: 'ما ربات‌های دیسکوردی را برای بهبود مدیریت و تعامل در سرورهای آنلاین توسعه می‌دهیم. این ربات‌ها وظایف مدیریتی و تعاملات پویا با اعضا را به صورت خودکار انجام می‌دهند.' },
            { id: 7, title: 'امنیت', paragraph: 'با شناسایی و رفع آسیب‌پذیری‌ها، امنیت وبسایت و اپلیکیشن‌های شما را به حداکثر می‌رسانیم. ما از جدیدترین روش‌ها و ابزارهای امنیتی برای محافظت از سیستم شما استفاده می‌کنیم.' },
            { id: 8, title: 'ریدیزاین', paragraph: 'ما وبسایت شما را با رویکردی مدرن و خلاقانه بازطراحی می‌کنیم تا همگام با ترندهای جدید و نیازهای کاربران باشد. این بازطراحی تجربه کاربری را ارتقا می‌دهد و نرخ تبدیل را افزایش می‌دهد.' },
        ];
    
          const found = services.find(modalData => modalData.id === modalTarget);
          setFoundData(found);
          console.log(foundData);
          
        } else {
          document.body.classList.remove('modal-open');
        }
      };

    // Roadmap Carts =>

      const roadmap = [
        {id: 1 ,title: 'طراحی پرتوتایپ', content: 'نینجاهای ما با هنرهای خود ، پروتوتایپ اولیه را طراحی می‌کنند تا مسیر پروژه مشخص شود. این سلاح نینجاهاست.'},
        {id: 2 ,title: ' بازبینی و تایید ', content: 'پروتوتایپ را به کارفرما ارائه داده و با دقت، نظرات نهایی را برای ادامه مسیر دریافت می‌کنیم.',},
        {id: 3 ,title: 'تلفیق و توسعه', content: 'نینجاهای ما با استفاده از تکنیک‌های پیشرفته، نیروهای فرانت‌اند، بک‌اند و هر ابزار لازم را به‌کار می‌گیرند.',},
        {id: 4 ,title: ' توسعه و یکپارچگی' ,content: 'با استفاده از هنرهای مخفی، بخش‌های بک‌اند و سرور را به هم پیوند می‌دهیم تا سایت با نهایت سرعت و امنیت راه‌اندازی شود.'},
        {id: 5 , title: 'تست نهایی' ,content: 'قبل از تحویل نهایی، نینجاها سایت را تست کرده و هر نقصی را از بین می‌برند تا عملکردی بی‌نقص داشته باشد.'},
        {id: 6 , title: 'راه‌اندازی و پشتیبانی' , content: 'پس از تحویل سایت، نینجاها همواره در کمین‌اند تا هر مشکلی را سریعاً برطرف کنند و امنیت سایت را تضمین کنند.'},
      ]
  

  return (
    <>
 <h1 style={{display:"none"}}>لوین تیمSEO</h1> {/* This section should go to the external CSS file after SEO */}

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
            to={'/ContactUs'}
            onClick={scrollTop}
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
    </div>

{/* Card List =>  */}

    <PoPup show={showModal} data={foundData} onClose={toggleModal} />

    <div className='card-list'>
      <div className='card-animation'>
      <ul> 

        {/* Desctop */}
      {cardData.map((data) => (
        <li onClick={toggleModal} key={data.id} style={{background: 'none'}} value={data.id}> 
          <div className='card'>
              <div>
                <span className='model-name'>
                {data.name}  
                </span>
              <span> 
                {data.description} 
              </span>
            </div>
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
        <li onClick={toggleModal} key={data.id}  value={data.id}>
          <div className='regular-card'>
              <div href={data.src}><span className='model-name'>
                {data.name}  </span>
              <span> {data.description} </span>
            </div>
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
      <path d="M91.8673 183.121L89.9409 171.37C88.3237 161.505 95.0097 152.197 104.875 150.58V150.58C114.739 148.962 124.047 155.648 125.665 165.513L127.591 177.264" stroke="#121632" strokeWidth="16" strokeLinecap="round"/>
      <path d="M191.364 165.386L189.438 153.635C187.821 143.77 194.507 134.462 204.372 132.845V132.845C214.236 131.228 223.544 137.914 225.162 147.778L227.088 159.53" stroke="#121632" strokeWidth="16" strokeLinecap="round"/>
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
        <img src="Images/Baner/sm-Baner.svg" alt="" />
      </figure>

    </div>

{/* Call To Action */}

<section className='startDevelop'>
  <h2>با نینجاهای ماهر لوین همکاری کنید و تیم خود را تقویت کنید!</h2>
      <Btn 
      text={'شروع ماجراجویی'} 
      backgroundColor={'var(--primary)'}  
      textColor={'var(--bg-btn-color)'}
      to={'/AboutUs'} 
      onClick={scrollTop}
      />
    </section>

{/* Roadmap Card */}

  <div className='roadmap-container'>
      <div className='roadmap-top'>
        <svg width="636" height="111" viewBox="0 0 636 111" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M243 10.5562L197.993 55.5635L243 100.571" stroke="#8C4CF5" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
          <g clipPath="url(#clip0_1138_1398)">
          <path d="M288.541 17.0104C291.487 15.9592 294.683 15.8265 297.706 16.6297C300.729 17.433 303.437 19.1345 305.473 21.5095C307.509 23.8845 308.776 26.8211 309.107 29.9315C309.439 33.0419 308.819 36.1797 307.329 38.9304L354.627 86.2329L348.382 92.478L301.08 45.1755C298.329 46.6591 295.192 47.2743 292.085 46.94C288.977 46.6057 286.043 45.3376 283.67 43.3029C281.297 41.2682 279.597 38.5623 278.792 35.5418C277.988 32.5213 278.118 29.3279 279.164 26.3826L289.044 36.2627C289.656 36.8954 290.387 37.4002 291.195 37.7474C292.003 38.0946 292.872 38.2773 293.752 38.285C294.632 38.2926 295.504 38.125 296.318 37.7919C297.133 37.4588 297.872 36.9668 298.494 36.3448C299.116 35.7228 299.608 34.9831 299.941 34.1689C300.274 33.3547 300.442 32.4823 300.434 31.6027C300.427 30.723 300.244 29.8537 299.897 29.0454C299.55 28.2371 299.045 27.5061 298.412 26.8949L288.536 17.006L288.541 17.0104ZM334.328 25.3314L348.382 17.5228L354.627 23.7679L346.819 37.8218L339.01 39.3853L329.647 48.753L323.397 42.5079L332.765 33.1401L334.328 25.3314ZM304.657 61.2478L310.902 67.4929L287.481 90.9145C286.685 91.7131 285.613 92.1768 284.486 92.2106C283.358 92.2443 282.261 91.8456 281.418 91.0961C280.575 90.3466 280.051 89.3031 279.953 88.1796C279.855 87.0561 280.191 85.9377 280.891 85.0536L281.236 84.6694L304.657 61.2478Z" fill="var(--text)"/>
          </g>
          <path d="M393 10.5562L438.007 55.5635L393 100.571" stroke="#8C4CF5" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
          <clipPath id="clip0_1138_1398">
          <rect width="106" height="106" fill="white" transform="translate(265 2.56348)"/>
          </clipPath>
          </defs>
        </svg>
        <section>
          <h2> مسیر پیشرفت </h2>
        </section>
      </div>
      <div className='roadmap-bottom'>
        <section>
          {roadmap.map(name => (
            <div key={name.id} className='roadmap-cart'>
              <h3>{name.id}</h3>
              <h4>{name.title}</h4>
              <p>{name.content}</p>
            </div>
          ))}
        </section>
      </div>
  </div>

    </>
  )
}

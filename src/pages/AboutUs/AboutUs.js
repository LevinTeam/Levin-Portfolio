import React from 'react'
import './AboutUs.css'
import TiltCard from '../../Components/TiltCard/TiltCard'
import { Helmet } from "react-helmet";

const AboutUs = () => {

        // CEO Card Info

        const CEO = [
            {id: 1 , name:'Shervin Fatahi' , profile:'/Images/Profile/Valtor.jpg' , job: 'FRONT' , about: 'من شروین فتاحی هستم و در حوزه توسعه فرانت‌اند فعالیت می‌کنم. با زبان‌های HTML، CSS و JavaScript (Vanilla) آشنا هستم و از فریم‌ورک React برای ساخت رابط‌های کاربری استفاده می‌کنم. همچنین با کتابخانه‌هایی مانند Sass و Bootstrap کار می‌کنم تا وبسایت‌ها را به صورت واکنش‌گرا و زیبا پیاده‌سازی کنم. طراحی‌های خودم را با Figma انجام می‌دهم و سعی می‌کنم بهترین تجربه کاربری را برای مخاطبان فراهم کنم.' , portfolio: 'https://github.com/Valtor6978' },
            {id: 2 , name:'Pouya Alijany' , profile:'/Images/Profile/Ggbot.jpg' , job: 'SEO' , about: 'من پویا علیجانی هستم، در حوزه سئو و توسعه فرانت‌اند فعالیت دارم. با JavaScript (Vanilla) و فریم‌ورک React پروژه‌های وب را توسعه می‌دهم و تمرکزم روی بهینه‌سازی وبسایت‌ها برای موتورهای جستجو (SEO) است. سعی می‌کنم با بهبود محتوا و ساختار سایت، ترافیک ارگانیک را افزایش دهم و وبسایت‌ها را به رتبه‌های بالاتری در نتایج جستجو برسانم.' , portfolio: 'https://github.com/GgbotJr' },
            {id: 3 , name:'Arman Mohebrad' , profile:'/Images/Profile/BigAdler.jfif' , job: 'BACK' , about: 'من آرمان محب‌راد هستم و به عنوان توسعه‌دهنده بک‌اند فعالیت می‌کنم. با فریم‌ورک‌های Django و Node.js سیستم‌های سروری را طراحی و پیاده‌سازی می‌کنم. همچنین در کار با دیتابیس‌های مختلف مثل MongoDB و MySQL مهارت دارم. به امنیت وبسایت‌ها اهمیت زیادی می‌دهم و با پیاده‌سازی مکانیزم‌های امنیتی، سعی می‌کنم از داده‌ها و اطلاعات کاربران به خوبی محافظت کنم.' , portfolio: 'https://github.com/BiG-ADLER' },
        ]

    return(
        <div className='aboutus-container'>
            <Helmet>
            <title>تماس با شرکت لوین | در ارتباط با ما، همراهی مطمئن برای رشد کسب‌وکار شما</title>
            <meta name="description" content="برای ارتباط مستقیم با تیم لوین و دریافت مشاوره‌های تخصصی در زمینه طراحی وب‌سایت، سئو، امنیت و ربات‌های تلگرام و دیسکورد، با ما تماس بگیرید. ما همراه شما هستیم تا مسیر موفقیت شما هموارتر شود."></meta>
            <meta name="keywords" content="تماس با ما, ارتباط با شرکت لوین, مشاوره رایگان, پشتیبانی, طراحی وب‌سایت, خدمات سئو, تیم حرفه‌ای, امنیت وب‌سایت"></meta>
            <link rel="canonical" href="https://localhost:3000"></link>
            <meta property="og:title" content="تماس با شرکت لوین | در ارتباط با ما، همراهی مطمئن برای رشد کسب‌وکار شما"></meta>
            <meta property="og:description" content="برای دریافت مشاوره‌های تخصصی در زمینه طراحی و توسعه وب‌سایت، سئو و امنیت، همین حالا با تیم لوین تماس بگیرید. ما برای پاسخگویی به سوالات و نیازهای شما آماده‌ایم."></meta>
            <meta property="og:image" content="Images/Icon/favIcon.svg"></meta>
            <meta property="og:url" content="https://localhost:3000/"></meta>
            </Helmet>
            <div className='aboutus-content'>
                <section className='aboutus-text'>
                    <h2> درباره لوین </h2>
                    <p>لوین به معنای رعد و برق، نمادی از سرعت، قدرت و دقت است. ما یک تیم جوان، پرانرژی و خلاق از برنامه‌نویسان، طراحان و متخصصین وب هستیم که در دنیای توسعه وب به دنبال ارائه راه‌حل‌های نوین و منحصر به فرد هستیم.</p>
                    <p>تیم ما با تمرکز بر نوآوری و کیفیت، آماده است تا ایده‌های شما را به وب‌سایت‌هایی تبدیل کند که بازتاب‌دهنده اصالت و حرفه‌ای بودن کسب‌وکار شما باشد. ما معتقدیم که هر کسب‌وکاری لایق یک وب‌سایت است که به بهترین شکل ممکن از آن پشتیبانی کند.</p>
                    <p>هدف ما ارائه خدماتی است که شما را در دنیای آنلاین به مشتریان بیشتری متصل کرده و به موفقیت شما کمک کند. با لوین، اطمینان داشته باشید که در مسیر درستی قرار گرفته‌اید.</p>
                </section>
                
                <figure className='aboutus-baner'>
                <svg width="375" height="619" viewBox="0 0 375 619" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="284.161" y="123.918" width="28.5954" height="75.8582" rx="14.2977" transform="rotate(8.28448 284.161 123.918)" fill="var(--ninja)"/>
                    <rect x="339.954" y="148.347" width="28.5954" height="75.8582" rx="14.2977" transform="rotate(84.0476 339.954 148.347)" fill="var(--ninja)"/>
                    <circle cx="218" cy="273" r="136.683" transform="rotate(-9.31302 218 273)" fill="var(--ninja)"/>
                    <rect x="108.927" y="250.861" width="208.105" height="78.9942" rx="4" transform="rotate(-9.31302 108.927 250.861)" fill="var(--dark)"/>
                    <path d="M152.867 299.121L150.941 287.37C149.324 277.505 156.01 268.197 165.875 266.58V266.58C175.739 264.962 185.047 271.648 186.665 281.513L188.591 293.264" stroke="var(--ninja)" stroke-width="16" stroke-linecap="round"/>
                    <path d="M252.364 281.386L250.437 269.635C248.82 259.77 255.506 250.462 265.371 248.845V248.845C275.236 247.228 284.544 253.914 286.161 263.778L288.088 275.53" stroke="var(--ninja)" stroke-width="16" stroke-linecap="round"/>
                    <path d="M270.402 418C270.402 422.333 268.402 425.833 264.402 428.5C260.736 431.167 256.236 432.667 250.902 433L164.902 439.5L105.402 444.5L74.4023 447C71.7357 447 69.2357 445.333 66.9023 442C64.9023 438.667 63.9023 435.5 63.9023 432.5C63.9023 430.167 64.569 428.5 65.9023 427.5C67.569 426.167 69.2357 425.333 70.9023 425C72.9023 424.333 74.2357 423.833 74.9023 423.5C75.2357 405.5 75.4023 363.5 75.4023 297.5C75.4023 248.833 73.4023 211.167 69.4023 184.5C65.7357 157.5 63.9023 143 63.9023 141C63.9023 136.333 65.569 132.667 68.9023 130C72.569 127.333 76.2357 126 79.9023 126C82.2357 126 84.069 127 85.4023 129C86.7357 130.667 87.7357 133.5 88.4024 137.5C91.7357 148.833 94.2357 169.667 95.9024 200C97.9024 230.333 98.9023 262 98.9023 295C98.9023 323 98.7357 349 98.4023 373C98.069 397 97.9023 413.167 97.9023 421.5C102.236 421.167 110.569 420.667 122.902 420C135.236 419 147.902 418 160.902 417C180.236 414.667 202.069 411.167 226.402 406.5C246.069 402.833 257.902 401 261.902 401C265.569 401 267.902 402.667 268.902 406C269.902 409.333 270.402 413.333 270.402 418Z" fill="var(--light)"/>
                    <path d="M165.584 326.2C165.584 327 165.017 327.7 163.884 328.3C162.084 329.3 159.25 330.367 155.384 331.5C151.584 332.633 148.45 333.433 145.984 333.9C142.117 334.633 138.217 335.233 134.284 335.7C130.417 336.1 127.917 336.333 126.784 336.4C126.85 340.267 126.95 344.267 127.084 348.4C127.217 352.467 127.317 355.267 127.384 356.8C129.984 356.467 133.884 355.833 139.084 354.9L142.884 354.3C147.084 353.567 150.317 352.233 152.584 350.3C153.784 349.367 154.65 348.9 155.184 348.9C155.65 348.9 156.017 349.167 156.284 349.7C156.617 350.167 156.784 350.667 156.784 351.2C156.784 352.4 155.417 353.733 152.684 355.2C150.017 356.6 147.05 357.633 143.784 358.3C141.05 358.9 137.984 359.467 134.584 360C131.184 360.533 128.95 360.867 127.884 361C128.284 372.4 129.45 380.867 131.384 386.4C133.317 387.067 135.217 387.567 137.084 387.9C138.95 388.167 141.35 388.3 144.284 388.3C147.217 388.3 150.017 387.933 152.684 387.2C155.35 386.4 157.484 385.433 159.084 384.3C160.75 383.167 161.584 382.1 161.584 381.1C161.584 380.567 161.484 380.067 161.284 379.6C161.084 379.067 160.817 378.533 160.484 378C160.35 377.8 160.117 377.5 159.784 377.1C159.517 376.633 159.384 376.267 159.384 376C159.384 375.333 160.117 375 161.584 375C162.65 375 163.55 375.467 164.284 376.4C165.084 377.267 165.484 378.233 165.484 379.3C165.484 381.433 164.517 383.533 162.584 385.6C160.717 387.667 158.117 389.333 154.784 390.6C151.517 391.933 147.884 392.6 143.884 392.6C139.817 392.6 136.484 392.367 133.884 391.9C131.284 391.5 129.317 390.667 127.984 389.4C126.384 387.6 125.25 384.467 124.584 380C123.984 375.533 123.45 369.567 122.984 362.1C121.717 362.433 120.284 362.733 118.684 363C117.15 363.2 115.984 363.3 115.184 363.3C114.384 363.3 113.717 363.067 113.184 362.6C112.717 362.067 112.484 361.433 112.484 360.7C112.484 360.233 112.55 359.833 112.684 359.5C112.884 359.167 113.15 358.967 113.484 358.9C115.684 358.633 117.284 358.467 118.284 358.4L122.584 357.9C122.317 349.3 122.05 342.3 121.784 336.9C120.784 336.9 119.984 336.933 119.384 337L114.784 337.1C114.184 337.1 113.717 336.933 113.384 336.6C113.05 336.267 112.884 335.9 112.884 335.5C112.884 333.9 113.95 332.833 116.084 332.3C116.884 332.167 117.884 332.033 119.084 331.9C120.35 331.7 121.184 331.6 121.584 331.6C122.85 330.2 124.25 329.5 125.784 329.5C126.05 329.5 126.25 329.733 126.384 330.2C126.584 330.6 126.684 330.9 126.684 331.1C131.084 330.9 136.317 330.4 142.384 329.6C146.384 329.067 152.55 327.8 160.884 325.8L164.584 325C165.25 325 165.584 325.4 165.584 326.2ZM221.663 328.9C221.663 329.1 221.13 329.667 220.063 330.6C218.997 331.533 218.063 332.833 217.263 334.5C216.397 336.3 215.497 338.7 214.563 341.7C213.697 344.7 212.43 349.2 210.763 355.2L207.963 365.5C204.563 377.833 202.463 386.533 201.663 391.6C201.463 392.733 200.93 393.667 200.063 394.4C199.197 395.2 197.897 395.6 196.163 395.6C195.763 395.6 194.33 392.8 191.863 387.2C189.463 381.533 186.297 374 182.363 364.6C179.963 359 177.53 353.8 175.063 349C172.597 344.133 170.93 341.333 170.063 340.6C168.93 339.733 168.363 338.8 168.363 337.8C168.363 337.333 168.797 336.7 169.663 335.9C170.597 335.1 171.53 334.7 172.463 334.7C173.063 334.7 173.497 334.833 173.763 335.1C174.03 335.3 174.397 335.733 174.863 336.4C175.73 337.667 177.163 340.433 179.163 344.7C181.163 348.9 183.197 353.5 185.263 358.5L193.463 378.4C196.063 384.533 197.563 388.133 197.963 389.2C198.097 387.933 198.697 384.933 199.763 380.2C200.897 375.467 202.23 370.133 203.763 364.2C206.03 355.6 207.863 348.833 209.263 343.9C210.73 338.9 212.097 334.933 213.363 332C214.497 329.4 215.463 327.633 216.263 326.7C217.063 325.767 217.963 325.3 218.963 325.3C219.297 325.3 219.83 325.833 220.563 326.9C221.297 327.9 221.663 328.567 221.663 328.9ZM284.148 326.2C284.148 327.467 283.515 328.367 282.248 328.9C280.982 329.433 279.115 329.933 276.648 330.4C273.915 330.933 270.448 331.467 266.248 332C262.048 332.467 258.648 332.767 256.048 332.9C255.848 335.767 255.582 344.033 255.248 357.7C254.915 371.367 254.715 381.467 254.648 388C258.248 387.933 262.982 387.7 268.848 387.3C273.782 387.033 276.548 386.9 277.148 386.9C278.348 386.9 279.415 387.167 280.348 387.7C281.348 388.233 281.848 389.067 281.848 390.2C281.848 391.133 281.682 391.8 281.348 392.2C281.082 392.6 280.448 392.8 279.448 392.8C279.048 392.8 277.948 392.7 276.148 392.5C274.815 392.233 273.682 392.1 272.748 392.1C269.615 392.1 263.348 392.3 253.948 392.7C253.615 393.167 253.215 393.5 252.748 393.7C252.348 393.967 251.982 394.1 251.648 394.1C251.248 394.1 250.848 394 250.448 393.8C250.048 393.6 249.815 393.3 249.748 392.9L245.248 393.4C240.048 394.067 236.182 394.4 233.648 394.4C231.448 394.4 229.782 393.933 228.648 393C228.048 392.467 227.748 391.5 227.748 390.1C227.748 389.7 227.948 389.2 228.348 388.6C228.815 388 229.282 387.7 229.748 387.7C229.882 387.7 230.382 387.9 231.248 388.3C232.182 388.633 233.048 388.8 233.848 388.8C236.315 388.8 239.948 388.667 244.748 388.4L249.348 388.1L249.948 373.4C250.015 371.867 250.082 370.5 250.148 369.3C250.215 368.033 250.248 366.967 250.248 366.1L251.248 333.4C244.315 333.867 241.015 334.1 241.348 334.1C234.548 334.633 230.548 334.9 229.348 334.9C228.215 334.9 227.148 334.533 226.148 333.8C225.148 333.067 224.648 332.133 224.648 331C224.648 330.2 224.848 329.567 225.248 329.1C225.715 328.633 226.315 328.4 227.048 328.4C227.582 328.4 228.115 328.433 228.648 328.5C229.182 328.567 229.715 328.633 230.248 328.7C231.915 329.033 233.515 329.2 235.048 329.2C236.515 329.2 239.315 329.1 243.448 328.9C247.582 328.633 250.348 328.467 251.748 328.4C251.815 327.533 252.115 326.833 252.648 326.3C253.182 325.7 253.882 325.4 254.748 325.4C255.148 325.4 255.482 325.667 255.748 326.2C256.015 326.733 256.148 327.333 256.148 328C260.015 327.867 266.982 327 277.048 325.4C277.848 325.267 278.715 324.9 279.648 324.3C280.648 323.7 281.215 323.4 281.348 323.4C282.015 323.4 282.648 323.667 283.248 324.2C283.848 324.733 284.148 325.4 284.148 326.2ZM347.357 389.3C347.357 390.1 346.057 390.5 343.457 390.5C342.99 390.5 339.857 386.933 334.057 379.8C328.324 372.6 323.59 366.467 319.857 361.4C319.324 360.667 317.624 358.233 314.757 354.1C310.557 347.967 307.957 344.267 306.957 343L306.757 350.7L306.657 358.2C306.657 362.933 306.59 368.067 306.457 373.6C306.39 379.133 306.29 383.533 306.157 386.8C306.09 387.6 305.724 388.333 305.057 389C304.457 389.667 303.824 390 303.157 390C302.424 390 301.89 389.8 301.557 389.4C301.29 388.933 301.157 388.067 301.157 386.8C301.157 386 301.29 383.533 301.557 379.4C302.157 371.733 302.457 365.3 302.457 360.1C302.457 355.967 302.524 352.067 302.657 348.4C302.79 344.667 302.857 342.367 302.857 341.5L302.957 338.6V338.3C302.957 337.567 303.057 337 303.257 336.6C303.524 336.133 304.024 335.9 304.757 335.9H305.257C305.99 335.9 307.424 337.233 309.557 339.9C311.757 342.5 314.524 346.067 317.857 350.6C318.59 351.533 319.29 352.467 319.957 353.4C320.624 354.267 321.257 355.1 321.857 355.9C325.657 360.767 327.657 363.333 327.857 363.6C337.324 375.667 342.49 382.533 343.357 384.2C343.224 383.667 342.99 382.433 342.657 380.5C342.324 378.567 341.99 376.033 341.657 372.9C341.39 369.767 341.257 366.533 341.257 363.2C341.257 357.267 340.69 349.433 339.557 339.7C339.224 336.5 339.057 334.533 339.057 333.8C339.057 331.267 340.49 330 343.357 330C344.024 330 344.524 330.7 344.857 332.1C345.19 333.433 345.424 336.3 345.557 340.7C345.69 345.1 345.757 352.133 345.757 361.8C345.757 364.867 345.857 367.867 346.057 370.8C346.324 373.733 346.557 376.333 346.757 378.6C347.09 381.733 347.257 384.1 347.257 385.7L347.357 389.3Z" fill="var(--light)"/>
                </svg>
                </figure>
            </div>



            {/* CEO card */} 

                <h2> نینجا ها: </h2>
            {<div className='tiltcard'>
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
            </div>}
        </div>
    )
}

export default AboutUs ;
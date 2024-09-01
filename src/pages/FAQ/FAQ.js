import React , {useState} from 'react'
import './FAQ.css'
import { Helmet } from "react-helmet";


const FAQ = () => {

    const faqItems = [
        {
            id: '1',
            title: '  خدمات اصلی شما چیست؟ ',
            content: 'شرکت لوین در زمینه برنامه‌نویسی و توسعه نرم‌افزار، خدمات مختلفی را به مشتریان خود ارائه می‌دهد. خدمات اصلی ما شامل طراحی و توسعه وبسایت‌های حرفه‌ای، بهینه‌سازی برای موتورهای جستجو (SEO)، ایجاد و مدیریت کارت‌های دیجیتال، و ارائه راهکارهای دیجیتال مارکتینگ برای افزایش فروش است. ما با توجه به نیازهای کسب‌وکار شما، راهکارهایی خلاقانه و اثربخش ارائه می‌دهیم تا حضور آنلاین شما را بهبود بخشیم.',
        },
        {
            id: '2',
            title: 'چگونه می‌توانم با پشتیبانی تماس بگیرم؟',
            content: 'برای ارتباط با تیم پشتیبانی ما، می‌توانید به صفحه "تماس با ما" در سایت مراجعه کنید. در این صفحه اطلاعات تماس، فرم ارتباطی، و لینک‌های مستقیم به کانال‌های ارتباطی مانند ایمیل و شماره تلفن موجود است. پشتیبانی ما به صورت ۲۴ ساعته و در ۷ روز هفته آماده پاسخگویی به سؤالات و درخواست‌های شماست.',
        },
        {
            id: '3',
            title: 'هزینه خدمات شما چگونه است؟',
            content: 'ما در شرکت لوین بر این باوریم که کیفیت خدمات نباید قربانی هزینه‌ها شود. به همین دلیل، تلاش کرده‌ایم تا با ارائه خدماتی با کیفیت بالا و در عین حال با هزینه‌ای مقرون به صرفه، رضایت مشتریان خود را جلب کنیم. هزینه هر خدمت با توجه به نیازها و درخواست‌های خاص شما متغیر است و پس از بررسی دقیق و مشاوره با تیم ما، قیمت نهایی به شما اعلام خواهد شد.',
        },
        {
            id: '4',
            title: 'پشتیبانی شما چگونه عمل می‌کند؟',
            content: 'پشتیبانی ما به صورت شبانه‌روزی در دسترس است و تلاش می‌کند تا در سریع‌ترین زمان ممکن به درخواست‌ها و مشکلات شما پاسخ دهد. تیم پشتیبانی ما متشکل از کارشناسانی مجرب است که در زمینه‌های مختلف تکنولوژی و نرم‌افزار تخصص دارند و آماده‌اند تا شما را در هر مرحله از پروژه همراهی کنند.',
        },
        {
            id: '5',
            title: 'چگونه می‌توانم حساب کاربری ایجاد یا حذف کنم؟',
            content: 'برای ایجاد حساب کاربری، به صفحه ثبت‌نام در سایت مراجعه کرده و اطلاعات خود را وارد کنید. فرآیند ثبت‌نام ساده و سریع است. برای حذف اکانت خود، کافی است با پشتیبانی ما تماس بگیرید. تیم پشتیبانی در سریع‌ترین زمان ممکن درخواست شما را بررسی و حساب کاربری‌تان را حذف خواهد کرد.',
        },
        {
            id: '6',
            title: 'آیا شرکت شما به مشتریان خارج از ایران خدمات ارائه می‌دهد؟',
            content: 'بله، شرکت لوین خدمات خود را به مشتریان در سراسر جهان ارائه می‌دهد. فرقی نمی‌کند که در کدام نقطه از جهان هستید، تیم ما آماده است تا نیازهای شما را برآورده کند و خدمات خود را با همان کیفیت و تعهد به شما ارائه دهد.',
        },
    ];

    const [selectedId, setSelectedId] = useState(faqItems[0].id);

    return (
    <div className='faq-container'>
        <Helmet>
        <title>سوالات متداول | شرکت لوین - پاسخ به پرسش‌های شما درباره خدمات طراحی وب ، سئو و امنیت</title>
        <meta name="description" content="در صفحه حریم خصوصی و سیاست‌های شرکت لوین، نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شخصی کاربران به وضوح شرح داده شده است. ما متعهد به حفاظت از حریم خصوصی شما هستیم و تمامی قوانین را رعایت می‌کنیم."></meta>
        <meta name="keywords" content="حریم خصوصی, سیاست‌ها, حفاظت از داده, شرکت لوین, امنیت اطلاعات, سیاست حریم خصوصی, محافظت از حریم خصوصی, قوانین حفاظت داده"></meta>
        <link rel="canonical" href="https://localhost:3000"></link>
        <meta property="og:title" content="حریم خصوصی و سیاست‌ها | شرکت لوین - محافظت از اطلاعات"></meta>
        <meta property="og:description" content="این صفحه، نحوه جمع‌آوری و استفاده از اطلاعات شما و نیز اقدامات امنیتی ما برای حفاظت از داده‌های شخصی‌تان توضیح داده شده است"></meta>
        <meta property="og:image" content=""></meta>
        <meta property="og:url" content="https://localhost:3000/"></meta>
        </Helmet>
            <div className="faq-wrapper">
            <div className="faq-main-title"> سوالات متداول </div>

            {faqItems.map((item) => (
                <div className='accordion' key={item.id}>
                <input
                    type="radio"
                    name="accordion"
                    id={item.id}
                    checked={selectedId === item.id}
                    onChange={() => setSelectedId(item.id)}
                />
                <label className="faq-item" htmlFor={item.id}>
                    <div className="faq-title">{item.title}</div>
                    <div className="faq-content">{item.content}</div>
                </label>
                </div>
            ))}
            </div>
    </div>
    );
}

export default FAQ ;

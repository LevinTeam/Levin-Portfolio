import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {

    const links = [
        {
            id: 1,
            url: '/Privacy',
            title: 'حریم خصوصی و امنیت',
        },
        {
            id: 2,
            url: '/FAQ',
            title: 'سوالات متداول',
        },
        {
            id: 3,
            url: '/AboutUs',
            title: 'درباره ما',
        },
        {
            id: 4,
            url: '/ContactUs',
            title: 'تماس با ما',
        },
    ]
    
    const icons = [
        { id: 1, i: <i className='bx bxl-instagram'></i> , title: 'صفحه اینستاگرام', href: 'https://www.instagram.com/levin_team', alt: 'لوگو ایستاگرام' },
        { id: 2, i: <i className='bx bxl-github'></i> , title: 'صفحه گیت هاب', href: 'https://github.com/LevinTeam', alt: 'لوگو گیت هاب' },
        { id: 3, i: <i className='bx bxl-telegram' ></i> , title: 'صفحه تلگرام', href: 'https://t.me/Levin_Team', alt: 'لوگو تلگرام' },
        { id: 4, i: <i className='bx bxl-linkedin' ></i> , title: 'صفحه لینکدین', href: 'https://linkedin.com/company/levin-team', alt: 'لوگو لینکدین' },
        { id: 5, i: <i className='bx bx-phone' ></i> , title: 'تماس با ما', href: 'tel:09030626978', alt: 'لوگو تماس' },
    ]

    return (
        <footer className='footer-container'>
            <div className="header-container__footer">
                <div className="img-footer">
                    <svg width="120" height="35" viewBox="0 0 146 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1221 31.5076V2.41666H24.0198V25.1439H35.7812V31.5076H16.1221Z" fill="var(--text)" />
                        <rect x="37.247" y="3.32" width="20.5159" height="7.7876" rx="3.8938" transform="rotate(-9.313 37.247 3.32)" fill="var(--primary)" />
                        <ellipse cx="42.711" cy="6.659" rx="1.655" ry="1.965" transform="rotate(-9.313 42.711 6.659)" fill="#121632" />
                        <ellipse cx="53.381" cy="4.909" rx="1.655" ry="1.965" transform="rotate(-9.313 53.381 4.909)" fill="#121632" />
                        <rect x="37.247" y="14.325" width="20.5159" height="7.7876" rx="3.8938" transform="rotate(-9.313 37.247 14.325)" fill="var(--primary)" />
                        <ellipse cx="42.711" cy="17.664" rx="1.655" ry="1.965" transform="rotate(-9.313 42.711 17.664)" fill="#121632" />
                        <ellipse cx="53.381" cy="15.914" rx="1.655" ry="1.965" transform="rotate(-9.313 53.381 15.914)" fill="#121632" />
                        <rect x="37.247" y="25.33" width="20.5159" height="7.7876" rx="3.8938" transform="rotate(-9.313 37.247 25.33)" fill="var(--primary)" />
                        <ellipse cx="42.711" cy="28.669" rx="1.655" ry="1.965" transform="rotate(-9.313 42.711 28.669)" fill="#121632" />
                        <ellipse cx="53.381" cy="26.919" rx="1.655" ry="1.965" transform="rotate(-9.313 53.381 26.919)" fill="#121632" />
                        <path d="M68.5825 2.41666L74.5484 22.928H74.7757L80.7416 2.41666H89.662L80.0597 31.5076H69.2643L59.662 2.41666H68.5825ZM100.362 2.41666V31.5076H92.4639V2.41666H100.362ZM129.275 2.41666V31.5076H122.684L112.173 16.2235H112.002V31.5076H104.104V2.41666H110.809L121.15 17.6439H121.377V2.41666H129.275Z" fill="var(--text)" />
                    </svg>
                </div>
                <div className="header-links__footer">
                    <ul>
                        {links.map(link => (
                            <li key={link.id} >
                                <Link to={link.url} title={link.title} className="link-footer">{link.title}</Link>
                            </li>
                        ))} 
                    </ul>
                </div>
            </div>
            <div className="footer-container__footer">
                    <p>&copy; کلیه حقوق مادی و معنوی متعلق به شرکت لوین میباشد </p>
                <div className="icons-footer">
                    <ul>
                        {icons.map(icon => (
                            <li key={icon.id}>
                                <a href={icon.href} title={icon.title}>
                                    {icon.i}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

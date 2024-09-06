import React, { useEffect, useState } from 'react';
import './Header.css';
import Btn from '../../assest/Btn/Btn';
import Ninjalink from '../../assest/Ninja-Link/Ninjalink';
import scrollTop from '../../utils';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  
const closeMenu = () => {
    setMenuOpen(false)
    scrollTop()
}

  const links = [
    { id: 1, url: '/', topText: 'خانه', bottomText: 'خانه' },
    { id: 2, url: '/Blog', topText: 'وبلاگ', bottomText: 'وبلاگ' },
    { id: 3, url: '/AboutUs', topText: 'درباره ما', bottomText: 'درباره ما' },
    { id: 4, url: '/ContactUs', topText: 'تماس با ما', bottomText: 'تماس با ما' },
  ];

  const scrollHandler = () => {
    setScroll(document.documentElement.scrollTop !== 0);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  function getCookie(name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

let userToken = getCookie('userToken');
// console.log(`User Token in header -> ${userToken}`)

  return (
    <div className='main-header'>
      <header className={`header ${scroll ? 'header-scroller' : ''}`}>
        <div className='header-buttons'>
          { !userToken ? (
            <Btn
            text={'ثبت نام | ورود'} 
            backgroundColor={'var(--primary)'} 
            textColor={'var(--bg-btn-color)'} 
            to={'/login'}
            onClick={scrollTop}
            replace={true}
          />
        ) : (
            <p className='user-panel'> خوش آمدید </p>
          ) }
        </div>
        <div className='header-links'>
          <ul className={`header-items ${menuOpen ? 'mobile-menu-items' : ''}`}>
            {links.map((link) => (
              <li key={link.id} className='header__li-link'>
                <Ninjalink
                  url={link.url}
                  topText={link.topText}
                  bottomText={link.bottomText}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='header-logo'>
          {/* SVG ninja file for Header => */}

<svg width="146" height="35" viewBox="0 0 146 35" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className='menu-icon' onClick={toggleMenu}>
          <div className={`menu-icon-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-line ${menuOpen ? 'open' : ''}`}></div>
        </div>
        {menuOpen && (
          <div className='mobile-menu'>
            <ul className='mobile-menu-items'>
              <li className='mobile-menu-item' onClick={closeMenu} >
              { !userToken ? (
            <Btn
            text={'ثبت نام | ورود'} 
            backgroundColor={'var(--primary)'} 
            textColor={'var(--bg-btn-color)'} 
            to={'/login'}
            onClick={scrollTop}
            replace={true}
          />
        ) : (
            <p className='user-panel'> خوش آمدید </p>
          ) }
              </li>
              {links.map((link) => (
                <li key={link.id} className='mobile-menu-item' onClick={closeMenu}>
                  <Ninjalink
                    url={link.url}
                    topText={link.topText}
                    bottomText={link.bottomText}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

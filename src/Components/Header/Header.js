import React, { useEffect, useState } from 'react';
import './Header.css';
import Btn from '../../assest/Btn/Btn';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    const btns = [
      {
        id: 1,
        text: 'ثبت نام | ورود',
        backgroundColor: '#DD226D',
        textColor: '#fff'
      }
    ];
  
    const scrollHandler = () => {
      if (document.documentElement.scrollTop !== 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('scroll', scrollHandler);
      return () => {
        document.removeEventListener('scroll', scrollHandler);
      };
    }, []);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className='main-header'>
        <header className={scroll ? 'header header-scroller' : 'header'}>
          <div className='header-buttons'>
            {btns.map((btn) => (
              <Btn {...btn} key={btn.id} />
            ))}
          </div>
          <div className='header-links'>
            <ul className='header-items'>
              <li className='header__li-link'>
                <a className='link' href='#'>
                  محصولات
                </a>
              </li>
              <li className='header__li-link'>
                <a className='link' href='#'>
                  تعرفه
                </a>
              </li>
              <li className='header__li-link'>
                <a className='link' href='#'>
                  وبلاگ
                </a>
              </li>
              <li className='header__li-link'>
                <a className='link' href='#'>
                  خانه
                </a>
              </li>
              <li className='header__li-link'>
                <a className='link' href='#'>
                  سرویس ها
                </a>
              </li>
              <li className='header__li-link'>
                <a className='link' href='#'>
                  بیشتر
                  <img src='Images/Logos/arrow-down.png' alt='' />
                </a>
              </li>
            </ul>
          </div>
          <div className='header-logo'>
            <img src='Images/Logo/Header-Icon.png' className='Header-img' alt='' />
          </div>
          <div className='menu-icon' onClick={toggleMenu}>
            <div className={`menu-icon-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`menu-icon-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`menu-icon-line ${menuOpen ? 'open' : ''}`}></div>
          </div>
          {menuOpen && (
            <div className='mobile-menu'>
              <ul className='mobile-menu-items'>
                <li className='mobile-menu-item'>
                  <a className='link' href='#'>
                    محصولات
                  </a>
                </li>
                <li className='mobile-menu-item'>
                  <a className='link' href='#'>
                    تعرفه
                  </a>
                </li>
                <li className='mobile-menu-item'>
                  <a className='link' href='#'>
                    وبلاگ
                  </a>
                </li>
                <li className='mobile-menu-item'>
                  <a className='link' href='#'>
                    خانه
                  </a>
                </li>
                <li className='mobile-menu-item'>
                  <a className='link' href='#'>
                    سرویس ها
                  </a>
                </li>
                <li className='mobile-menu-item'>
                  <a className='link' href='#'>
                    بیشتر
                  </a>
                </li>
                <li className='mobile-menu-item'>
                  <Btn {...btns[0]} />
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>
    );
  };
  
  export default Header;
  

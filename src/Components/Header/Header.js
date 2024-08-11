import React, { useEffect, useState } from 'react';
import './Header.css';
import Btn from '../../assest/Btn/Btn';
import Ninjalink from '../../assest/Ninja-Link/Ninjalink';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [

      {
        url: '#',
        topText: ' خانه ',
        bottomText: ' خانه ',
      },
      {
        url: '#',
        topText: ' محصولات ',
        bottomText: ' محصولات ',
      },
      {
        url: '#',
        topText: ' تعرفه ',
        bottomText: ' تعرفه ',
      },
      {
        url: '#',
        topText: ' وبلاگ ',
        bottomText: ' وبلاگ ',
      },
      {
        url: '#',
        topText: ' سرویس ها ',
        bottomText: ' سرویس ها ',
      },
      {
        url: '#',
        topText: ' بیشتر ',
        bottomText: ' بیشتر ',
      }

    ];
  
    const btns = [
      {
        id: 1,
        text: 'ثبت نام | ورود',
        backgroundColor: 'var(--primary-blue)',
        textColor: 'var(--white)'
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
            
    
      {links.map((link, index) => (
                <li className='header__li-link'>
                    <Ninjalink
                      key={index}
                      url={link.url}
                      topText={link.topText}
                      bottomText={link.bottomText}
                    />
                </li>  ))}
            </ul>
          </div>
          <div className='header-logo'>
            <img src='Images/Logo/Header-Icon.svg' className='Header-img' alt='' />
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
                  <Btn {...btns[0]} />
                </li>

              {links.map((link, index) => (
                <li className='mobile-menu-item'>
                    <Ninjalink
                      key={index}
                      url={link.url}
                      topText={link.topText}
                      bottomText={link.bottomText}
                    />
                </li>  ))}
                
              </ul>
            </div>
          )}
        </header>
      </div>
    );
  };
  
  export default Header;
  

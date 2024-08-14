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
        backgroundColor: 'var(--primary)',
        textColor: 'var(--bg-btn-color)'
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
              {/* SVG ninja file for Header => */}

              <svg width="146" height="35" viewBox="0 0 146 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1298_799)">
                  <path d="M16.1221 31.5076V2.41666H24.0198V25.1439H35.7812V31.5076H16.1221Z" fill="var(--text)"/>
                  <rect x="37.2471" y="3.32007" width="20.5159" height="7.7876" rx="3.8938" transform="rotate(-9.31302 37.2471 3.32007)" fill="var(--primary)"/>
                  <ellipse cx="42.7115" cy="6.6593" rx="1.65546" ry="1.96581" transform="rotate(-9.31302 42.7115 6.6593)" fill="#121632"/>
                  <ellipse cx="53.381" cy="4.90979" rx="1.65546" ry="1.96581" transform="rotate(-9.31302 53.381 4.90979)" fill="#121632"/>
                  <rect x="37.2471" y="14.325" width="20.5159" height="7.7876" rx="3.8938" transform="rotate(-9.31302 37.2471 14.325)" fill="var(--primary)"/>
                  <ellipse cx="42.7115" cy="17.6642" rx="1.65546" ry="1.96581" transform="rotate(-9.31302 42.7115 17.6642)" fill="#121632"/>
                  <ellipse cx="53.381" cy="15.9147" rx="1.65546" ry="1.96581" transform="rotate(-9.31302 53.381 15.9147)" fill="#121632"/>
                  <rect x="37.2471" y="25.3301" width="20.5159" height="7.7876" rx="3.8938" transform="rotate(-9.31302 37.2471 25.3301)" fill="var(--primary)"/>
                  <ellipse cx="42.7115" cy="28.6693" rx="1.65546" ry="1.96581" transform="rotate(-9.31302 42.7115 28.6693)" fill="#121632"/>
                  <ellipse cx="53.381" cy="26.9198" rx="1.65546" ry="1.96581" transform="rotate(-9.31302 53.381 26.9198)" fill="#121632"/>
                  <path d="M68.5825 2.41666L74.5484 22.928H74.7757L80.7416 2.41666H89.662L80.0597 31.5076H69.2643L59.662 2.41666H68.5825ZM100.362 2.41666V31.5076H92.4639V2.41666H100.362ZM129.275 2.41666V31.5076H122.684L112.173 16.2235H112.002V31.5076H104.104V2.41666H110.809L121.15 17.6439H121.377V2.41666H129.275Z" fill="var(--text)"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1298_799">
                  <rect width="146" height="33.015" fill="white"/>
                  </clipPath>
                  </defs>
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
  

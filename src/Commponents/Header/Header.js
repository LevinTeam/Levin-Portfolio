import React, { Component } from 'react'
import './Header.css'
import Btn from '../assest/Btn/Btn'

class Header extends Component {
      constructor(props) {
        super(props)

        this.state = {
            scrollDocument: 0,
            scroll: false
        }

        this.scrollHandler = this.scrollHandler.bind(this)

  }

        scrollHandler = (event) => {
          console.log(event)
          if (document.documentElement.scrollTop != 0) {
            this.setState({
              scroll: true
            })
          } else {
            this.setState({
              scroll: false
            })
          }
        }
      
        componentDidMount() {
          document.addEventListener("scroll", this.scrollHandler);
      }
      
        componentWillUnmount() {
          document.addEventListener("scroll", this.scrollHandler);
      }


  render() {


    return (
      <div>
        <header className={this.state.scroll ? `header-scroller` : `header`}>
          <div>
            <Btn text="ثبت نام" 
            backgroundColor="#DD226D" 
            textColor="#fff" />
            <Btn text="ورود" 
            backgroundColor="#fff" 
            textColor="#DD226D" />
          </div>
          <div className='header-links'>
            <ul className='header-items'>
              <li className='header__li-link' >
                <a className='link' href='#'>محصولات</a>
              </li>
              <li className='header__li-link' >
                <a className='link' href='#'>تعرفه</a>
              </li>
              <li className='header__li-link' >
                <a className='link' href='#'>وبلاگ</a>
              </li>
              <li className='header__li-link' >
                <a className='link' href='#'>خانه</a>
              </li>
              <li className='header__li-link' >
                <a className='link' href='#'>سرویس ها</a>
              </li>
              <li className='header__li-link' >
                <a className='link' href='#'>بیشتر<img src='Images/Logos/arrow-down.png' alt=''/></a>
              </li>
            </ul>
          </div>
          <div className='header-logo'>
            <img src="Images/Logos/Header logo.png" className='Header-img' alt="" />
          </div>
        </header>
      </div>
    )
  }
}

export default Header

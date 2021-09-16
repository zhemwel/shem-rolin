import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Shemwel <small>&</small> Rolin
            </span>
            <h6>29.10.2021</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Couple</a>
            </li>
            <li>
              <a href='#story'>Our Story</a>
            </li>
            <li>
              <a href='#organization'>Acara Pernikahan</a>
            </li>
            <li>
              <a href='#gallery'>Gallery</a>
            </li>
            <li>
              <a href='#whenwhere'>Tempat & Waktu Pernikahan</a>
            </li>
            {/* <li>
              <a href='#rsvp'>R.S.V.P</a>
            </li> */}
            <li>
              <a href='#donate'>Donate</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Shemwel & Rolin wedding
            <br />
            29 October 2021, Medan
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

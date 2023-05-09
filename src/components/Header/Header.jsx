import React from 'react'
import logo from './../../img/logo-1.svg';
import group from './../../img/group.png';
import s from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';

function Header() {
  return (
    <header>
      {/* <img src={logo} alt="logo" />
        <a href='search'><img src={group} alt="loopa" /></a> 
        <ul className={s.nav}>
            <li className={`${s.nav__items} ${s.active}`}>Лента</li>
            <li className={s.nav__items}>Магазин</li>
            <li className={s.nav__items}>Инструкции</li>
            <li className={s.nav__items}>О нас</li>
        </ul> */}

      <div className={s.header_wrapper}>
        <div>
          <a href='home'><img src={logo} alt="logo" /></a>
        </div>

        <div className={s.header_right}>
          <div className={s.loopa}>
            
            <img src={group} alt="" />
          </div>

          <div>
            <ul className={s.nav}>
              <li className={`${s.nav__items} ${s.active}`}>Лента</li>
              <HeaderNav text='Магазин' />
              <HeaderNav text='Инструкции' />
              <HeaderNav text='О нас' />
              
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
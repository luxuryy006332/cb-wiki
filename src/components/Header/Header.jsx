import React from 'react'
import logo from './../../img/logo-1.svg';
import group from './../../img/group.png';
import s from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';

function Header({ items }) {

  return (
    <header>
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
              <HeaderNav text={items[0]} path="/ribbon" />
              <HeaderNav text={items[1]} path="/store" />
              <HeaderNav text={items[2]} path="/instruction" />
              <HeaderNav text={items[3]} path="/aboutWe" />

            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import s from './Header.module.scss';

import HeaderNav from './HeaderNav/HeaderNav';
import HeaderMagnifying from './HeaderMagnifying/HeaderMagnifying';

import logo from './../../img/logo-1.svg';
import magnifying from './../../img/group.png';

function Header({results}) {

  const [searchEngine, setSearchEngine] = React.useState(false)

  const clickOnMagnifying = () => {
    setSearchEngine(true)
  }

  const clickOnMagnifyingClose = () => {
    setSearchEngine(false)
  }
  return (
    <div className={s.wrapper}>
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
              <img onClick={clickOnMagnifying} src={magnifying} alt="loopa" />
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

      {
        searchEngine ? 
          (<HeaderMagnifying clickOnMagnifyingClose = {clickOnMagnifyingClose} results = {results} />) 
        : null
      }
    </div>
  )
}

export default Header
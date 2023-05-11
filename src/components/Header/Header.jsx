import React from 'react'
import logo from './../../img/logo-1.svg';
import group from './../../img/group.png';
import s from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';

function Header({ items }) {

  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  }


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
              <li
                className={activeItem === null
                  ? `${s.nav__items} ${s.active}` : `${s.nav__items}`}
                onClick={() => onSelectItem(null)}>Лента
              </li>
              {items.map((name, index) => (
                <li className={activeItem === index ? `${s.nav__items} ${s.active}` : `${s.nav__items}`}
                  onClick={() => onSelectItem(index)}
                  key={`${name}_${index}`}>
                  {name}
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
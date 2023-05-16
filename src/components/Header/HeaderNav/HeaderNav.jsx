import React from 'react'
import s from '../Header.module.scss';
import { NavLink } from 'react-router-dom';



function HeaderNav({ text, path }) {
  return (
    <NavLink className={navData => navData.isActive ? `${s.active}` : ''} to={path}>
      <li className={s.nav__items}>
        {text}
      </li>
    </NavLink>
  )
}

export default HeaderNav
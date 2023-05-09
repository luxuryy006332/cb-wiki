import React from 'react'
import s from '../Header.module.scss';



function HeaderNav( {text} ) {
  return (
    <li className={s.nav__items}>{text}</li>
  )
}

export default HeaderNav
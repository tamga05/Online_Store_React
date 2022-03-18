import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './MenuItem.module.scss';



function MenuItem(props) {
   return (
      <li className={s.menuItem}>
         <NavLink to={props.link} className={s.menuLink}>{props.text}</NavLink>
      </li>
   );
}

export default MenuItem;


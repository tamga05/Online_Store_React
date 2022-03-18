import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './HeaderMenuItem.module.scss';



function HeaderMenuItem(props) {
   return (
      <li className={s.headerMenuItem}>
         <NavLink to={props.link} className={s.headerMenuLink}>{props.text}</NavLink>
      </li>
   );
}

export default HeaderMenuItem;


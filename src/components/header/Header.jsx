import React from "react";
import s from "./Header.module.scss";

import HeaderMenuItem from "./header-menu-item/HeaderMenuItem";
import MenuItem from "./menu-item/MenuItem";
import sprite from './../../components/components/sprite/sprite.svg';

import NavState from './burger/context/navState';
import MainMenu from './burger/MainMenu';
import { NavLink } from "react-router-dom";

function Header() {

   return (
      <header className={s.header}>
         <div className="container">
            <div className={s.headerBody}>
               <NavState>
                  <MainMenu />
               </NavState>
               <nav class={s.menuBody}>
                  <ul class={s.menuList}>
                     <MenuItem text="Магазины" link="/shops"/>
                     <MenuItem text="Акции" link="/sales"/>
                     <MenuItem text="Доставка и оплата" link="/delivery"/>
                  </ul>
               </nav>
               <div className={s.logo}>
                  <NavLink className={s.logoLink} to="/">
                     <svg className={s.logoImage} width="53" height="43" viewBox="0 0 53 43">
                        <use xlinkHref={sprite + "#logo"}></use>
                     </svg>
                     <span class={s.logoText}>DRIVE MOTO</span>
                  </NavLink>
               </div>
               <div className={s.rightBlock}>
                  <div className={s.location}>
                     <NavLink to="/" className={s.locationLink}>
                        <span>Москва,  ул. Науки  25</span>
                     </NavLink>
                  </div>
                  <div className={s.actions}>
                     <ul className={s.actionsList}>
                        <li className={s.actionsItem}>
                           <NavLink to="/" className={s.favorite}>
                              <svg width="24" height="24" viewBox="0 0 24 24">
                                 <use xlinkHref={sprite + "#favorite"}></use>
                              </svg>
                           </NavLink>
                        </li>
                        <li className={s.actionsItem}>
                           <NavLink to="/" className={s.user}>
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                 <use xlinkHref={sprite + "#user"}></use>
                              </svg>
                           </NavLink>
                        </li>
                        <li className={s.actionsItem}>
                           <NavLink to="/" className={s.cart}>
                              <svg width="31" height="23" viewBox="0 0 31 23">
                                 <use xlinkHref={sprite + "#cart"}></use>
                              </svg>
                              <span className={s.cartCount}>1</span>
                           </NavLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className={s.headerMenu}>
               <nav className={s.headerMenuBody}>
                  <ul className={s.headerMenuList}>
                     <HeaderMenuItem text="Квадроциклы" link="/Квадроциклы"/>
                     <HeaderMenuItem text="Катера" link="/Катера"/>
                     <HeaderMenuItem text="Гидроциклы" link="/Гидроциклы"/>
                     <HeaderMenuItem text="Лодки" link="/Лодки"/>
                     <HeaderMenuItem text="Вездеходы" link="/Вездеходы"/>
                     <HeaderMenuItem text="Снегоходы" link="/Снегоходы"/>
                     <HeaderMenuItem text="Двигатели" link="/Двигатели"/>
                     <HeaderMenuItem text="Запчасти" link="/Запчасти"/>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}

export default Header;

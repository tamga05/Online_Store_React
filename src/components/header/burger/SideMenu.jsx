import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from '../burger/context/navState';
import sprite from './../../../components/components/sprite/sprite.svg';
import s from './SideMenu.module.scss';
import { NavLink } from 'react-router-dom';

const Menu = styled.nav`
@media (max-width: 992px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 70%;
        height: 100%;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        padding: 50px 0 10px;
        z-index: 101;
        transition: left 0.5s ease 0s;
        transform: translateX(-110%);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        ${props =>
            props.open &&
            css`transform: translateX(0);`}
    }
`;

export const SideMenu = ({ children }) => {
    const { isMenuOpen } = useContext(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <div className={s.styledMenuBurger}>
            <div className={s.menuBurgerBody}>
                <nav>
                    <ul>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>
                                <svg class={s.icon} width="20" height="20" viewBox="0 0 20 20">
                                    <use xlinkHref={sprite + "#user"}></use>
                                </svg>
                                <span>Войти</span>
                            </NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>
                                <svg class={s.icon} width="20" height="20" viewBox="0 0 20 20">
                                    <use xlinkHref={sprite + "#user"}></use>
                                </svg>
                                <span>Регистрация</span>
                            </NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>
                                <svg class={s.icon} width="20" height="18" viewBox="0 0 20 18">
                                    <use xlinkHref={sprite + "#favorite"}></use>
                                </svg>
                                <span>Избранное</span>
                            </NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>
                                <svg class={s.icon} width="30" height="23" viewBox="0 0 30 23">
                                    <use xlinkHref={sprite + "#cart"}></use>
                                </svg>
                                <span>Корзина</span>
                            </NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>
                                <svg class={s.icon} width="16" height="19" viewBox="0 0 16 19">
                                    <use xlinkHref={sprite + "#shop"}></use>
                                </svg>
                                <span>Магазины</span>
                            </NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>
                                <svg class={s.icon} width="17" height="26" viewBox="0 0 17 26">
                                    <use xlinkHref={sprite + "#percentage"}></use>
                                </svg>
                                <span>Акции</span>
                            </NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>
                                <svg class={s.icon} width="16" height="15" viewBox="0 0 16 15">
                                    <use xlinkHref={sprite + "#delivery"}></use>
                                </svg>
                                <span>Доставка и оплата</span></NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Квадроциклы</NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Катера</NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Гидроциклы</NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Лодки</NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Вездеходы</NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Снегоходы</NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Двигатели</NavLink>
                        </li>
                        <li className={s.menuBurgerItem}>
                            <NavLink to="/" className={s.menuBurgerLink}>Запчасти</NavLink>
                        </li>
                    </ul>
                    <p className={s.menuBurgerLocation}>Москва,<br /> ул. Науки  25</p>
                </nav>
            </div>
            <div className={s.menuBurgerVoid}>
            </div>
        </div>
    ),
};
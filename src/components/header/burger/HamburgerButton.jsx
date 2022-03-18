import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from './context/navState';

const MenuButton = styled.div`
@media (max-width: 992px) {
  display: block;
  width: 34px;
  position: relative;
  height: 27px;
  cursor: pointer;
  z-index: 100000;
  transition: z-index 0.5s ease 0s;
  &.active {
    visability: hidden;
    z-index: 0;
  }

  span,
  &::before,
  &::after {
      content: "";
      transition: all 0.3s ease 0s;
      left: 0px;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #000;
      border-radius: 3px;
  }
  &::before {
    top: 0px;
  }

  &::after {
    bottom: 0px;
  }

  span {
    top: calc(50% - 1px);
    transform: scale(1);
    transition: all 0.1s ease 0s;
  }

  &.active {
    &::before {
      top: calc(50% - 1px);
      transform: rotate(-45deg);
      background-color: #1C62CD;
      opacity: 0;
    }

    &::after {
        bottom: calc(50% - 1px);
        transform: rotate(45deg);
        background-color: #1C62CD;
        opacity: 0;
    }

    span {
        content: '';
        position: absolute;
        top: -8px;
        left: -5px;
        width: 44px;
        height: 44px;
        background-color: #fff;
        border-radius: 50%;
        z-index: -1;
        border: 1px solid #1C62CD;
        opacity: 0;
    }
  }  
}
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <span></span>
    </MenuButton>
  );
};

export default HamburgerButton;
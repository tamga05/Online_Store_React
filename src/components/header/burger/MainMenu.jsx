import React, { useRef, useContext } from 'react';
import useOnClickOutside from '../burger/hooks/onClickOutside';
import { MenuContext } from '../burger/context/navState';
import HamburgerButton from '../burger/HamburgerButton';
import { SideMenu } from '../burger/SideMenu';

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <div ref={node}>
        <HamburgerButton />
        <SideMenu />
    </div>
  );
};

export default MainMenu;
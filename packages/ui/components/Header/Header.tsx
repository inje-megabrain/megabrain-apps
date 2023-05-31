import { forwardRef, useState } from 'react';

import { HeaderProps } from './types';
import BaseHeader from './Header.style';
import Hamburger from './Hamburger.style';
import { BaseMobileMenu } from './MobileMenu.style';
import { styled } from '@megabrain/ui/styles';
import { Logo } from '@megabrain/ui/components';

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ menuItems, onHrefClick }, ref) => {
  const [hambugerOpen, setHamburgerOpen] = useState(false);
  const onHamburgerClick = () => {
    setHamburgerOpen(!hambugerOpen);
  };

  const LogoButton = styled('button', {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  });
  return (
    <BaseHeader ref={ref}>
      <LogoButton onClick={() => onHrefClick('/')}>
        <Logo />
      </LogoButton>
      <ul>
        {menuItems.map((item) => (
          <li key={item.href}>
            <button onClick={() => onHrefClick(item.href)}>{item.label}</button>
            {item.children && (
              <div>
                <ul>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <button onClick={() => onHrefClick(child.href)}>{child.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Hamburger onClick={onHamburgerClick}>
        <svg
          color="#46FF46"
          viewBox="0 0 100 100"
          width="22"
          height="22"
        >
          <rect
            width="97"
            height="14"
            rx="8"
          ></rect>
          <rect
            y="40"
            width="97"
            height="14"
            rx="8"
          ></rect>
          <rect
            y="80"
            width="97"
            height="14"
            rx="8"
          ></rect>
        </svg>
      </Hamburger>
      {hambugerOpen && (
        <BaseMobileMenu>
          <button onClick={onHamburgerClick}>X</button>
          <div>
            {menuItems.map((item) => (
              <div key={item.href}>
                <button onClick={() => onHrefClick(item.href)}>{item.label}</button>
                {item.children && (
                  <div>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <button onClick={() => onHrefClick(child.href)}>{child.label}</button>
                      </li>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </BaseMobileMenu>
      )}
    </BaseHeader>
  );
});

Header.displayName = 'Header';
export default Header;

import BaseHeader from '@/components/Header/Header.style';
import { Logo } from '@/components';
import { forwardRef, useState } from 'react';
import { HeaderProps } from './types';
import Hamburger from '@/components/Header/Hamburger.style';
import { BaseMobileMenu } from '@/components/Header/MobileMenu.style';

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ menuItems, onHrefClick }, ref) => {
  const [hambugerOpen, setHamburgerOpen] = useState(false);
  const onHamburgerClick = () => {
    setHamburgerOpen(!hambugerOpen);
  };
  return (
    <BaseHeader ref={ref}>
      <Logo />
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
        <svg color="#46FF46" viewBox="0 0 100 100" width="22" height="22">
          <rect width="97" height="14" rx="8"></rect>
          <rect y="40" width="97" height="14" rx="8"></rect>
          <rect y="80" width="97" height="14" rx="8"></rect>
        </svg>
      </Hamburger>
      {hambugerOpen && (
        <BaseMobileMenu>
          <button onClick={onHamburgerClick}>X</button>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <button onClick={() => onHrefClick(item.href)}>{item.label}</button>
                {item.children && (
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <button onClick={() => onHrefClick(child.href)}>{child.label}</button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </BaseMobileMenu>
      )}
    </BaseHeader>
  );
});

Header.displayName = 'Header';
export default Header;

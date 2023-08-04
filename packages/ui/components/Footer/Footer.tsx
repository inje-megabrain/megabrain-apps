import { forwardRef } from 'react';

import BaseFooter from './Footer.style';
import { BaseCopyright } from './Copyright.style';

export const Header = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <footer>
      <BaseFooter ref={ref}>
        <BaseCopyright>
          <p>Copyright © 2023 메가브레인 모든 권리 보유.</p>
        </BaseCopyright>
      </BaseFooter>
    </footer>
  );
});

Header.displayName = 'Footer';
export default Header;

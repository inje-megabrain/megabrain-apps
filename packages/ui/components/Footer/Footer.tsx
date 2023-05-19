import { forwardRef } from 'react';

import BaseFooter from './Footer.style';
import { BaseCopyright } from './Copyright.style';

export const Header = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <footer>
      <BaseFooter ref={ref}>
        <div>
          <ul>
            <li>
              <button>Team</button>
            </li>
            <li>
              <button>Schedule</button>
            </li>
            <li>
              <button>Members</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>Project</button>
            </li>
            <li>
              <button>Infrastructure</button>
            </li>
            <li>
              <button>Apps 3.0</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>Tech</button>
            </li>
            <li>
              <button>Effort Board</button>
            </li>
            <li>
              <button>Server Health Check</button>
            </li>
            <li>
              <button>Codebase</button>
            </li>
            <li>
              <button>Member Blog Feed</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>Recruit</button>
            </li>
          </ul>
        </div>
        <BaseCopyright>
          <p>@ 2023 Megabrain. All rights reserved.</p>
          <p>ICONS</p>
        </BaseCopyright>
      </BaseFooter>
    </footer>
  );
});

Header.displayName = 'Footer';
export default Header;

/* eslint-disable */
import { forwardRef } from 'react';
import LightLogo from '@megabrain/ui/assets/logo-light.svg';
import { LogoProps } from './types';

export const Logo = forwardRef<SVGElement, LogoProps>(({ size = 'medium' }, ref) => {
  return (
    <span>
      <LightLogo
        width={'160px'}
        height={'40px'}
      />
    </span>
  );
});

Logo.displayName = 'Logo';

export default Logo;

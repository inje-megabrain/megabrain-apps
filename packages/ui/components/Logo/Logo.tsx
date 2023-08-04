/* eslint-disable */
import { forwardRef } from 'react';
import LightLogo from '@megabrain/ui/assets/logo-light.png';
import { LogoProps } from './types';
import Image from 'next/image';

export const Logo = forwardRef<SVGElement, LogoProps>(({ size = 'small' }, ref) => {
  return (
    <span>
      <Image
        src={LightLogo}
        alt="logo"
        width={size === 'small' ? 80 : 300}
        height={size === 'small' ? 40 : 150}
      />
    </span>
  );
});

Logo.displayName = 'Logo';

export default Logo;

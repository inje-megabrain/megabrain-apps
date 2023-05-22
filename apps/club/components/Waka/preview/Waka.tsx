import { PropsWithChildren } from 'react';
import { wrapWakaMemberContext } from '../contexts/member';

export const Waka: React.FC<PropsWithChildren> = wrapWakaMemberContext(({ children }) => (
  <>{children}</>
));

export default Waka;

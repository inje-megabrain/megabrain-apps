import { forwardRef } from 'react';
import { BaseContainer } from './Container.style';
import { ContainerProps } from './types';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ display, pad, m, overflow, center, css, children, onClick }, ref) => {
    return (
      <BaseContainer
        ref={ref}
        m={m}
        display={display}
        pad={pad}
        center={center}
        onClick={onClick}
        css={css}
        overflow={overflow}
      >
        {children}
      </BaseContainer>
    );
  }
);

Container.displayName = 'Container';

export default BaseContainer;

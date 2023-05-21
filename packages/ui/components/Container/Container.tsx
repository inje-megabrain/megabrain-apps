import { forwardRef } from 'react';
import { BaseContainer } from './Container.style';
import { ContainerProps } from './types';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      display,
      pad,
      m,
      background,
      overflow,
      layoutCenter,
      gravity,
      css,
      children,
      full,
      flow,
      onClick,
    },
    ref
  ) => {
    return (
      <BaseContainer
        ref={ref}
        m={m}
        display={display}
        pad={pad}
        onClick={onClick}
        css={css}
        overflow={overflow}
        full={full}
        layoutCenter={layoutCenter}
        gravity={gravity}
        flow={flow}
        background={background}
      >
        {children}
      </BaseContainer>
    );
  }
);

Container.displayName = 'Container';

export default BaseContainer;

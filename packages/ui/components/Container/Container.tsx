import { forwardRef } from 'react';
import { BaseContainer } from './Container.style';
import { ContainerProps } from './types';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      display,
      pad,
      modal,
      m,
      background,
      overflow,
      layoutCenter,
      gravity,
      radius,
      border,
      css,
      children,
      full,
      flow,
      shadow,
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
        shadow={shadow}
        css={css}
        overflow={overflow}
        full={full}
        layoutCenter={layoutCenter}
        gravity={gravity}
        flow={flow}
        background={background}
        border={border}
        modal={modal}
        radius={radius}
      >
        {children}
      </BaseContainer>
    );
  }
);

Container.displayName = 'Container';

export default BaseContainer;

import { forwardRef } from 'react';

import { baseTextComponent } from './Text.styles';
import type { TextProps } from './types';
import { MegabrainUIErrorTag, MegabrainUIError } from '@megabrain/ui/types';

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      full,
      css,
      tag = 'span',
      type = 'inherit',
      display,
      weight = 'normal',
      align = 'left',
      ellipsis = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const BaseComponent = baseTextComponent[tag];

    // Assert When Children is null or not string;
    if (typeof children !== 'string') {
      throw MegabrainUIError.of(MegabrainUIErrorTag.NOT_SATISFIED, '문자열을 입력해주세요.');
    }

    return (
      <BaseComponent
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        css={css}
        full={full}
        type={type}
        display={display}
        align={align}
        ellipsis={ellipsis}
        weight={weight}
        onClick={onClick}
        {...props}
      >
        {children}
      </BaseComponent>
    );
  }
);

Text.displayName = 'Text';

export default Text;

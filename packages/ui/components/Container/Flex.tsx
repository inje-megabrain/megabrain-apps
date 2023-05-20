import { forwardRef } from 'react';
import { FlexProps } from './types';
import { BaseFlex } from './Flex.style';

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ items, justify, nowrap, flow, inline, direction = 'row', ...containerProps }, ref) => {
    return (
      <BaseFlex
        items={items}
        justify={justify}
        nowrap={nowrap}
        flow={flow}
        inline={inline}
        ref={ref}
        direction={direction}
        {...containerProps}
      />
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;

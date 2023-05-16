import { forwardRef } from 'react';

import { BaseGrid } from './Grid.style';
import { GridProps } from './types';

export const Grid = forwardRef<HTMLDivElement, GridProps>(({ ...containerProps }, ref) => {
  return <BaseGrid ref={ref} {...containerProps} />;
});

Grid.displayName = 'Grid';

export default Grid;

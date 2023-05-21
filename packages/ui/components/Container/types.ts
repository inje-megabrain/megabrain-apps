import { CSS, VariantProps } from '@megabrain/ui/styles';
import { MouseEventHandler, ReactNode, BaseHTMLAttributes } from 'react';
import { BaseFlex } from './Flex.style';
import { BaseContainer } from './Container.style';
import { BaseGrid } from './Grid.style';

type ContainerOverflow =
  | 'hidden'
  | 'scroll-y-auto'
  | 'scroll-x-auto'
  | 'scroll-y-always'
  | 'scroll-x-always'
  | 'always';

type Direction = 'all' | 'horizontal' | 'vertical';

export interface ContainerProps extends VariantProps<typeof BaseContainer> {
  pad?: boolean;
  m?: boolean;
  overflow?: ContainerOverflow;
  css?: BaseHTMLAttributes<HTMLDivElement> & CSS;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
  full?: Direction;
  layoutCenter?: boolean;
  gravity?: Direction;
  flow?: boolean;
}

// type FlexJustify = 'end' | 'start' | 'between' | 'evenly' | 'around' | 'center' | 'left' | 'right';

// type FlexAlignItems = 'base' | 'center' | 'start' | 'end';
// type FlexDirection = 'row' | 'col' | 'row-reverse' | 'col-reverse';

export interface FlexProps extends ContainerProps, VariantProps<typeof BaseFlex> {
  // inline?: boolean;
  // nowrap?: boolean;
  // justify?: FlexJustify;
  // items?: FlexAlignItems;
  // direction?: VariantProps<typeof BaseFlex>['direction'];
}

export interface GridProps extends ContainerProps, VariantProps<typeof BaseGrid> {}

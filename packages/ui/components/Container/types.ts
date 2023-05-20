import { CSS } from '@megabrain/ui/styles';
import { MouseEventHandler, ReactNode } from 'react';
import { BaseHTMLAttributes } from 'react';

type ContainerDisplay = 'block' | 'inline-block' | 'inline';

type ContainerOverflow =
  | 'hidden'
  | 'scroll-y-auto'
  | 'scroll-x-auto'
  | 'scroll-y-always'
  | 'scroll-x-always'
  | 'always';

type Direction = 'all' | 'horizontal' | 'vertical';

export interface ContainerProps {
  display?: ContainerDisplay;
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

type FlexJustify = 'end' | 'start' | 'between' | 'evenly' | 'around' | 'center' | 'left' | 'right';

type FlexAlignItems = 'base' | 'center' | 'start' | 'end';

export interface FlexProps extends ContainerProps {
  inline?: boolean;
  nowrap?: boolean;

  justify?: FlexJustify;
  items?: FlexAlignItems;
}

export interface GridProps extends ContainerProps {}

import { CSS } from '@/styles';
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

type ContainerCenter = 'full' | 'vertical' | 'horizontal';

export interface ContainerProps {
  display?: ContainerDisplay;
  pad?: boolean;
  m?: boolean;
  overflow?: ContainerOverflow;
  center?: ContainerCenter;
  css?: BaseHTMLAttributes<HTMLDivElement> & CSS;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

type FlexJustify = 'end' | 'start' | 'between' | 'evenly' | 'around' | 'center' | 'left' | 'right';

type FlexAlignItems = 'base' | 'center' | 'start' | 'end';

export interface FlexProps extends ContainerProps {
  inline?: boolean;
  nowrap?: boolean;
  flow?: boolean;
  justify?: FlexJustify;
  items?: FlexAlignItems;
}

export interface GridProps extends ContainerProps {}

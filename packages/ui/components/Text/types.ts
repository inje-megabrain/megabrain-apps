import { CSS } from '@megabrain/ui/styles';
import { MouseEventHandler } from 'react';

export type TextComponentTag = 'h1' | 'span' | 'p';

export interface TextProps {
  tag?: TextComponentTag;
  css?: CSS;
  children: string; // Only String
  onClick?: MouseEventHandler<HTMLElement>;
}
